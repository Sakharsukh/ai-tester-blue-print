import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Tax Slabs Data
const OLD_REGIME_SLABS = [
    { min: 0, max: 250000, rate: 0 },
    { min: 250000, max: 500000, rate: 0.05 },
    { min: 500000, max: 1000000, rate: 0.20 },
    { min: 1000000, max: Infinity, rate: 0.30 }
];

const NEW_REGIME_SLABS = [
    { min: 0, max: 300000, rate: 0 },
    { min: 300000, max: 600000, rate: 0.05 },
    { min: 600000, max: 900000, rate: 0.10 },
    { min: 900000, max: 1200000, rate: 0.15 },
    { min: 1200000, max: 1500000, rate: 0.20 },
    { min: 1500000, max: Infinity, rate: 0.30 }
];

interface TaxRequest {
    income: number;
    regime: 'old' | 'new';
    deductions: {
        section80C: number;
        section80D: number;
        hra: number;
    };
}

const calculateTax = (income: number, slabs: any[]) => {
    let tax = 0;
    let remainingParams = income;
    let breakdown = [];

    for (const slab of slabs) {
        if (income > slab.min) {
            const taxableAmount = Math.min(income, slab.max) - slab.min;
            const slabTax = taxableAmount * slab.rate;
            tax += slabTax;
            breakdown.push({
                range: `${slab.min} - ${slab.max === Infinity ? 'Above' : slab.max}`,
                rate: `${slab.rate * 100}%`,
                amount: slabTax
            });
        }
    }
    return { tax, breakdown };
};

app.post('/api/calculate', (req, res) => {
    const { income, regime, deductions } = req.body as TaxRequest;

    let taxableIncome = income;
    let standardDeduction = 50000;
    let totalDeductions = standardDeduction;

    if (regime === 'old') {
        const d80c = Math.min(deductions.section80C, 150000);
        const d80d = deductions.section80D;
        const hra = deductions.hra;
        totalDeductions += d80c + d80d + hra;
    }

    taxableIncome = Math.max(0, income - totalDeductions);

    const slabs = regime === 'old' ? OLD_REGIME_SLABS : NEW_REGIME_SLABS;
    const { tax, breakdown } = calculateTax(taxableIncome, slabs);

    const cess = tax * 0.04;
    const totalTax = tax + cess;

    res.json({
        grossIncome: income,
        totalDeductions,
        taxableIncome,
        tax,
        cess,
        totalTax,
        breakdown,
        regime
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'Tax API is running' });
});

app.listen(port, () => {
    console.log(`Tax API running at http://localhost:${port}`);
});

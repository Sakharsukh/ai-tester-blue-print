import { test, expect } from '@playwright/test';
import { TaxCalculatorPage } from '../../pages/TaxCalculatorPage';

test.describe('Tax Calculation - Old Regime', () => {
    let taxPage: TaxCalculatorPage;

    test.beforeEach(async ({ page }) => {
        taxPage = new TaxCalculatorPage(page);
        await taxPage.goto();
    });

    test('should calculate tax for salary 5L with no deductions', async () => {
        await taxPage.fillBasicDetails(500000, 'old');
        await taxPage.calculate();

        // Expected: (500000 - 50000 standard deduction = 450000)
        // Tax: 0-250000 = 0, 250000-450000 = 200000 * 5% = 10000
        // Cess: 10000 * 4% = 400
        // Total: 10400
        const tax = await taxPage.getCalculatedTax();
        expect(tax).toContain('10,400');
    });

    test('should calculate tax for salary 10L with 80C deduction', async () => {
        await taxPage.fillBasicDetails(1000000, 'old');
        await taxPage.fillDeductions(150000, 0, 0);
        await taxPage.calculate();

        // Expected: (1000000 - 50000 - 150000 = 800000)
        // Tax: 0-250000 = 0, 250000-500000 = 12500, 500000-800000 = 60000
        // Total tax: 72500, Cess: 2900
        // Total: 75400
        const tax = await taxPage.getCalculatedTax();
        expect(tax).toContain('75,400');
    });
});

test.describe('Tax Calculation - New Regime', () => {
    let taxPage: TaxCalculatorPage;

    test.beforeEach(async ({ page }) => {
        taxPage = new TaxCalculatorPage(page);
        await taxPage.goto();
    });

    test('should calculate tax for salary 5L in new regime', async () => {
        await taxPage.fillBasicDetails(500000, 'new');
        await taxPage.calculate();

        // Expected: (500000 - 50000 = 450000)
        // Tax: 0-300000 = 0, 300000-450000 = 150000 * 5% = 7500
        // Cess: 7500 * 4% = 300
        // Total: 7800
        const tax = await taxPage.getCalculatedTax();
        expect(tax).toContain('7,800');
    });

    test('should not show 80C deduction input in new regime', async () => {
        await taxPage.fillBasicDetails(1000000, 'new');

        // 80C input should be hidden/disabled in new regime
        await expect(taxPage.section80CInput).toBeHidden();
    });
});

# 💎 Project Constitution: India Tax Calculator E2E Tests

## 📊 Data Schemas

### Input Schema (Test Data)
```typescript
interface TaxCalculationInput {
  financialYear: string;        // e.g., "2024-25"
  regime: "old" | "new";        // Tax regime
  income: {
    salary: number;
    houseProperty: number;
    businessIncome: number;
    capitalGains: number;
    otherSources: number;
  };
  deductions?: {
    section80C?: number;        // Max 1.5L
    section80D?: number;        // Medical insurance
    hra?: number;
    homeLoanInterest?: number;
  };
  age: "below60" | "60to80" | "above80";
}
```

### Output Schema (Expected Results)
```typescript
interface TaxCalculationOutput {
  grossIncome: number;
  totalDeductions: number;
  taxableIncome: number;
  taxAmount: number;
  cess: number;              // 4% health & education cess
  totalTaxLiability: number;
}
```

## ⚖️ Behavioral Rules

### 1. **Test Coverage Priority**
- **P0 (Critical)**: Basic salary tax calculation for both regimes
- **P1 (High)**: Deductions (80C, 80D, HRA)
- **P2 (Medium)**: Multiple income sources
- **P3 (Low)**: Edge cases and error handling

### 2. **Data-Driven Testing**
- Use CSV/JSON files for test data
- Cover all tax slabs (0%, 5%, 10%, 15%, 20%, 30%)
- Test boundary values (e.g., ₹2.5L, ₹5L, ₹10L thresholds)

### 3. **Assertion Strategy**
- Verify calculations with ±₹1 tolerance (for rounding)
- Check all intermediate values (gross income, deductions, taxable income)
- Validate UI displays match calculated values

### 4. **Error Handling**
- Test negative inputs
- Test exceeding deduction limits
- Test invalid regime combinations

## 📋 Confirmed Requirements

### Application Architecture
- **Frontend**: Angular (Web UI at `http://localhost:3000`)
- **Backend**: Java (REST API)
- **State**: Needs to be built from scratch

### Test Scope (Complete Coverage)
✅ UI interactions (form filling, button clicks)
✅ Calculation accuracy verification  
✅ Multiple tax regimes (Old vs New)
✅ PDF report generation
✅ API endpoint testing

### Execution Environment
- Local development machine
- GitHub Actions CI/CD pipeline

## 🪵 Maintenance Log
- **2026-01-30 21:42**: Project initialized using B.L.A.S.T. protocol
- **2026-01-30 21:48**: Requirements confirmed - Full-stack build required

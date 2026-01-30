# 🔍 Findings & Research

## 📚 Indian Tax System (FY 2024-25)

### Old Tax Regime Slabs
| Income Range | Tax Rate |
|--------------|----------|
| Up to ₹2.5L | 0% |
| ₹2.5L - ₹5L | 5% |
| ₹5L - ₹10L | 20% |
| Above ₹10L | 30% |

**Deductions Available**: 80C, 80D, HRA, Home Loan Interest, etc.

### New Tax Regime Slabs (FY 2024-25)
| Income Range | Tax Rate |
|--------------|----------|
| Up to ₹3L | 0% |
| ₹3L - ₹6L | 5% |
| ₹6L - ₹9L | 10% |
| ₹9L - ₹12L | 15% |
| ₹12L - ₹15L | 20% |
| Above ₹15L | 30% |

**Deductions**: Limited (No 80C, 80D, HRA)

### Standard Deduction
- ₹50,000 for salaried individuals (both regimes)

### Cess
- 4% Health & Education Cess on total tax

## 🧪 Test Scenarios to Cover

### Basic Scenarios
1. Salary ₹5L (Old regime) → Tax calculation
2. Salary ₹5L (New regime) → Tax calculation
3. Salary ₹10L with 80C deduction ₹1.5L
4. Salary ₹15L with HRA ₹3L

### Edge Cases
1. Income exactly at slab boundaries
2. Maximum deduction limits
3. Senior citizen tax benefits
4. Multiple income sources

## 🛠️ Technology Stack
- **Framework**: Playwright with TypeScript
- **Test Runner**: Playwright Test
- **Reporting**: HTML Reporter + Allure (optional)
- **CI/CD**: GitHub Actions
- **Data Management**: JSON fixtures

## 🚧 Constraints
- Application URL: *To be provided*
- Browser support: Chrome, Firefox, Safari
- Test execution time: < 5 minutes for full suite

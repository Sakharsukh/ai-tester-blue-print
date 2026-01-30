# 🏗️ Architecture: India Tax Calculator System

## 📐 System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    User Browser                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │         Angular Frontend (Port 4200)                │    │
│  │  - Tax calculation forms                            │    │
│  │  - Results display                                  │    │
│  │  - PDF download                                     │    │
│  └────────────────┬───────────────────────────────────┘    │
└───────────────────┼──────────────────────────────────────────┘
                    │ HTTP/REST
                    ▼
┌─────────────────────────────────────────────────────────────┐
│         Java Spring Boot Backend (Port 8080)                │
│  ┌────────────────────────────────────────────────────┐    │
│  │  REST API Controllers                               │    │
│  │  - /api/calculate (POST)                            │    │
│  │  - /api/tax-slabs (GET)                             │    │
│  │  - /api/generate-pdf (POST)                         │    │
│  └────────────────┬───────────────────────────────────┘    │
│  ┌────────────────▼───────────────────────────────────┐    │
│  │  Tax Calculation Service                            │    │
│  │  - Old Regime Calculator                            │    │
│  │  - New Regime Calculator                            │    │
│  │  - Deduction Processor                              │    │
│  └────────────────┬───────────────────────────────────┘    │
│  ┌────────────────▼───────────────────────────────────┐    │
│  │  PDF Generation Service                             │    │
│  │  - iText/Apache PDFBox                              │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                    ▲
                    │ Playwright Tests
                    │
┌─────────────────────────────────────────────────────────────┐
│         E2E Test Suite (Playwright + TypeScript)            │
│  ┌────────────────────────────────────────────────────┐    │
│  │  UI Tests                                           │    │
│  │  - Form interactions                                │    │
│  │  - Calculation verification                         │    │
│  │  - PDF download validation                          │    │
│  └─────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────┐    │
│  │  API Tests                                          │    │
│  │  - Direct endpoint testing                          │    │
│  │  - Calculation accuracy                             │    │
│  │  - Error handling                                   │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## 🗂️ Project Structure

```
Proj3-IndiaTaxCalculatorE2E/
├── tax-calculator-app/          # Angular Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── tax-form/
│   │   │   │   └── tax-result/
│   │   │   ├── services/
│   │   │   │   └── tax-api.service.ts
│   │   │   └── models/
│   │   │       └── tax-calculation.model.ts
│   │   └── environments/
│   └── package.json
│
├── tax-calculator-backend/      # Java Spring Boot
│   ├── src/main/java/com/tax/
│   │   ├── controller/
│   │   │   └── TaxController.java
│   │   ├── service/
│   │   │   ├── TaxCalculationService.java
│   │   │   └── PdfGenerationService.java
│   │   ├── model/
│   │   │   ├── TaxRequest.java
│   │   │   └── TaxResponse.java
│   │   └── TaxCalculatorApplication.java
│   └── pom.xml
│
└── e2e-tests/                   # Playwright Tests
    ├── tests/
    │   ├── ui/
    │   │   ├── tax-calculation.spec.ts
    │   │   └── pdf-generation.spec.ts
    │   └── api/
    │       └── tax-api.spec.ts
    ├── pages/
    │   └── TaxCalculatorPage.ts
    ├── fixtures/
    │   └── tax-test-data.json
    └── playwright.config.ts
```

## 🔌 API Contract

### POST /api/calculate
**Request:**
```json
{
  "financialYear": "2024-25",
  "regime": "old",
  "income": {
    "salary": 1000000,
    "houseProperty": 0,
    "businessIncome": 0,
    "capitalGains": 0,
    "otherSources": 0
  },
  "deductions": {
    "section80C": 150000,
    "section80D": 25000,
    "hra": 200000
  },
  "age": "below60"
}
```

**Response:**
```json
{
  "grossIncome": 1000000,
  "standardDeduction": 50000,
  "totalDeductions": 375000,
  "taxableIncome": 575000,
  "taxBreakdown": [
    {"slab": "0-250000", "rate": 0, "amount": 0},
    {"slab": "250000-500000", "rate": 5, "amount": 12500},
    {"slab": "500000-575000", "rate": 20, "amount": 15000}
  ],
  "totalTax": 27500,
  "cess": 1100,
  "totalTaxLiability": 28600,
  "regime": "old"
}
```

### GET /api/tax-slabs?regime=old
**Response:**
```json
{
  "regime": "old",
  "slabs": [
    {"min": 0, "max": 250000, "rate": 0},
    {"min": 250000, "max": 500000, "rate": 5},
    {"min": 500000, "max": 1000000, "rate": 20},
    {"min": 1000000, "max": null, "rate": 30}
  ],
  "standardDeduction": 50000,
  "cess": 4
}
```

### POST /api/generate-pdf
**Request:** Same as `/api/calculate`
**Response:** PDF file (application/pdf)

## 🧪 Test Strategy

### UI Tests (Playwright)
1. **Form Validation Tests**
   - Required field validation
   - Numeric input validation
   - Regime selection

2. **Calculation Tests**
   - Old regime calculation
   - New regime calculation
   - Deduction application
   - Edge cases (boundary values)

3. **PDF Generation Tests**
   - PDF download trigger
   - PDF content verification

### API Tests (Playwright)
1. **Endpoint Tests**
   - POST /api/calculate
   - GET /api/tax-slabs
   - POST /api/generate-pdf

2. **Calculation Accuracy**
   - Test all tax slabs
   - Test deduction limits
   - Test multiple income sources

3. **Error Handling**
   - Invalid inputs
   - Missing required fields
   - Exceeding deduction limits

## 🔧 Technology Stack

### Frontend
- **Framework**: Angular 17+
- **UI Library**: Angular Material
- **HTTP Client**: Angular HttpClient
- **PDF Viewer**: ng2-pdf-viewer

### Backend
- **Framework**: Spring Boot 3.2+
- **Java Version**: 17+
- **PDF Library**: iText 7 or Apache PDFBox
- **Build Tool**: Maven

### Testing
- **Framework**: Playwright
- **Language**: TypeScript
- **Test Runner**: Playwright Test
- **Reporting**: HTML Reporter + Allure

### CI/CD
- **Platform**: GitHub Actions
- **Triggers**: Push to main, Pull Request
- **Environments**: Local, CI

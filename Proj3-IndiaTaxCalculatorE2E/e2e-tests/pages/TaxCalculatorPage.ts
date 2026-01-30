import { Page, Locator } from '@playwright/test';

export class TaxCalculatorPage {
    readonly page: Page;

    // Form elements
    readonly salaryInput: Locator;
    readonly regimeOldBtn: Locator;
    readonly regimeNewBtn: Locator;
    readonly section80CInput: Locator;
    readonly section80DInput: Locator;
    readonly hraInput: Locator;
    readonly calculateButton: Locator;

    // Result elements
    readonly taxableIncomeText: Locator;
    readonly totalTaxText: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators using data-testid
        this.salaryInput = page.getByTestId('income-input');
        this.regimeOldBtn = page.getByTestId('regime-old');
        this.regimeNewBtn = page.getByTestId('regime-new');

        this.section80CInput = page.getByTestId('80c-input');
        this.section80DInput = page.getByTestId('80d-input');
        this.hraInput = page.getByTestId('hra-input');

        this.calculateButton = page.getByTestId('calculate-btn');

        this.taxableIncomeText = page.getByTestId('taxable-income');
        this.totalTaxText = page.getByTestId('total-tax');
    }

    async goto() {
        await this.page.goto('/');
    }

    async fillBasicDetails(salary: number, regime: 'old' | 'new') {
        await this.salaryInput.fill(salary.toString());
        if (regime === 'old') {
            await this.regimeOldBtn.click();
        } else {
            await this.regimeNewBtn.click();
        }
    }

    async fillDeductions(section80C: number, section80D: number, hra: number) {
        await this.section80CInput.fill(section80C.toString());
        await this.section80DInput.fill(section80D.toString());
        await this.hraInput.fill(hra.toString());
    }

    async calculate() {
        await this.calculateButton.click();
    }

    async getCalculatedTax(): Promise<string> {
        await this.totalTaxText.waitFor({ state: 'visible', timeout: 5000 });
        return await this.totalTaxText.textContent() || '';
    }
}

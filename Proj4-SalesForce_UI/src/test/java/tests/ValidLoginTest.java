package tests;

import base.BaseTest;
import org.testng.Assert;
import org.testng.annotations.Test;
import pages.LoginPage;

public class ValidLoginTest extends BaseTest {

    @Test
    public void testValidLogin() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            loginPage.enterUsername("testuser@example.com");
            loginPage.enterPassword("ValidPass123");
            loginPage.clickLogin();

            String currentUrl = driver.getCurrentUrl();
            Assert.assertTrue(currentUrl.contains("salesforce.com"), "Login navigation failed");
        } catch (Exception e) {
            Assert.fail("Test failed due to exception: " + e.getMessage());
        }
    }
}

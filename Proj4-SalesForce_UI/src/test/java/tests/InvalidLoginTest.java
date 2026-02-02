package tests;

import base.BaseTest;
import org.testng.Assert;
import org.testng.annotations.Test;
import pages.LoginPage;

public class InvalidLoginTest extends BaseTest {

    @Test
    public void testInvalidLogin() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            loginPage.enterUsername("invaliduser@test.com");
            loginPage.enterPassword("WrongPassword123");
            loginPage.clickLogin();

            String error = loginPage.getErrorMessage();
            Assert.assertTrue(error.length() > 0, "Error message not displayed for invalid login");
            Assert.assertTrue(error.contains("check your username and password"), "Unexpected error message: " + error);
        } catch (Exception e) {
            Assert.fail("Test failed due to exception: " + e.getMessage());
        }
    }
}

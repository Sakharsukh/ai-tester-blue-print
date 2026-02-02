from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.get("https://www.example.com/login")

username = driver.find_element(By.ID, "user_name")
username.send_keys("admin")

password = driver.find_element(By.NAME, "password")
password.send_keys("secret123")

submit_btn = driver.find_element(By.XPATH, "//button[@type='submit']")
submit_btn.click()

assert "Dashboard" in driver.title

driver.quit()

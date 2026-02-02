from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Firefox()
driver.get("https://www.google.com")

search_box = driver.find_element(By.NAME, "q")
search_box.send_keys("Playwright vs Selenium")
search_box.submit()

time.sleep(3)

results = driver.find_elements(By.CSS_SELECTOR, "div.g")
print(f"Found {len(results)} results")

driver.close()

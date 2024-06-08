from logging import error
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from typing import Any
import time

upgrades_dict = {
    100: "Reinforced index finger",
    500: "Carpal tunnel prevention cream",
    10000: "Ambidextrous",
    100000: "Thousand fingers",
    10000000: "Million fingers",
    100000000: "Billion fingers",
    1000000000: "Trillion fingers",
    9000000: "Kitten helpers",
    9000000000: "Kitten workers",
}


def check_upgrade(
    driver: webdriver, actions: webdriver.ActionChains, cookies: int
) -> None:
    if cookies in upgrades_dict:
        upgrade = driver.find_element(
            By.XPATH, f"//*[text()='{upgrades_dict[cookies]}']"
        )
        print(upgrade)
        actions.click(upgrade)
        del upgrades_dict[cookies]


def buy_products(
    driver: webdriver, actions: webdriver.ActionChains, store: Any, cookies: int
) -> None:
    products = store.find_elements(By.CLASS_NAME, "unlocked")
    for idx, product in enumerate(products):
        product_price_elem = product.find_element(
            By.CSS_SELECTOR, f"#productPrice{idx}"
        )
        product_price = product_price_elem.text.replace(",", ".")
        if int(float(product_price)) < cookies:
            actions.click(product)


def player(driver: webdriver) -> None:
    cookie = driver.find_element(By.CSS_SELECTOR, "#bigCookie")
    actions = webdriver.ActionChains(driver)
    actions.w3c_actions.pointer_action._duration = 100
    while True:
        actions.click(cookie)
        store = driver.find_element(By.CSS_SELECTOR, "#products")
        cookies_elem = driver.find_element(By.CSS_SELECTOR, "#cookies")
        try:
            cookies = int(
                float(
                    cookies_elem.text.split("\n", 1)[0]
                    .replace(" cookies", "")
                    .replace(" cookie", "")
                    .replace(",", ".")
                )
            )
            check_upgrade(driver, actions, cookies)
            buy_products(driver, actions, store, cookies)
        except Exception:
            pass

        actions.perform()


def cleaner(driver: webdriver) -> None:
    css_selectors = [".fc-cta-consent > p:nth-child(2)", ".cc_btn", "#langSelect-EN"]
    for selector in css_selectors:
        try:
            elem = WebDriverWait(driver, 2).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, selector))
            )
        finally:
            webdriver.ActionChains(driver).move_to_element(elem).click().perform()


def main() -> None:
    driver = webdriver.Firefox()
    driver.get("https://orteil.dashnet.org/cookieclicker/")
    cleaner(driver)
    time.sleep(2)
    player(driver)


if __name__ == "__main__":
    main()

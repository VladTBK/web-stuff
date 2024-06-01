import * as playwright from "playwright"
type Page = playwright.Page

const browserType = 'firefox'

const player = async (page: Page) => {
    const cookie = page.locator("#bigCookie")
    while (true) {
        await cookie.click()
    }
}
const cleaner = async (page: Page) => {
    const clean_arr = [".fc-cta-consent > div:nth-child(1)", ".cc_btn", "#langSelect-EN"]
    for (const tag of clean_arr) {
        const elem = page.locator(tag)
        await elem.click()
    }
}
const starter = async () => {
    const browser = await playwright[browserType].launch({ headless: false })
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://orteil.dashnet.org/cookieclicker/")
    await page.waitForLoadState("load")
    await cleaner(page)
    await page.waitForTimeout(2000);
    await player(page)
}
starter()

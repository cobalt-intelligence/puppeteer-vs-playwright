import puppeteer from 'puppeteer';
import playwright from 'playwright';

(async () => {
    for (let i = 0; i < 10; i++) {
        console.time('start');
        // await puppeteerSpeedTest();

        await playwrightSpeedTest();
        console.timeEnd('start');
    }

})();

async function puppeteerSpeedTest() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    // await page.goto('https://cobaltintelligence.com');
    await page.goto('https://www.zillow.com/homedetails/1500-Main-St-Port-Jefferson-NY-11777/142272978_zpid/');
    const title = await page.$eval('title', element => element.textContent);
    console.log({ title });
    await browser.close();
}

async function playwrightSpeedTest() {
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    // await page.goto('https://cobaltintelligence.com');
    await page.goto('https://www.zillow.com/homedetails/1500-Main-St-Port-Jefferson-NY-11777/142272978_zpid/');
    const title = await page.$eval('title', element => element.textContent);
    console.log({ title });
    await browser.close();
}
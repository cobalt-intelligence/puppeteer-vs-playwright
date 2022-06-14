# Puppeteer vs Playwright for Web Scraping in 2022

A simple comparison of two different Nodejs headless browsers. I compare speed and whether they are blocked going to someplace that sometimes blocks like Zillow.com.

My determination? 

They seem to be pretty much identical in terms of speed and API. Playwright is maybe better suited for testing since it has other browsers and device emulation out of the box.

Puppeteer is older and seems to have more libraries, such as puppeteer-stealth, that are well supported by the community.

So Puppeteer is probably my recommendation because it is older and has more community support but otherwise they seem exactly the same.

Cobalt Intelligence

| Headless Browser | Speed |
| --- | --- | --- |
| Puppeteer | 2.9249 ❌ |
| Playwright | 2.34192833 ✅ |


Zillow

| Headless Browser | Speed |
| --- | --- | --- |
| Puppeteer | 4.186 ✅ |
| Playwright | 5.1754 ❌ |
const puppeteer = require('puppeteer-core');
const path = require('path');

async function main() {
  const mode = process.argv[2] || 'both';

  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  if (mode === 'mobile' || mode === 'both') {
    await page.setViewport({
      width: 440,
      height: 960,
      deviceScaleFactor: 2
    });
    await page.goto('http://localhost:5173/crumb-and-roll/', { waitUntil: 'networkidle0' });
    // wait for all animations to complete
    await new Promise(r => setTimeout(r, 1500));

    const mobileOut = path.resolve('/Users/munna8/.gemini/antigravity/brain/294a7bca-8c30-4f1b-a6b8-95b6e490b3d5/scratch/current_mobile.png');
    await page.screenshot({ path: mobileOut, fullPage: false });
    console.log('Mobile screenshot saved to', mobileOut);
  }

  if (mode === 'desktop' || mode === 'both') {
    await page.setViewport({
      width: 1440,
      height: 850,
      deviceScaleFactor: 2
    });
    await page.goto('http://localhost:5173/crumb-and-roll/', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1500));

    const desktopOut = path.resolve('/Users/munna8/.gemini/antigravity/brain/294a7bca-8c30-4f1b-a6b8-95b6e490b3d5/scratch/current_desktop.png');
    await page.screenshot({ path: desktopOut, fullPage: false });
    console.log('Desktop screenshot saved to', desktopOut);
  }

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

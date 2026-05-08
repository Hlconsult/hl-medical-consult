const fs = require('fs');
const path = require('path');
const express = require('express');
const puppeteer = require('puppeteer');

const SITE_URL = 'https://hlmedicalconsult.cn';
const buildDir = path.join(__dirname, '..', 'build');
const sitemapPath = path.join(buildDir, 'sitemap.xml');
const fallbackHtmlPath = path.join(buildDir, 'index.html');

const getRoutesFromSitemap = () => {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const locs = Array.from(sitemap.matchAll(/<loc>(.*?)<\/loc>/g)).map((match) => match[1]);

  return locs.map((loc) => {
    const url = new URL(loc);
    return url.pathname || '/';
  });
};

const getOutputPath = (route) => {
  if (route === '/') {
    return fallbackHtmlPath;
  }

  return path.join(buildDir, route.replace(/^\//, ''), 'index.html');
};

const startServer = () => new Promise((resolve) => {
  const app = express();

  app.use(express.static(buildDir));
  app.get('*', (_req, res) => {
    res.sendFile(fallbackHtmlPath);
  });

  const server = app.listen(0, '127.0.0.1', () => {
    const address = server.address();
    resolve({ server, baseUrl: `http://127.0.0.1:${address.port}` });
  });
});

const prerender = async () => {
  if (!fs.existsSync(fallbackHtmlPath)) {
    throw new Error('build/index.html not found. Run react-scripts build before prerendering.');
  }

  if (!fs.existsSync(sitemapPath)) {
    throw new Error('build/sitemap.xml not found. Add public/sitemap.xml before prerendering.');
  }

  const routes = Array.from(new Set(getRoutesFromSitemap()));
  const { server, baseUrl } = await startServer();
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      const url = `${baseUrl}${route}`;

      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await page.waitForSelector('#root > *', { timeout: 10000 });
      await page.waitForFunction(() => document.title && document.body.innerText.trim().length > 0, { timeout: 10000 });
      await new Promise((resolve) => setTimeout(resolve, 300));
      await page.evaluate(() => document.documentElement.setAttribute('data-prerendered', 'true'));

      const html = await page.content();
      const outputPath = getOutputPath(route);
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, html);
      await page.close();

      console.log(`Prerendered ${route} -> ${path.relative(buildDir, outputPath)}`);
    }
  } finally {
    await browser.close();
    server.close();
  }
};

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});

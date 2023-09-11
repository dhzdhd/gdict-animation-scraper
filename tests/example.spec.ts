import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=hello+pronunciation/');

  const img = page.getByAltText("visual mouth movement");
  const svgs = await img.evaluateAll(list => list.map(e => e.getAttribute("data-src")));

  const gimg = await page.$$("g-img");
  const durations: number[] = [];

  for (const i of gimg) {
    const duration = await i.getAttribute("data-viseme-duration");
    if (duration !== null) {
      durations.push(parseInt(duration));
    }
  }

  console.log(durations);
  console.log(svgs);
});

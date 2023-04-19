// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Real Bitcoin Fam";
export const SITE_DESCRIPTION =
  "A support network for Bitcoin, crypto & Web3 builders that align with an OG Bitcoin vibe.";
export const TWITTER_HANDLE = "@RealBitcoinFam";
export const MY_NAME = "Real Bitcoin Fam";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;

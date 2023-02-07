export const SITE = {
  title: "Novanet Studio - Tienda en mano changelog",
  description: "Changelog aplicación web Tienda en Mano",
  defaultLanguage: "en-ve",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "novanetstudio",
};

export const KNOWN_LANGUAGES = {
  Español: "es",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://novanet.studio`;

export const COMMUNITY_INVITE_URL = `https://wa.me/message/QA5DVPVFSXYCJ1`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  es: {
    "2022": [
      { text: "v0.1.0", link: "es/2022/v010" },
      { text: "v0.2.0", link: "es/2022/v020" },
      { text: "v0.2.1", link: "es/2022/v021" },
      { text: "v0.3.3", link: "es/2022/v033" },
      { text: "v0.4.4", link: "es/2022/v044" },
      { text: "v0.5.6", link: "es/2022/v056" },
      { text: "v0.6.0", link: "es/2022/v060" },
      { text: "v0.6.1", link: "es/2022/v061" },
      { text: "v0.7.4", link: "es/2022/v074" },
      { text: "v0.8.5", link: "es/2022/v085" },
    ],
    "2023": [],
  },
};

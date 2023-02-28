export const SITE = {
  title: 'Novanet Studio',
  description: 'Changelog aplicación web Tienda en Mano',
  defaultLanguage: 'en-ve',
} as const;

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground',
  },
  twitter: 'novanetstudio',
};

export const KNOWN_LANGUAGES = {
  Español: 'es',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://novanet.studio`;

export const COMMUNITY_INVITE_URL = `https://wa.me/message/QA5DVPVFSXYCJ1`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  es: {
    '2022': [
      { text: 'v1.0.0', link: 'es/2022/v1-0-0' },
      { text: 'v2.0.0', link: 'es/2022/v2-0-0' },
      { text: 'v2.1.0', link: 'es/2022/v2-1-0' },
    ],
    '2023': [{ text: 'v2.10.0', link: 'es/2023/v2-10-0' }],
  },
};

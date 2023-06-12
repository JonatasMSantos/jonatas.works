import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'Jônatas Santos',

  origin: 'https://jonatas.works',
  basePathname: '/',
  trailingSlash: false,

  title: 'Jônatas Santos - Portifólio',
  description: 'Meu portifólio dinâmico de estudo',
  defaultImage: defaultImage,
  splitbeeAnalytics: undefined,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'pt-BR',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const SITE = { ...CONFIG, blog: undefined, splitbeeAnalytics: {} };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;

import i18nConfig from './../i18n.json';

export default {
  theme: 'dark',
  name: 'Replexica',
  logoSrc: "/wordmark.svg",
  locales: [
    i18nConfig.locale.source,
    ...i18nConfig.locale.targets,
  ],
};

import i18nConfig from './../i18n.json';

export default {
  theme: 'dark',
  name: 'Replexica',
  logoSrc: "/logo.png",
  locales: [
    i18nConfig.locale.source,
    ...i18nConfig.locale.targets,
  ],
};

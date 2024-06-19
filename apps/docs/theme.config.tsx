import React from 'react';

import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Yrano</span>,
  footer: {
    text: 'Nextra Docs Template',
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'ko', text: '한국어' },
  ],
};

export default config;

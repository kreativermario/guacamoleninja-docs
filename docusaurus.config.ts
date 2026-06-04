import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'guacamoleninja-bot',
  tagline: 'A Discord bot built with discord.js v14 and TypeScript',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.guacamoleninja.com',
  baseUrl: '/',

  organizationName: 'guacamoleninja',
  projectName: 'guacamoleninja-bot',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'guacamoleninja-bot',
      logo: {
        alt: 'guacamoleninja-bot Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/getting-started/intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/guacamoleninja/guacamoleninja-bot',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} guacamoleninja. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'guacamoleninja-bot',
  tagline: 'A Discord bot for small communities',
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
    image: 'img/mascot.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'guacamoleninja-bot',
      logo: {
        alt: 'guacamoleninja mascot',
        src: 'img/mascot.jpg',
      },
      items: [
        {
          to: '/docs/getting-started/intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/kreativermario/guacamoleninja-bot',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Getting Started', to: '/docs/getting-started/intro'},
            {label: 'Commands', to: '/docs/commands/weather'},
            {label: 'Bot API', to: '/docs/api/overview'},
            {label: 'Contributing', to: '/docs/contributing/setup'},
          ],
        },
        {
          title: 'Links',
          items: [
            {label: 'GitHub', href: 'https://github.com/kreativermario/guacamoleninja-bot'},
            {label: 'Dashboard', href: 'https://app.guacamoleninja.com'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} guacamoleninja`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const INVITE_URL =
  'https://discord.com/oauth2/authorize?client_id=1083489015979856026&permissions=66448710&scope=bot+applications.commands';

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
        alt: 'guacamoleninja shuriken logo',
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
        {
          href: INVITE_URL,
          label: 'Add to Discord',
          position: 'right',
          className: 'navbar-invite',
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
            {label: 'Contributing', to: '/docs/contributing/setup'},
          ],
        },
        {
          title: 'Links',
          items: [
            {label: 'Add to Discord', href: INVITE_URL},
            {label: 'GitHub', href: 'https://github.com/guacamoleninja/guacamoleninja-bot'},
            {label: 'app.guacamoleninja.com', href: 'https://app.guacamoleninja.com'},
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

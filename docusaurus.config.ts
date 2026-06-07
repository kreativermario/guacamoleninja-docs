import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'guacamoleninja',
  tagline: 'A Discord bot for small communities',
  favicon: 'img/favicon.ico',

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

  // Self-host Inter + Open Sans via Docusaurus stylesheets
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap',
      type: 'text/css',
    },
  ],

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
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'guacamoleninja',
      logo: {
        alt: 'guacamoleninja mascot',
        src: 'img/mascot.jpg',
        style: { borderRadius: '50%' },
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
          className: 'navbar-github-link',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'guacamoleninja',
        src: 'img/mascot.jpg',
        href: 'https://docs.guacamoleninja.com',
        width: 32,
        height: 32,
        style: { borderRadius: '50%' },
      },
      links: [
        {
          title: 'Resources',
          items: [
            { label: 'Documentation',  to: '/docs/getting-started/intro' },
            { label: 'GitHub',         href: 'https://github.com/kreativermario/guacamoleninja-bot' },
            { label: 'Self-hosting',   to: '/docs/getting-started/requirements' },
            { label: 'Contributing',   to: '/docs/contributing/setup' },
          ],
        },
        {
          title: 'Project',
          items: [
            { label: 'Bot API',       to: '/docs/api/overview' },
            { label: 'Dashboard',     href: 'https://app.guacamoleninja.com' },
            { label: 'Add to Discord', href: 'https://discord.com/oauth2/authorize?scope=bot+applications.commands' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} guacamoleninja · Open source · MIT License`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/intro',
        'getting-started/requirements',
        'getting-started/local-dev',
      ],
    },
    {
      type: 'category',
      label: 'Commands',
      items: [
        'commands/weather',
        'commands/uptime',
        'commands/server',
        'commands/config',
      ],
    },
    {
      type: 'category',
      label: 'Bot API',
      link: { type: 'doc', id: 'api/overview' },
      items: [
        'api/overview',
        'api/health',
        'api/guilds',
        'api/config',
        'api/welcome',
        'api/channels',
        'api/stats',
        'api/audit',
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        'contributing/setup',
        'contributing/conventions',
      ],
    },
  ],
};

export default sidebars;

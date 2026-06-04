import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
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
        'commands/uptime',
        'commands/server',
        'commands/config',
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

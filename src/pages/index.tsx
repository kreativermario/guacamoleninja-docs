import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const QUICK_LINKS = [
  {
    icon: '🚀',
    title: 'Getting Started',
    desc: 'Invite the bot, set your timezone, and run your first command.',
    to: '/docs/getting-started/intro',
  },
  {
    icon: '⚡',
    title: 'Commands',
    desc: 'Full reference for /weather, /server, /config, and /uptime.',
    to: '/docs/commands/weather',
  },
  {
    icon: '🔌',
    title: 'Bot API',
    desc: 'HTTP API used by the dashboard — endpoints, auth, rate limits.',
    to: '/docs/api/overview',
  },
  {
    icon: '🛠',
    title: 'Self-hosting',
    desc: 'Run your own instance with Docker, Postgres, and HCP Vault.',
    to: '/docs/getting-started/requirements',
  },
];

const COMMANDS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
    name: '/weather',
    desc: 'Current conditions and forecasts for any city via Open-Meteo.',
    to: '/docs/commands/weather',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    name: '/server',
    desc: 'Member count, creation date, and server ID.',
    to: '/docs/commands/server',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    name: '/config',
    desc: 'Timezone and prefix per-server. Requires Manage Server.',
    to: '/docs/commands/config',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    name: '/uptime',
    desc: 'Check how long the bot has been running.',
    to: '/docs/commands/uptime',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="guacamoleninja docs"
      description="Everything you need to use, configure, and self-host guacamoleninja-bot."
    >
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.mascotWrap}>
          <img src="/img/mascot.jpg" alt="guacamoleninja mascot" width={100} height={100} />
        </div>
        <h1 className={styles.title}>guacamoleninja docs</h1>
        <p className={styles.subtitle}>
          Everything you need to use, configure, and self-host guacamoleninja&#8209;bot.
        </p>
        <div className={styles.actions}>
          <Link to="/docs/getting-started/intro" className={styles.btnPrimary}>
            Get started →
          </Link>
          <Link to="/docs/getting-started/requirements" className={styles.btnOutline}>
            Self-hosting →
          </Link>
        </div>
      </section>

      <div className={styles.content}>

        {/* Quick nav */}
        <div className={styles.quickGrid}>
          {QUICK_LINKS.map((card) => (
            <Link key={card.title} to={card.to} className={styles.quickCard}>
              <div className={styles.quickCardIcon}>{card.icon}</div>
              <div className={styles.quickCardTitle}>{card.title}</div>
              <p className={styles.quickCardDesc}>{card.desc}</p>
            </Link>
          ))}
        </div>

        {/* Commands */}
        <div className={styles.sectionEyebrow}>Commands</div>
        <h2 className={styles.sectionTitle}>What the bot can do</h2>
        <p className={styles.sectionSub}>
          Four slash commands built for small communities.
        </p>
        <div className={styles.cmdGrid}>
          {COMMANDS.map((cmd) => (
            <Link key={cmd.name} to={cmd.to} className={styles.cmdCell} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.cmdCellIcon}>{cmd.icon}</div>
              <div>
                <code className={styles.cmdName}>{cmd.name}</code>
                <p className={styles.cmdDesc}>{cmd.desc}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </Layout>
  );
}

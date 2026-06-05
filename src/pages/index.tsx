import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
    name: '/weather',
    desc: 'Current conditions for any city via Open-Meteo.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    name: '/server',
    desc: 'Member count, creation date and server ID.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    name: '/config',
    desc: 'Timezone and prefix, per-server. Requires Manage Server.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    name: '/uptime',
    desc: 'Check how long the bot has been running.',
  },
];

const STEPS = [
  { n: '1', title: 'Invite the bot', desc: 'Generate an invite from the Discord Developer Portal and add it to your server.' },
  { n: '2', title: 'Configure (optional)', desc: 'Run /config set timezone to match your server.' },
  { n: '3', title: 'Run a command', desc: 'Try /weather Lisbon or /server.' },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="guacamoleninja-bot"
      description="A Discord bot for small communities — weather, server info, and per-server config."
    >
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.mascotWrap}>
            <img src="/img/mascot.jpg" alt="guacamoleninja mascot" width={96} height={96} />
          </div>
          <h1 className={styles.title}>guacamoleninja&#8209;bot</h1>
          <p className={styles.subtitle}>
            A Discord bot for small communities.<br />
            Weather, server tools, and per-server config.
          </p>
          <div className={styles.actions}>
            <Link to="/docs/getting-started/intro" className={styles.btnPrimary}>
              Read the docs →
            </Link>
            <Link to="/docs/getting-started/requirements" className={styles.btnOutline}>
              Self-hosting →
            </Link>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* Features */}
        <section className={styles.section}>
          <p className={styles.sectionLabel}>What it does</p>
          <div className={styles.grid}>
            {FEATURES.map((f) => (
              <div key={f.name} className={styles.card}>
                <div className={styles.cardIconWrap}>{f.icon}</div>
                <code className={styles.cardName}>{f.name}</code>
                <p className={styles.cardDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className={styles.divider} />

        {/* Steps */}
        <section className={styles.section}>
          <p className={styles.sectionLabel}>Get started in 3 steps</p>
          <div className={styles.steps}>
            {STEPS.map((s) => (
              <div key={s.n} className={styles.step}>
                <div className={styles.stepNum}>{s.n}</div>
                <div>
                  <div className={styles.stepTitle}>{s.title}</div>
                  <div className={styles.stepDesc}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.docsLink}>
            <Link to="/docs/getting-started/intro">Full documentation →</Link>
          </p>
        </section>
      </main>
    </Layout>
  );
}

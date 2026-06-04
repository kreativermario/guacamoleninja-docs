import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const INVITE_URL =
  'https://discord.com/oauth2/authorize?client_id=1083489015979856026&permissions=66448710&scope=bot+applications.commands';

const FEATURES = [
  { icon: '🌤️', name: '/weather', desc: 'Current conditions for any city via Open-Meteo.' },
  { icon: '🖥️', name: '/server',  desc: 'Member count, creation date and server ID.' },
  { icon: '⚙️', name: '/config',  desc: 'Timezone and prefix, per-server. Requires Manage Server.' },
  { icon: '⏱️', name: '/uptime',  desc: 'Check how long the bot has been running.' },
];

const STEPS = [
  { n: '1', title: 'Invite the bot', desc: 'Click Add to Discord and pick your server.' },
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
            <img src="/img/mascot.jpg" alt="guacamoleninja mascot" width={120} height={120} />
          </div>
          <h1 className={styles.title}>guacamoleninja&#8209;bot</h1>
          <p className={styles.subtitle}>
            A Discord bot for small communities.<br />
            Weather, server tools, and per-server config.
          </p>
          <div className={styles.actions}>
            <a href={INVITE_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Add to Discord
            </a>
            <Link to="/docs/getting-started/intro" className={styles.btnOutline}>
              Read the docs →
            </Link>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* Features */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What it does</h2>
          <div className={styles.grid}>
            {FEATURES.map((f) => (
              <div key={f.name} className={styles.card}>
                <span className={styles.cardIcon}>{f.icon}</span>
                <code className={styles.cardName}>{f.name}</code>
                <p className={styles.cardDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className={styles.divider} />

        {/* Steps */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Get started</h2>
          <ol className={styles.steps}>
            {STEPS.map((s) => (
              <li key={s.n} className={styles.step}>
                <strong>{s.title}</strong> — {s.desc}
              </li>
            ))}
          </ol>
          <p className={styles.docsLink}>
            <Link to="/docs/getting-started/intro">Full documentation →</Link>
          </p>
        </section>
      </main>
    </Layout>
  );
}

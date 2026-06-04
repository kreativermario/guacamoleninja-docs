import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const INVITE_URL =
  'https://discord.com/oauth2/authorize?client_id=1083489015979856026&permissions=66448710&scope=bot+applications.commands';

const FEATURES = [
  {
    icon: '🌤️',
    name: '/weather',
    desc: 'Current conditions and forecasts for any city. Powered by Open-Meteo — no API key needed.',
  },
  {
    icon: '🖥️',
    name: '/server',
    desc: 'Shows member count, creation date, and server ID at a glance.',
  },
  {
    icon: '⚙️',
    name: '/config',
    desc: 'Per-server timezone and prefix settings. Only server managers can change them.',
  },
  {
    icon: '⏱️',
    name: '/uptime',
    desc: 'Check how long the bot has been running without a restart.',
  },
];

const STEPS = [
  {
    n: '1',
    title: 'Add to your server',
    desc: 'Click the invite button and select your Discord server.',
  },
  {
    n: '2',
    title: 'Configure (optional)',
    desc: 'Run /config set timezone Europe/Lisbon to set your server timezone.',
  },
  {
    n: '3',
    title: 'Use a command',
    desc: 'Try /weather Lisbon or /server to get started.',
  },
];

function ShurikenIcon(): ReactNode {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{width: 18, height: 18, display: 'inline-block', verticalAlign: 'middle'}}
      aria-hidden="true"
    >
      <polygon points="50,4 62,38 96,50 62,62 50,96 38,62 4,50 38,38" fill="currentColor" />
      <circle cx="50" cy="50" r="11" fill="white" fillOpacity="0.2" />
      <circle cx="50" cy="50" r="5.5" fill="currentColor" />
    </svg>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="guacamoleninja-bot — Discord bot for small communities"
      description="Weather, server info, reminders, and per-server configuration. A Discord bot built with discord.js v14 and TypeScript."
    >
      {/* Hero */}
      <section className="gn-hero">
        <div className="gn-hero__content">
          <div className="gn-hero__badge">
            <ShurikenIcon /> guacamoleninja&#8209;bot
          </div>
          <h1 className="gn-hero__title">
            A Discord bot for<br />small communities
          </h1>
          <p className="gn-hero__sub">
            Weather forecasts, server tools, and per-server config — all in one lightweight bot.
            Open source, self-hosted, no locked features.
          </p>
          <div className="gn-hero__actions">
            <a href={INVITE_URL} target="_blank" rel="noopener noreferrer" className="gn-btn gn-btn--primary">
              Add to Discord
            </a>
            <Link to="/docs/getting-started/intro" className="gn-btn gn-btn--outline">
              Read the docs →
            </Link>
          </div>
        </div>
        <div className="gn-hero__visual">
          <img src="/img/mascot.jpg" alt="guacamoleninja mascot — astronaut holding avocado" />
        </div>
      </section>

      <div className="gn-section-divider" />

      {/* Features */}
      <section className="gn-features">
        <h2 className="gn-section-heading">What it does</h2>
        <div className="gn-grid">
          {FEATURES.map((f) => (
            <div key={f.name} className="gn-card">
              <div className="gn-card__icon">{f.icon}</div>
              <div className="gn-card__name">{f.name}</div>
              <div className="gn-card__desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="gn-section-divider" />

      {/* Quick start */}
      <section className="gn-steps">
        <h2 className="gn-section-heading">Get started in 3 steps</h2>
        {STEPS.map((s) => (
          <div key={s.n} className="gn-step">
            <div className="gn-step__num">{s.n}</div>
            <div>
              <div className="gn-step__title">{s.title}</div>
              <div className="gn-step__desc">{s.desc}</div>
            </div>
          </div>
        ))}
        <div style={{textAlign: 'center', marginTop: '1.75rem'}}>
          <Link to="/docs/getting-started/intro" style={{color: 'var(--gn-accent)', fontWeight: 600, fontSize: '0.9rem'}}>
            Full documentation →
          </Link>
        </div>
      </section>
    </Layout>
  );
}

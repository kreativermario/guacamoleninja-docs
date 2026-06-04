import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: '1rem', padding: '2rem', textAlign: 'center'}}>
        <h1>{siteConfig.title}</h1>
        <p style={{fontSize: '1.2rem', maxWidth: '480px'}}>{siteConfig.tagline}</p>
        <Link className="button button--primary button--lg" to="/docs/getting-started/intro">
          Get Started
        </Link>
      </main>
    </Layout>
  );
}

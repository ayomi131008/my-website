import PortfolioGrid from '@/components/PortfolioGrid';

export const metadata = { title: 'Portfolio', description: 'Selected branding, packaging, print, social and web graphics projects.' };

export default function Portfolio() {
  return (
    <div className="wrap page">
      <h1>Portfolio</h1>
      <p className="lead">A selection of recent projects across identity, packaging, print and digital.</p>
      <PortfolioGrid />
    </div>
  );
}

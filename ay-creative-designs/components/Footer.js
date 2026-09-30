import Link from 'next/link';
import { nav, site } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <div>
          <p className="logo">AY Creative Designs</p>
          <p className="muted">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">{nav.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}</nav>
        <div>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p className="muted">&copy; {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  );
}

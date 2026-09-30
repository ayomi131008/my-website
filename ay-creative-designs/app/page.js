import Link from 'next/link';
import Art from '@/components/Art';
import { projects, services } from '@/lib/data';

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <h1>
          <span className="line"><span>Graphic design that makes</span></span>
          <span className="line"><span>small brands look</span></span>
          <span className="line"><span>established.</span></span>
        </h1>
        <div className="hero-foot">
          <p className="lead">AY Creative Designs is a graphic design studio working with founders and teams in the US, UK and beyond. Identity, packaging, print and digital graphics, delivered on time.</p>
          <div className="actions">
            <Link href="/contact" className="btn">Start a project</Link>
            <Link href="/portfolio" className="textlink">See the work</Link>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head"><h2>Selected work</h2><Link href="/portfolio" className="textlink">All projects</Link></div>
        <ul className="grid">
          {projects.slice(0, 3).map((p) => (
            <li key={p.slug} className="project">
              <div className="frame"><Art kind={p.kind} c={p.c} /></div>
              <h3>{p.title}</h3><p className="muted">{p.category}, {p.year}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap section">
        <div className="section-head"><h2>What I design</h2><Link href="/services" className="textlink">Services and pricing</Link></div>
        <ul className="rows">
          {services.map((s) => <li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>)}
        </ul>
      </section>

      <section className="wrap section cta">
        <h2>Have a project in mind?</h2>
        <p className="lead">Tell me what you are making and when you need it. I reply within two working days.</p>
        <Link href="/contact" className="btn">Get in touch</Link>
      </section>
    </>
  );
}

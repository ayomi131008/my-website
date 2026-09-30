import Link from 'next/link';
import { services, process } from '@/lib/data';

export const metadata = { title: 'Services', description: 'Brand identity, logo, packaging, print, social and web graphics with clear starting prices in USD.' };

export default function Services() {
  return (
    <div className="wrap page">
      <h1>Services</h1>
      <p className="lead">Every project starts with a fixed quote. Prices below are starting points in USD; GBP quotes are available.</p>
      <ul className="rows big">
        {services.map((s) => (
          <li key={s.title}>
            <div><h2>{s.title}</h2><p className="muted">{s.from}</p></div>
            <div><p>{s.text}</p><ul className="list">{s.items.map((i) => <li key={i}>{i}</li>)}</ul></div>
          </li>
        ))}
      </ul>
      <h2 className="sub">How a project runs</h2>
      <ol className="steps">
        {process.map((p, i) => <li key={p.title}><span className="step-n">{i + 1}</span><h3>{p.title}</h3><p>{p.text}</p></li>)}
      </ol>
      <div className="cta"><Link href="/contact" className="btn">Request a quote</Link></div>
    </div>
  );
}

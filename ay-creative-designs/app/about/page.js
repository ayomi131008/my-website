import Link from 'next/link';

export const metadata = { title: 'About', description: 'About AY Creative Designs, an independent graphic design studio working with clients worldwide.' };

export default function About() {
  return (
    <div className="wrap page narrow">
      <h1>About</h1>
      <p className="lead">AY Creative Designs is an independent graphic design studio. You work directly with the designer, from first call to final files.</p>
      <p>Good design is clear before it is clever. I build identities and graphics that explain a business quickly, reproduce well in print and on screen, and stay consistent as the brand grows.</p>
      <p>I work with clients across the US and UK, and in other time zones too. Projects run remotely with scheduled check-ins, shared feedback links and a fixed timeline, so you always know what comes next.</p>
      <h2 className="sub">Working together</h2>
      <ul className="list">
        <li>One point of contact throughout</li>
        <li>Fixed quotes, agreed before work starts</li>
        <li>Clean, named source files on delivery</li>
        <li>Replies within two working days</li>
      </ul>
      <div className="cta"><Link href="/contact" className="btn">Work with me</Link></div>
    </div>
  );
}

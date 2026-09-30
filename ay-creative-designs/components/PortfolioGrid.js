'use client';
import { useState } from 'react';
import Art from './Art';
import { projects, categories } from '@/lib/data';

export default function PortfolioGrid() {
  const [cat, setCat] = useState('All');
  const list = cat === 'All' ? projects : projects.filter((p) => p.category === cat);
  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {categories.map((c) => <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      <ul className="grid">
        {list.map((p) => (
          <li key={p.slug} className="project">
            <div className="frame"><Art kind={p.kind} c={p.c} /></div>
            <h3>{p.title}</h3>
            <p className="muted">{p.category}, {p.year}</p>
            <p>{p.text}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

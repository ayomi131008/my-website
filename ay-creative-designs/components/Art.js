// Placeholder cover art built from flat shapes. Replace with real project images (see README).
export default function Art({ kind, c }) {
  const [a, b, d] = c;
  const s = { 0: <><circle cx="200" cy="150" r="80" fill={b} /><rect x="200" y="70" width="80" height="160" fill={d} /></>,
    1: <><rect x="70" y="190" width="260" height="14" fill={b} /><rect x="70" y="80" width="14" height="110" fill={b} /><rect x="110" y="110" width="14" height="80" fill={d} /></>,
    2: <><rect x="130" y="60" width="140" height="190" rx="8" fill={b} /><rect x="130" y="60" width="140" height="44" rx="8" fill={d} /><circle cx="200" cy="170" r="26" fill={a} /></>,
    3: <><rect x="90" y="50" width="130" height="200" fill={b} /><rect x="180" y="80" width="130" height="200" fill={d} /></>,
    4: <><rect x="60" y="60" width="120" height="120" fill={b} /><rect x="220" y="120" width="120" height="120" fill={d} /></>,
    5: <><rect x="80" y="70" width="60" height="60" rx="30" fill={b} /><rect x="170" y="70" width="60" height="60" fill={d} /><rect x="260" y="70" width="60" height="60" rx="6" fill={b} /><rect x="80" y="170" width="60" height="60" fill={d} /><rect x="170" y="170" width="60" height="60" rx="30" fill={b} /><rect x="260" y="170" width="60" height="60" fill={d} /></> }[kind];
  return <svg viewBox="0 0 400 300" role="img" aria-hidden="true" className="art"><rect width="400" height="300" fill={a} />{s}</svg>;
}

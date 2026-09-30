'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [state, setState] = useState({ status: 'idle', error: '' });
  async function onSubmit(e) {
    e.preventDefault();
    setState({ status: 'sending', error: '' });
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Something went wrong.');
      setState({ status: 'sent', error: '' });
      e.target.reset();
    } catch (err) {
      setState({ status: 'error', error: err.message });
    }
  }
  if (state.status === 'sent') return <p className="notice" role="status">Message sent. You will get a reply within two working days.</p>;
  return (
    <form onSubmit={onSubmit} className="form" noValidate>
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Project type
        <select name="type" defaultValue="Brand identity">
          <option>Brand identity</option><option>Logo design</option><option>Packaging</option>
          <option>Print and editorial</option><option>Social and marketing assets</option><option>Web graphics</option><option>Something else</option>
        </select>
      </label>
      <label>Budget
        <select name="budget" defaultValue="Not sure yet">
          <option>Under $500</option><option>$500 to $2,000</option><option>$2,000 to $5,000</option><option>$5,000+</option><option>Not sure yet</option>
        </select>
      </label>
      <label>Tell me about the project<textarea name="message" rows="6" required /></label>
      <input name="website" tabIndex="-1" autoComplete="off" className="hp" aria-hidden="true" />
      <button type="submit" className="btn" disabled={state.status === 'sending'}>{state.status === 'sending' ? 'Sending' : 'Send message'}</button>
      {state.status === 'error' && <p className="error" role="alert">{state.error}</p>}
    </form>
  );
}

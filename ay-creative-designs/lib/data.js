export const site = {
  name: 'AY Creative Designs',
  email: 'hello@aycreativedesigns.com',
  tagline: 'Graphic design for brands that want to be taken seriously.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aycreativedesigns.com',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const services = [
  { title: 'Brand identity', text: 'A complete visual system: logo, colour, type and usage guidelines your team can apply without guessing.', items: ['Logo suite', 'Colour and type system', 'Brand guidelines PDF'], from: 'From $1,800' },
  { title: 'Logo design', text: 'A distinctive mark in three concepts, refined into the one you choose.', items: ['3 initial concepts', 'Full file package', '2 revision rounds'], from: 'From $450' },
  { title: 'Packaging', text: 'Labels, boxes and sleeves that hold up on a shelf and print cleanly.', items: ['Dieline setup', 'Print-ready artwork', 'Mockups'], from: 'From $900' },
  { title: 'Print and editorial', text: 'Brochures, menus, reports and posters with clear hierarchy and careful typesetting.', items: ['Layout and typesetting', 'Print-ready PDFs', 'Editable templates'], from: 'From $350' },
  { title: 'Social and marketing assets', text: 'Templates and campaign graphics that keep every channel looking like one brand.', items: ['Post and story templates', 'Ad creatives', 'Editable source files'], from: 'From $300' },
  { title: 'Web graphics', text: 'Illustrations, icons and page graphics that fit your site and load fast.', items: ['Icon sets', 'Hero and section art', 'Optimised exports'], from: 'From $250' },
];

export const process = [
  { title: 'Brief', text: 'A short call or form to agree goals, audience, timeline and budget.' },
  { title: 'Concepts', text: 'Early directions shared for feedback before anything is polished.' },
  { title: 'Refine', text: 'Your chosen direction is developed and revised with you.' },
  { title: 'Deliver', text: 'Final files, organised and named, with support after handover.' },
];

export const projects = [
  { slug: 'northfield', title: 'Northfield Coffee', category: 'Branding', year: 2025, text: 'Identity and packaging for a small-batch roaster in Manchester.', kind: 0, c: ['#1F2A44', '#E9E6DF', '#C8553D'] },
  { slug: 'halden', title: 'Halden Studio', category: 'Branding', year: 2025, text: 'Wordmark and stationery for an architecture practice in Austin.', kind: 1, c: ['#E9E6DF', '#14161A', '#6B7A6F'] },
  { slug: 'oma-tea', title: 'Oma Tea', category: 'Packaging', year: 2024, text: 'Tin and pouch range for a loose-leaf tea brand.', kind: 2, c: ['#6B7A6F', '#E9E6DF', '#14161A'] },
  { slug: 'fieldnotes', title: 'Field Notes Annual', category: 'Print', year: 2024, text: 'A 64-page annual report for a London research charity.', kind: 3, c: ['#C8553D', '#14161A', '#E9E6DF'] },
  { slug: 'lumen', title: 'Lumen Launch', category: 'Social', year: 2024, text: 'Campaign templates for a fintech product launch across four channels.', kind: 4, c: ['#14161A', '#E9E6DF', '#2B3FD6'] },
  { slug: 'parkline', title: 'Parkline Icons', category: 'Web', year: 2023, text: 'A 48-icon set for a mobility app, drawn on a consistent grid.', kind: 5, c: ['#E9E6DF', '#2B3FD6', '#14161A'] },
];
export const categories = ['All', 'Branding', 'Packaging', 'Print', 'Social', 'Web'];

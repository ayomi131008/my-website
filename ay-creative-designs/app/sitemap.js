import { nav, site } from '@/lib/data';
export default function sitemap() { return nav.map((n) => ({ url: `${site.url}${n.href === '/' ? '' : n.href}`, lastModified: new Date() })); }

import Link from 'next/link';
export default function NotFound() {
  return <div className="wrap page"><h1>Page not found</h1><p className="lead">That page does not exist or has moved.</p><Link href="/" className="btn">Back to home</Link></div>;
}

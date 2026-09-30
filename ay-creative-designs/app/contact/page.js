import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/data';

export const metadata = { title: 'Contact', description: 'Start a project with AY Creative Designs. Replies within two working days.' };

export default function Contact() {
  return (
    <div className="wrap page two">
      <div>
        <h1>Contact</h1>
        <p className="lead">Share a few details and I will reply within two working days.</p>
        <p>Prefer email? <a href={`mailto:${site.email}`} className="textlink">{site.email}</a></p>
      </div>
      <ContactForm />
    </div>
  );
}

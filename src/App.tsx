import { Link } from './components/link';
import { socialLinks } from './constants/social';

export function App() {
  return (
    <div className='space-y-6 pt-40'>
      <div className='space-y-1 text-4xl font-bold'>
        <h2 className='gradient-text'>hello! what's up?</h2>

        <h1 className='gradient-text'>
          <span className='text-primary neon-effect'>cristian</span>, a web
          developer
        </h1>
      </div>

      <ul className='flex items-center gap-5'>
        {socialLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

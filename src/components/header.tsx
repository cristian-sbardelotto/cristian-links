import { useTranslation } from 'react-i18next';
import { socialLinks } from '../constants/social';
import { Link } from './ui/link';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className='space-y-6'>
      <div className='space-y-1 text-4xl font-bold'>
        <h1 className='gradient-text'>
          {t('home.title')}{' '}
          <span className='text-primary neon-effect'>cristian</span>
          {', '}
          {t('home.second_title')}
        </h1>
      </div>

      <ul className='flex items-center gap-5'>
        {socialLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

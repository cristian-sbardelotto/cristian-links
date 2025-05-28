import { useTranslation } from 'react-i18next';
import { Link } from './components/link';
import { ProjectCard } from './components/project-card';
import { projects } from './constants/projects';
import { socialLinks } from './constants/social';

export function App() {
  const { t, i18n } = useTranslation();

  function toggleLanguage() {
    const newLanguage = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLanguage);
  }

  return (
    <div className='space-y-6 pt-28'>
      <p
        onClick={toggleLanguage}
        className='-mt-3 cursor-pointer underline-offset-4 hover:underline'
      >
        {i18n.language}
      </p>
      <div className='space-y-1 text-4xl font-bold'>
        <h1 className='gradient-text'>
          {t('home.title')}{' '}
          <span className='text-primary neon-effect'>cristian</span>
          {', '}
          {t('home.second_title')} <span className='text-white'>👑</span>
        </h1>
      </div>
      <ul className='flex items-center gap-5'>
        {socialLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className='mt-10 space-y-2'>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={t(project.description_key)}
            href={project.href}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
      <div className='bg-muted/5 h-0.5 w-full' />
      <p className='text-muted/60'>
        {t('footer.copyright')}{' '}
        <a
          className='inline-block text-zinc-200 underline-offset-4 hover:underline'
          target='_blank'
          href='https://www.linkedin.com/company/hashcubed/posts/'
        >
          Hash³
        </a>{' '}
        {t('footer.second_copyright')}
      </p>
      <div className='text-muted/60 flex items-center gap-1.5 text-sm'>
        <span>typescript</span>
        <div className='bg-muted/60 size-0.5 rounded-full' />
        <span>react</span>
        <div className='bg-muted/60 size-0.5 rounded-full' />
        <span>tailwind</span>
        <div className='bg-muted/60 size-0.5 rounded-full' />
        <span>git</span>
      </div>
    </div>
  );
}

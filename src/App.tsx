import { Link } from './components/link';
import { ProjectCard } from './components/project-card';
import { projects } from './constants/projects';
import { socialLinks } from './constants/social';

export function App() {
  return (
    <div className='space-y-6 pt-36'>
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

      <div className='mt-10 space-y-2'>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            href={project.href}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>

      <div className='bg-muted/5 h-0.5 w-full' />

      <p className='text-muted/65'>
        i'm currently working at{' '}
        <a
          className='inline-block text-zinc-200 underline-offset-4 hover:underline'
          target='_blank'
          href='https://www.linkedin.com/company/hashcubed/posts/'
        >
          Hash³
        </a>{' '}
        as a frontend developer, but sometimes i like to mess with some backend
        tools
      </p>
    </div>
  );
}

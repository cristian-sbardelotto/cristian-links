import { Link } from './components/link';
import { ProjectCard } from './components/project-card';
import { projects } from './constants/projects';
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
    </div>
  );
}

/* 
<img
  alt="United States"
  style="border-radius: 1000px;"
  height="100"
  width="100"
  src="http://purecatamphetamine.github.io/country-flag-icons/1x1/US.svg"/>

*/

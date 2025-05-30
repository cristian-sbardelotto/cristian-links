import { useTranslation } from 'react-i18next';
import { projects } from '../constants/projects';
import { ProjectCard } from './project-card';

export function Projects() {
  const { t } = useTranslation();

  return (
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
  );
}

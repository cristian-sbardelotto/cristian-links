import { MoveUpRightIcon } from 'lucide-react';

type Props = {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
};

export function ProjectCard({ title, description, href, imageUrl }: Props) {
  return (
    <a
      href={href}
      target='_blank'
      className='hover:bg-muted/5 flex gap-4 rounded-xl p-4 pl-1 transition-all hover:scale-[1.01]'
    >
      <img src={imageUrl} alt={`${title} image`} className='mt-1 size-4' />

      <div className='flex flex-col gap-1'>
        <p className='flex items-center gap-2'>
          {title} <MoveUpRightIcon className='text-muted' size={12} />
        </p>

        <p className='text-muted/60 text-sm'>{description}</p>
      </div>
    </a>
  );
}

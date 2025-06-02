import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'a'>;

export function Link({ className, ...props }: Props) {
  return (
    <a
      className={twMerge(
        'text-muted/60 block cursor-pointer transition-all hover:-translate-y-0.5 hover:text-zinc-200',
        className,
      )}
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    />
  );
}

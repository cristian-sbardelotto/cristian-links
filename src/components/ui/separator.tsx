type Props = {
  variant?: 'horizontal' | 'dot';
};

export function Separator({ variant = 'horizontal' }: Props) {
  return variant === 'horizontal' ? (
    <div className='bg-muted/5 h-0.5 w-full' />
  ) : (
    <div className='bg-muted/60 size-0.5 rounded-full' />
  );
}

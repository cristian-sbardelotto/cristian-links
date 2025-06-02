import { useTranslation } from 'react-i18next';
import { Separator } from './ui/separator';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='space-y-6'>
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
        <Separator variant='dot' />
        <span>react</span>
        <Separator variant='dot' />
        <span>tailwind</span>
        <Separator variant='dot' />
        <span>git</span>
      </div>
    </footer>
  );
}

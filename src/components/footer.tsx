import { useTranslation } from 'react-i18next';
import { Separator } from './ui/separator';
import { Link } from './ui/link';

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
        <span>go</span>
        <Separator variant='dot' />
        <span>python</span>
      </div>

      <p className='text-muted/60 flex items-center gap-1 text-sm'>
        {t('footer.credits')}{' '}
        <Link href='https://tiagorangel.com/' className='text-zinc-50'>
          tiagorangel.com
        </Link>
      </p>
    </footer>
  );
}

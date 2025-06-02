import { LanguageSwitcher } from './components/language-switcher';
import { Header } from './components/header';
import { Projects } from './components/projects';
import { Separator } from './components/ui/separator';
import { Footer } from './components/footer';

export function App() {
  return (
    <div className='space-y-6 px-5 py-20'>
      <LanguageSwitcher />
      <Header />
      <Projects />
      <Separator />
      <Footer />
    </div>
  );
}

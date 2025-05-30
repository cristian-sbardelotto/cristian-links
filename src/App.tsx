import { LanguageSwitcher } from './components/language-switcher';
import { Header } from './components/header';
import { Projects } from './components/projects';
import { Separator } from './components/separator';
import { Footer } from './components/footer';

export function App() {
  return (
    <div className='space-y-6 pt-28'>
      <LanguageSwitcher />
      <Header />
      <Projects />
      <Separator />
      <Footer />
    </div>
  );
}

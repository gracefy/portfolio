import NavbarMain from './components/navbar/NavbarMain';
import HeroMain from './components/hero/HeroMain';
import AboutMain from './components/about/AboutMain';
import SkillMain from './components/skill/SkillMain';
import ExperienceMain from './components/experience/ExperienceMain';
import ProjectMain from './components/project/ProjectMain';
import ContactMain from './components/contact/ContactMain';
import FooterMain from './components/footer/FooterMain';

// App component with all the components
function App() {
  return (
    <>
      <NavbarMain />
      <HeroMain />
      <AboutMain />
      <SkillMain />
      <ExperienceMain />
      <ProjectMain />
      <ContactMain />
      <FooterMain />
    </>
  );
}

export default App;

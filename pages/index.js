import { About } from "../components/About/";
import { Timeline } from "../components/Timeline/";
import { Projects } from "../components/Projects/";
import { Skills } from "../components/Skills/";
import { TechStack } from "../components/TechStack/";
const Home = () => {
  return (
    <>
      <About />
      <Timeline />
      <Projects />
      <TechStack />
      <Skills />
    </>
  );
};

export default Home;

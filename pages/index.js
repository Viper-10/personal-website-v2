import { About } from "../Components/About/";
import { SocialProfile } from "../Components/Social Profile/";
import { Timeline } from "../Components/Timeline/";
import { Projects } from "../Components/Projects/";
import { Skills } from "../Components/Skills/";
import { TechStack } from "../Components/TechStack/";
const Home = () => {
  return (
    <>
      <About />
      <Timeline />
      <Projects />
      <TechStack />
      <Skills />
      {/* <SocialProfile /> */}
    </>
  );
};

export default Home;

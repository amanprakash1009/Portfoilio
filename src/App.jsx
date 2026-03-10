import Particles from "./Components/UI/Particles";
import About from "./Pages/About";
import Hero from "./Pages/Hero";
import Navbar from "./Components/UI/Navbar";
import SectionWatcher from "./lib/SectionWatcher";
import { Skills } from "./Pages/Skills";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="min-h-screen w-screen bg-black relative">
      <SectionWatcher />
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={1000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <Navbar />
      <div className="relative z-10">
        <Hero />
      </div>
      <div className="relative z-10">
        <About />
      </div>
      <div className="relative z-10">
        <Skills />
      </div>
      <div className="relative z-10">
        <Projects />
      </div>
    </div>
  );
}

export default App;

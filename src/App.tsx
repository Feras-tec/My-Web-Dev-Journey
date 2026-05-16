import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content selection:bg-primary selection:text-primary-content">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;

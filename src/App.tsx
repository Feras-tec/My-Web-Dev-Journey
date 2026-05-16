import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content selection:bg-primary selection:text-primary-content">
      <Navbar />
      <main>
        <Hero />
        <Skills />
      </main>
    </div>
  );
}

export default App;

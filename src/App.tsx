import "./App.css";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[var(--color-background)]">
        <Hero />
        <Gallery />
      </div>
    </>
  );
}

export default App;

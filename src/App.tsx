import "./App.css";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[var(--background)]">
        <Navbar />
        <Hero />
        <Gallery />
        <Music />
        <Footer />
      </div>
    </>
  );
}

export default App;

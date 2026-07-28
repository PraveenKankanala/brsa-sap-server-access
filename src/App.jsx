import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import Aboutus from "./components/Aboutus";
import Products from "./components/Products";
import Modules from "./components/Modules";
import Features from "./components/Features";
import Whytochooseus from "./components/Whytochooseus";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutus />
      <Products />
      <Modules />
      <Features />
      <Whytochooseus />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
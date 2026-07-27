import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Modules from "./components/Modules";
import Features from "./components/Features";
import WhyToChooseUs from "./components/WhyToChooseUs";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <Modules />
      <Features />
      <WhyToChooseUs />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
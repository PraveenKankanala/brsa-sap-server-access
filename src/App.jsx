import "./App.css";

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Home page components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Products from "./components/Products";
import Modules from "./components/Modules";
import Features from "./components/Features";
import Whytochooseus from "./components/Whytochooseus";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Whatsappbutton from "./components/Whatsappbutton";

// SAP Functional Modules - Lazy Loaded
const SAPFI = lazy(() => import("./pages/SAPFI"));
const SAPCO = lazy(() => import("./pages/SAPCO"));
const SAPMM = lazy(() => import("./pages/SAPMM"));
const SAPSD = lazy(() => import("./pages/SAPSD"));
const SAPPP = lazy(() => import("./pages/SAPPP"));
const SAPQM = lazy(() => import("./pages/SAPQM"));
const SAPHCM = lazy(() => import("./pages/SAPHCM"));
const SAPPS = lazy(() => import("./pages/SAPPS"));
const SAPPM = lazy(() => import("./pages/SAPPM"));
const SAPEWM = lazy(() => import("./pages/SAPEWM"));
const SAPTM = lazy(() => import("./pages/SAPTM"));
const SAPGTS = lazy(() => import("./pages/SAPGTS"));
const SAPAriba = lazy(() => import("./pages/SAPAriba"));
const SAPBW4HANA = lazy(() => import("./pages/SAPBW4HANA"));
const SAPSuccessFactors = lazy(
  () => import("./pages/SAPSuccessFactors")
);

// SAP Technology / Platform
const SAPBTP = lazy(() => import("./pages/SAPBTP"));

// SAP Technical Modules
const SAPABAP = lazy(() => import("./pages/SAPABAP"));
const SAPBasis = lazy(() => import("./pages/SAPBasis"));
const SAPGRC = lazy(() => import("./pages/SAPGRC"));


// =========================
// HOME PAGE
// =========================

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Aboutus />
        <Products />
        <Modules />
        <Features />
        <Whytochooseus />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <Whatsappbutton />
    </>
  );
}


// =========================
// LOADING SCREEN
// =========================

function Loading() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
      }}
    >
      Loading...
    </div>
  );
}


// =========================
// APP
// =========================

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>

          {/* =====================
              MAIN PAGES
          ===================== */}

          <Route path="/" element={<Home />} />

          <Route
            path="/modules"
            element={<Modules />}
          />


          {/* =====================
              SAP FUNCTIONAL MODULES
          ===================== */}

          <Route
            path="/SAPFI"
            element={<SAPFI />}
          />

          <Route
            path="/SAPCO"
            element={<SAPCO />}
          />

          <Route
            path="/SAPMM"
            element={<SAPMM />}
          />

          <Route
            path="/SAPSD"
            element={<SAPSD />}
          />

          <Route
            path="/SAPPP"
            element={<SAPPP />}
          />

          <Route
            path="/SAPQM"
            element={<SAPQM />}
          />

          <Route
            path="/SAPHCM"
            element={<SAPHCM />}
          />

          <Route
            path="/SAPPS"
            element={<SAPPS />}
          />

          <Route
            path="/SAPPM"
            element={<SAPPM />}
          />

          <Route
            path="/SAPEWM"
            element={<SAPEWM />}
          />

          <Route
            path="/SAPTM"
            element={<SAPTM />}
          />

          <Route
            path="/SAPGTS"
            element={<SAPGTS />}
          />

          <Route
            path="/SAPAriba"
            element={<SAPAriba />}
          />

          <Route
            path="/SAPBW4HANA"
            element={<SAPBW4HANA />}
          />

          <Route
            path="/SAPSuccessFactors"
            element={<SAPSuccessFactors />}
          />


          {/* =====================
              SAP TECHNOLOGY
          ===================== */}

          <Route
            path="/SAPBTP"
            element={<SAPBTP />}
          />


          {/* =====================
              SAP TECHNICAL MODULES
          ===================== */}

          <Route
            path="/SAPABAP"
            element={<SAPABAP />}
          />

          <Route
            path="/SAPBasis"
            element={<SAPBasis />}
          />

          <Route
            path="/SAPGRC"
            element={<SAPGRC />}
          />


          {/* =====================
              404 FALLBACK
          ===================== */}

          <Route
            path="*"
            element={<Home />}
          />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
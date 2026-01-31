import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductList from "./components/ProdukctList";
import SocialProof from "./components/SocialProof";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Hero />
      <Features />
      <ProductList />
      <SocialProof />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

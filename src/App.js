import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Pages/Hero";
import WhatWeOffer from "./Pages/WhatWeOffer";
// import Testimonials from "./Pages/Testimonials";
// import ContactForm from "./Pages/ContactForm";
// import FAQ from "./Pages/FAQ";
// import Footer from "./Pages/footer";
import WhyBusinessesChooseUs from "./Pages/WhyChooseUs";
function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <WhatWeOffer/>
      <WhyBusinessesChooseUs/>
      {/* <Testimonials/>
      <ContactForm/>
      <FAQ/>
      <Footer/> */}
    
    </div>
  );
}

export default App;

import React from "react";
// import Navbar from "./Components/Navbar";
import HeroSection from "./Pages/Hero";
// import WhatWeOffer from "./Pages/WhatWeOffer";
import Testimonials from "./Pages/Testimonials";
import ContactForm from "./Pages/ContactForm";
import FAQ from "./Pages/FAQ";
import Footer from "./Pages/footer";
import WhyBusinessesChooseUs from "./Pages/WhyChooseUs";
import Partners from "./Pages/partners";
import SecurityServicesPage from "./Pages/SecurityServicesPage";
function App() {
  return (
    
    <div className="App">
      {/* <Navbar/> */}
      <HeroSection/>
      {/* <WhatWeOffer/> */}
      <SecurityServicesPage/>
      <WhyBusinessesChooseUs/>
      <Testimonials/>
      <FAQ/>
      <Partners/>
      <ContactForm/>
      <Footer/>
    
    </div>
  );
}

export default App;

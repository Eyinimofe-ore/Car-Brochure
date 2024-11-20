import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Cars from "./components/Cars/Cars";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

import "./App.css";
function HomePage() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
     <Companies/>
       <Cars/>
     <Value/>
        <Contact/>
     <GetStarted/>
        <Footer/> 
      
    </div>
  );
}

export default HomePage;

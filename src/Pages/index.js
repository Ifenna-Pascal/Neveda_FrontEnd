import Nav from "../Components/Nav"
import Hero from "../Components/Hero";
import Section1 from "../Components/Section1/index";
import Section2 from "../Components/Section2/index";
import Section3 from "../Components/Section3/index";
import Section4 from "../Components/Section4/index";
import Section5 from "../Components/Section5/index";
import Footer from "../Components/Footer";
// import { SectionH1 } from "../Components/GeneralStyle";
function HomePage(){
    return (
        <div>
          <Nav/>  
          <Hero/>
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
          <Section5/>
          <Footer/>
        </div>
    )
}

export default HomePage;
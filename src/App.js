
import Nav from "./Componenrts/Common/Nav";
// import Usestatea from "./Componenrts/landingpage/Usestatea";
import Bio from "./Componenrts/Bio/Bio"
import Projects from "./Componenrts/Projects/Projects";
import Skill from "./Componenrts/Skill/Skill" 
import Contact from "./Componenrts/Contact/Contanct"


function App() {
  return (
    <div className="App">
      
      <Nav/>
      <Bio/>
      <Projects/>
      <Skill/>
      <Contact/>
      {/* <Usestatea/> */}
    </div>
  );
}

export default App;

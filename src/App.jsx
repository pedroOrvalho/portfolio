import "./App.css";
import NavBar from "./components/NavBar";
import Bio from "./components/Bio";
import WhatIDo from "./components/WhatIDo";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Bio />
      <WhatIDo />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

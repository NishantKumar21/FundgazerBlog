import './app.css';
import Line from "./components/lines/Line";
import Navbar from "./components/Navbar/Navbar";
import Section1 from "./components/section1/Section1";
import Section2 from './components/section2/Section2';
import Ssection1 from "./components/side-section1/Ssection1";

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="sec-main">
    <Section1/>
   <Ssection1/>
    </div>
   <Line />
   <Section2 />
   <Line />
   <Section2 />
   <Line />
   <Section2 />
   <Line />
   <Section2 />
   <Line />
   <Section2 />
    </div>
  );
}

export default App;

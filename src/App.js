import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./About";
import Error from "./Error";
import Home from "./Home";
import SingleCocktail from "./components/SingleCocktail";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="cocktails/:id" element={<SingleCocktail />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

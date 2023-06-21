import "./css/main.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Foother from "./components/Foother/Foother";
import Home from "./page/Home/Home";
import Projects from "./page/Projects/Projects";
import Developments from "./page/Development/Developments";
import Contacts from "./page/Contacta/Contacts";
import ScrolTop from "./utils/scrolTop";
import ProjPage from "./page/ProjPage/ProjPage";
import DevelopPaje from "./page/DevelopPaje/DevelopPaje";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrolTop/>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Proj" element={<Projects />} />
          <Route path="Dev" element={<Developments />} />
          <Route path="Cont" element={<Contacts />} />
          <Route path="Proj/:id" element={<ProjPage/>}/>
          <Route path="Dev/:id" element={<DevelopPaje/>}/>
        </Routes>
        <Foother />
      </Router>
    </div>
  );
}

export default App;

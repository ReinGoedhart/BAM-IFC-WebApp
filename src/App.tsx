import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { BuildingViewer } from "./components/building-viewer";
import { MapViewer } from "./components/map-viewer";
import { LoginForm } from "./components/login-form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/map" element={<MapViewer />} />
        <Route path="/building" element={<BuildingViewer />} />
      </Routes>
    </Router>
  );
}

export default App;

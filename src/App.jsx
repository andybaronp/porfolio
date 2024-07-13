import { Route, Routes } from "react-router-dom";
import Layaout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Deprecado from "./components/Deprecado";

function App() {
  return (
    <Layaout>
      <Deprecado />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Layaout>
  );
}

export default App;

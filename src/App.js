import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import "./assets/css/custom.css";
import Store from "./pages/Store";
import About from "./pages/About";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

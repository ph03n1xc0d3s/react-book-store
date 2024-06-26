import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import "./assets/css/custom.css";
import Store from "./pages/Store";
import About from "./pages/About";
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import Orders from "./admin/Orders";
import Products from "./admin/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/orders" element={<Orders />}></Route>
        <Route path="/admin/products" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

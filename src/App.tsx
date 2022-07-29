import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="hair" element={<Hair />} />
      <Route path="fabrics" element={<Fabrics />} />
      <Route path="hairproducts" element={<HairProducts />} />
      <Route path="fabricproducts" element={<FabricsProducts />} />
      <Route path="straighthair" element={<StraightHair />} />
      <Route path="braidedhair" element={<BraidedHair />} />
      <Route path="productDetails" element={<ProductDetails />} />
      <Route path="Login" element={<Login />} />
      <Route path="signup" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

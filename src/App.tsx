import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Hair from "./pages/Hair/Hair";
import Fabrics from "./pages/Fabrics/Fabrics";
import StraightHair from "./pages/HairPages/StraightHair";
import WaveyHair from "./pages/HairPages/WaveyHair";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hair" element={<Hair />} />
        <Route path="fabrics" element={<Fabrics />} />
        <Route path="/hair/straighthair" element={<StraightHair />} />
        <Route path="waveyhair" element={<WaveyHair />} />
        <Route path="productDetails/:productId" element={<ProductDetails />} />
        {/* <Route path="hairproducts" element={<HairProducts />} />
      <Route path="fabricproducts" element={<FabricsProducts />} /> */}
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

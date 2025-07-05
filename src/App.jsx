import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./static/Footer";
import Navbar from "./static/Navbar";
import Invest from "./pages/Invest";
import Shop from "./pages/Shop";
import HouseMoney from "./pages/HouseMoney";
import Home from "./pages/Home";

function App() {
  return (
    <div className="max-w-[1300px] mx-auto ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/housemoney" element={<HouseMoney />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

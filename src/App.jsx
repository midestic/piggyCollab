import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./static/Footer";
import Navbar from "./static/Navbar";
import Invest from "./pages/Invest";
import Shop from "./pages/Shop";
import HouseMoney from "./pages/HouseMoney";
import FlexDollar from "./pages/FlexDollar";

function App() {
  return (
    <div className="max-w-[1300px] mx-auto ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/invest" element={<Invest />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/housemoney" element={<HouseMoney />} />
          <Route path="/flex-dollar" element={<FlexDollar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./static/Navbar";
import Invest from "./pages/Invest";
import Shop from "./pages/Shop";
import Safelock from "./pages/Safelock";
import HouseMoney from "./pages/HouseMoney"
import Footer from "./static/Footer";


function App() {
  return (
    <div className="max-w-[1300px] mx-auto ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/invest" element={<Invest />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/housemoney" element={<HouseMoney />} />
          <Route path="/safelock" element ={<Safelock/>} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

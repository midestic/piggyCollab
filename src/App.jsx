import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./static/Navbar";
import Invest from "./pages/Invest";
import Shop from "./pages/Shop";
import Footer from "./static/Footer";


function App() {
  return (
    <div className="max-w-[1300px] mx-auto ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/invest" element={<Invest />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

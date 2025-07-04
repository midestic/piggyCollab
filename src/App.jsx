import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./static/Footer";
import Navbar from "./static/Navbar";
import Invest from "./pages/Invest";

function App() {
  return (
    <div className="max-w-[1300px] mx-auto ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/invest" element={<Invest />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

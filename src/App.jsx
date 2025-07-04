import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./static/Footer";
import Navbar from "./static/Navbar";
function App() {
  return (
    <div className="max-w-[1300] mx-auto ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

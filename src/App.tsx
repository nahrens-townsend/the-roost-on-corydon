import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Story from "@/pages/Story";
import Services from "@/pages/Services";
import GardenDesign from "@/pages/GardenDesign";
import Hardscapes from "@/pages/Hardscapes";
import TreeServices from "@/pages/TreeServices";
import Menu from "@/pages/Menu";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "var(--navbar-height, 80px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visit-us" element={<Contact />} />
          <Route path="/story" element={<Story />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

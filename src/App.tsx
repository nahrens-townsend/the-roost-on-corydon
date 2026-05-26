import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Story from "@/pages/Story";
import Menu from "@/pages/Menu";
import Jobs from "@/pages/Jobs";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visit-us" element={<Contact />} />
          <Route path="/story" element={<Story />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

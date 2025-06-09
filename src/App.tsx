import { Routes, Route } from 'react-router-dom';
import Carousel from "./components/carousel";
import Description from "./components/description";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Events from "./components/events";
import Gallery from "@/components/gallery";
import MedhaSamman from "./components/MedhaSamman";
import MedhaData from "./components/MedhaData"; // 

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex min-h-svh flex-col items-center overflow-x-hidden">
            <Navbar />
            <Carousel />
            <MedhaSamman />
            <Description />
            <Gallery />
            <Events />
            <Footer />
          </div>
        }
      />


      <Route path="/:city/:classType" element={<MedhaData />} />
    </Routes>
  );
}

export default App;

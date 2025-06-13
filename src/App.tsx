import { Routes, Route } from "react-router-dom";
import Description from "./components/description";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Events from "./components/events";
import Gallery from "@/components/gallery";
import MedhaData from "./components/MedhaData"; //
import Faqs from "./components/Faqs";

function App() {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center overflow-x-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Description />
                <Gallery />
                <Events />
                <Footer />
              </>
            }
          />

          <Route path="/:city/:classType" element={<MedhaData />} />
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
      </div>{" "}
    </>
  );
}

export default App;

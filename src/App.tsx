import { Routes, Route } from "react-router-dom";
import Description from "./components/description";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Events from "./components/events";
import Gallery from "@/components/gallery";
import MedhaData from "./components/MedhaData"; //
import Faqs from "./components/Faqs";
import MedhaGallery from "./components/MedhaGallery";
// import Gallery_Kolkata_12 from "./components/Gallery_Kolkata_12";
// import Gallery_Kolkata_10 from "./components/Gallery_Kolkata_10";
import Form from "./components/Form"

function App() {
  return (
    <>
      <div className="">
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
          <Route path="/medha-gallery" element={<MedhaGallery />} />
          {/* <Route path="/gallery-kolkata-12" element={<Gallery_Kolkata_12 />} />
          <Route path="/gallery-kolkata-10" element={<Gallery_Kolkata_10 />} /> */}
          <Route path="/form" element={<Form />} />



          {/* <Route path="/gallary/:classType" element={<MedhaData />} /> */}
        </Routes>
      </div>{" "}
    </>
  );
}

export default App;

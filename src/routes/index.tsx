import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Partnership from "../pages/partnership";
import Giving from "../pages/Giving";
import MediaArchive from "../pages/MediaArchive";
import Testimony from "../pages/testimony";

const Index = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />}></Route> */}
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/partnership" element={<Partnership />} />
      <Route path="/giving" element={<Giving />} />
      <Route path="/media-archive" element={<MediaArchive />} />
      <Route path="/testimony" element={<Testimony />} />
    </Routes>
  );
};

export default Index;

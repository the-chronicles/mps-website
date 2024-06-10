import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default Index;

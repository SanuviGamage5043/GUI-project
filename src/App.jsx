import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home1 from "./pages/home1/home1";
import Home2 from "./pages/Home2/Home2";
import SignUp from "./pages/SignUp/SignUp";
import Bakery from "./pages/Bakery/Bakery"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home2" element = {<Home2/>}/>
        <Route path="/bakery" element = {<Bakery/>}/>
      </Routes>
    </BrowserRouter>
  );
}
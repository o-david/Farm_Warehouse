import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Verification from "./pages/Verification";
import Home from "./pages/Home";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/signUp/*" element={<SignUp />} />
          <Route path="/verification/*" element={<Verification />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

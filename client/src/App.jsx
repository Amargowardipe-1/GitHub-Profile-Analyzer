import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import Profiles from "./pages/Profiles";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/profile/:username"
        element={<Profile />}
      />
      <Route
        path="/profiles"
        element={<Profiles />}
      />
     
    </Routes>

     <ToastContainer position="top-right" autoClose={3000} />
    </>
   
  );
}

export default App;
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";

import ProfileList from "../components/profilelist/ProfileList";


const Home = () => {
  return (
    <div className="  min-h-screen bg-gradient-to-r from-[#081c15] via-[#020617] to-[#1f0a1a]">
      <Navbar />

       <Hero />

        <ProfileList />
    </div>
  );
};

export default Home;
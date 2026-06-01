import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

import ProfileList from "../components/ProfileList/ProfileList";


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
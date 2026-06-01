import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <nav className="w-full flex items-center justify-between px-8 py-5">
      
      
      <div className="flex items-center gap-3">
       <FaGithub className="w-8 h-8 text-green-500" />

        <h1 className="text-2xl font-bold text-white">
          ProfileLens
        </h1>
      </div>

    
      <div>
        <a
          href="/profiles"
          className="text-gray-300 hover:text-white transition"
        >
          All profiles
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
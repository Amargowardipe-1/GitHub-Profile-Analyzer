import { Search } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Hero = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    try {
      setLoading(true);

      await axios.get(
        `http://localhost:8080/api/analyze/${username}`
      );

      
      navigate(`/profile/${username}`);
      toast.success("profile analyzed successfully");

    } catch (error) {
      console.error(error);
      toast.error("profile not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24">

      <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight max-w-4xl">
        Decode any
        <span className="text-green-400"> GitHub profile </span>
        in one click.
      </h1>

      <p className="mt-6 text-gray-400 text-lg max-w-2xl">
        Analyze GitHub users, discover top repositories,
        track coding activity, and uncover insights instantly.
      </p>

      <div className="mt-10 w-full max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4"
        >
          <div className="flex items-center flex-1 bg-[#0f172a] border border-gray-700 rounded-xl px-4">
            <Search className="text-gray-400 w-5 h-5" />

            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter GitHub username..."
              className="w-full bg-transparent outline-none px-3 py-4 text-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl text-black font-semibold"
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </form>
      </div>

    </section>
  );
};

export default Hero;
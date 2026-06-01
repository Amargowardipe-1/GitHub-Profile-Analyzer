import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import api from "../services/api";

import ProfileCard from "../components/profilecard/ProfileCard";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const res = await api.get(
        "/api/profiles"
      );

      setProfiles(res.data.profiles);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load profiles");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#081c15] via-[#020617] to-[#1f0a1a]">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white">
            All Analyzed Profiles
          </h1>

          <p className="text-gray-400 mt-3">
            Browse all GitHub profiles analyzed by the platform.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center text-white text-xl">
            Loading profiles...
          </div>
        )}

        {/* Empty State */}
        {!loading && profiles.length === 0 && (
          <div className="text-center text-gray-400 text-xl">
            No profiles found.
          </div>
        )}

        {/* Profiles Grid */}
        {!loading && profiles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {profiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
              />
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default Profiles;
import { useEffect, useState } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import axios from "axios";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/profiles"
      );

      setProfiles(res.data.profiles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-white mb-8">
    Recently Analyzed Profiles
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {profiles
      .slice(0, 6)
      .map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
        />
      ))}
  </div>
</section>
  );
};

export default ProfileList;
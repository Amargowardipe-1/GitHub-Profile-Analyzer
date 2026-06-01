import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import {
  ArrowLeft,
  Users,
  UserPlus,
  BookOpen,
  Star,
  Calendar,
  Trophy,
} from "lucide-react";

const Profile = () => {
  const { username } = useParams();

  const [profile, setProfile] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, [username]);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/profiles/${username}`
      );

      setProfile(res.data.profile);
      setRepositories(res.data.repositories);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white text-2xl">
        Loading...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
        Profile not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#081c15] via-[#020617] to-[#1f0a1a] text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-10"
        >
          <ArrowLeft size={20} />
          Back
        </Link>

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

          <img
            src={profile.avatar_url}
            alt={profile.username}
            className="w-40 h-40 rounded-3xl border border-slate-700"
          />

          <div>
            <h1 className="text-5xl font-bold">
              {profile.username}
            </h1>

            <a
              href={profile.profile_url}
              target="_blank"
              rel="noreferrer"
              className="text-green-400 text-xl"
            >
              @{profile.username}
            </a>

            <div className="mt-5">
              <a
                href={profile.profile_url}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-black font-semibold px-5 py-2 rounded-xl"
              >
                View GitHub Profile
              </a>
            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 mt-12">

          <StatCard
            icon={<Users />}
            title="Followers"
            value={profile.followers}
          />

          <StatCard
            icon={<UserPlus />}
            title="Following"
            value={profile.following}
          />

          <StatCard
            icon={<BookOpen />}
            title="Public Repos"
            value={profile.public_repos}
          />

          <StatCard
            icon={<Star />}
            title="Total Stars"
            value={profile.total_stars}
          />

          <StatCard
            icon={<Calendar />}
            title="Account Age"
            value={`${profile.account_age} yrs`}
          />

          <StatCard
            icon={<Trophy />}
            title="Popularity"
            value={profile.popularity_score}
          />

        </div>

        {/* Insights */}
        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-5">
            Insights
          </h2>

          <div className="flex flex-wrap gap-3">

            <span className="px-4 py-2 rounded-full bg-slate-800">
              Top Language: {profile.top_language}
            </span>

            <span className="px-4 py-2 rounded-full bg-slate-800">
              Account Age: {profile.account_age} years
            </span>

            <span className="px-4 py-2 rounded-full bg-slate-800">
              Popularity Score: {profile.popularity_score}
            </span>

          </div>

        </div>

        {/* Repositories */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold mb-6">
            Top Repositories
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {repositories.map((repo) => (
              <a
                key={repo.id}
                href={repo.repo_url}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-green-500 transition-all">

                  <div className="flex justify-between items-center">

                    <h3 className="text-green-400 text-2xl font-semibold">
                      {repo.repo_name}
                    </h3>

                    <div className="flex gap-4 text-gray-400">
                      <span>⭐ {repo.stars}</span>
                      <span>🍴 {repo.forks}</span>
                    </div>

                  </div>

                  <div className="mt-5">
                    <span className="px-3 py-1 bg-slate-800 rounded-lg text-sm">
                      {repo.language || "Unknown"}
                    </span>
                  </div>

                </div>
              </a>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <div className="text-green-400 mb-4">
        {icon}
      </div>

      <h3 className="text-4xl font-bold">
        {value}
      </h3>

      <p className="text-gray-400 mt-2">
        {title}
      </p>

    </div>
  );
};

export default Profile;
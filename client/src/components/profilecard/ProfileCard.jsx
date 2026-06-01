import { useNavigate } from "react-router-dom";

const ProfileCard = ({ profile }) => {
    const navigate = useNavigate();
  return (
     
    <div  onClick={() =>
        navigate(`/profile/${profile.username}`)
      } className="bg-[#0f172a] border border-slate-800 rounded-2xl p-5 hover:border-green-500 transition-all">
    
      <div className="flex items-center gap-4">
       
        <img  
          src={profile.avatar_url}
          alt={profile.username}
          className="w-14 h-14 rounded-full"
        />
        

        <div>
          <h3 className="text-white font-semibold text-lg">
            {profile.username}
          </h3>

          <p className="text-gray-400 text-sm">
            {profile.top_language}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">

        <div>
          <p className="text-gray-400 text-sm">
            Followers
          </p>

          <p className="text-white font-semibold">
            {profile.followers}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Repositories
          </p>

          <p className="text-white font-semibold">
            {profile.public_repos}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Stars
          </p>

          <p className="text-white font-semibold">
            {profile.total_stars}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Score
          </p>

          <p className="text-green-400 font-semibold">
            {profile.popularity_score}
          </p>
        </div>

      </div>
      
    </div>
  );
};

export default ProfileCard;
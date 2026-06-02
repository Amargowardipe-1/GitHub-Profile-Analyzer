const axios = require('axios')

const getUserData= async (username)=>{

    const headers = {
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
};

const userResponse = await axios.get(
  `https://api.github.com/users/${username}`,
  { headers }
);

    const reposResponse= await axios.get(`https://api.github.com/users/${username}/repos`, { headers });

    return {
        user: userResponse.data,
        repos: reposResponse.data,
    };
};


module.exports = {
  getUserData,
};
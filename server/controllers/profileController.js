const { getUserData } = require("../services/githubServices");

const { createRepository, deleteRepositoriesByProfileId } = require("../models/repositoryModel");

const { createProfile, updateProfile, getProfileByUsername } = require("../models/profileModel");

const analyzeProfile = async (req, res) => {
  try {
    const username = req.params.username;

    const { user, repos } = await getUserData(username);

    // Account Age
    const accountAge = Math.floor(
      (Date.now() - new Date(user.created_at)) /
      (1000 * 60 * 60 * 24 * 365)
    );

    // Total Stars
    const totalStars = repos.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0
    );

    // Top Language
    const languages = {};

    repos.forEach((repo) => {
      if (repo.language) {
        languages[repo.language] =
          (languages[repo.language] || 0) + 1;
      }
    });

    const topLanguage =
      Object.keys(languages).length > 0
        ? Object.keys(languages).reduce((a, b) =>
            languages[a] > languages[b] ? a : b
          )
        : "Unknown";

    // Popularity Score
    const popularityScore =
      user.followers * 2 +
      totalStars * 3 +
      user.public_repos;

    // Top 5 Repositories
    const topRepos = repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 5);

    let profileId;

    // Check Existing Profile
    const existingProfile = await getProfileByUsername(
      user.login
    );

    if (existingProfile) {
      await updateProfile({
        username: user.login,
        avatar_url: user.avatar_url,
        profile_url: user.html_url,
        followers: user.followers,
        following: user.following,
        public_repos: user.public_repos,
        account_age: accountAge,
        total_stars: totalStars,
        top_language: topLanguage,
        popularity_score: popularityScore,
      });

      profileId = existingProfile.id;

      console.log(
        `✅ Profile Updated : ${user.login}`
      );
    } else {
      const profileResult = await createProfile({
        username: user.login,
        avatar_url: user.avatar_url,
        profile_url: user.html_url,
        followers: user.followers,
        following: user.following,
        public_repos: user.public_repos,
        account_age: accountAge,
        total_stars: totalStars,
        top_language: topLanguage,
        popularity_score: popularityScore,
      });

      profileId = profileResult.insertId;

      console.log(
        `✅ Profile Created : ${user.login}`
      );
    }

    // Delete Old Repositories
    await deleteRepositoriesByProfileId(profileId);

    // Save Latest Top Repositories
    for (const repo of topRepos) {
      await createRepository({
        profile_id: profileId,
        repo_name: repo.name,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        repo_url: repo.html_url,
      });
    }

    return res.status(200).json({
      message: "Profile analyzed successfully",

      profileId,

      username: user.login,
      avatarUrl: user.avatar_url,
      profileUrl: user.html_url,

      followers: user.followers,
      following: user.following,
      publicRepos: user.public_repos,

      accountAge,
      totalStars,
      topLanguage,
      popularityScore,

      topRepositories: topRepos.map((repo) => ({
        name: repo.name,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        url: repo.html_url,
      })),
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  analyzeProfile,
};
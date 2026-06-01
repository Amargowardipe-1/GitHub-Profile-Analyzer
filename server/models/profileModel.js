const db = require("../config/db");

const getProfileByUsername = async (username) => {
  const [rows] = await db.query(
    "SELECT * FROM github_profiles WHERE username = ?",
    [username]
  );

  return rows[0];
};

const getAllProfiles = async () => {
  const [rows] = await db.query(`
    SELECT *
    FROM github_profiles
    ORDER BY id DESC;
  `);

  return rows;
};

const createProfile = async (profile) => {
  const [result] = await db.query(
    `
    INSERT INTO github_profiles
    (
      username,
      avatar_url,
      profile_url,
      followers,
      following,
      public_repos,
      account_age,
      total_stars,
      top_language,
      popularity_score
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `,
    [
      profile.username,
      profile.avatar_url,
      profile.profile_url,
      profile.followers,
      profile.following,
      profile.public_repos,
      profile.account_age,
      profile.total_stars,
      profile.top_language,
      profile.popularity_score,
    ]
  );

  return result;
};

const updateProfile = async (profile) => {
  const [result] = await db.query(
    `
    UPDATE github_profiles
    SET
      avatar_url = ?,
      profile_url = ?,
      followers = ?,
      following = ?,
      public_repos = ?,
      account_age = ?,
      total_stars = ?,
      top_language = ?,
      popularity_score = ?
    WHERE username = ?
  `,
    [
      profile.avatar_url,
      profile.profile_url,
      profile.followers,
      profile.following,
      profile.public_repos,
      profile.account_age,
      profile.total_stars,
      profile.top_language,
      profile.popularity_score,
      profile.username,
    ]
  );

  return result;
};

module.exports = {
  createProfile,
  updateProfile,
  getProfileByUsername,
  getAllProfiles,
};
const db = require("../config/db");

const deleteRepositoriesByProfileId = async (profileId) => {
  await db.query(
    "DELETE FROM repositories WHERE profile_id = ?",
    [profileId]
  );
  console.log("repo deleted");
};

const getRepositoriesByProfileId = async (profileId) => {
  const [rows] = await db.query(
    `
    SELECT *
    FROM repositories
    WHERE profile_id = ?
    ORDER BY stars DESC
  `,
    [profileId]
  );

  return rows;
};

const createRepository = async (repo) => {
  const sql = `
    INSERT INTO repositories
    (
      profile_id,
      repo_name,
      forks,
      language,
      repo_url,
      stars
    )
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const [result] = await db.query(sql, [
    repo.profile_id,
    repo.repo_name,
    repo.forks,
    repo.language,
    repo.repo_url,
    repo.stars
  ]);

  return result;
};

module.exports = { createRepository, deleteRepositoriesByProfileId,getRepositoriesByProfileId };
const {
  getAllProfiles,
  getProfileByUsername,
} = require("../models/profileModel");

const {
  getRepositoriesByProfileId,
} = require("../models/repositoryModel");

const getProfiles = async (req, res) => {
  try {
    const profiles = await getAllProfiles();

    return res.status(200).json({
      count: profiles.length,
      profiles,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


//get specific profile
const getProfile = async (req, res) => {
  try {
    const username = req.params.username;

    const profile =
      await getProfileByUsername(username);

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    const repositories =
      await getRepositoriesByProfileId(profile.id);

    return res.status(200).json({
      profile,
      repositories,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProfiles,
  getProfile,
};
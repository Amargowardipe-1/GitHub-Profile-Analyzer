const express= require("express");
const router= express.Router();

const { analyzeProfile }= require('../controllers/profileController')
const {
  getProfiles,
  getProfile,
} = require("../controllers/profileFetch");


router.get("/analyze/:username", analyzeProfile);

router.get("/profiles", getProfiles);

router.get("/profiles/:username", getProfile);


module.exports= router;
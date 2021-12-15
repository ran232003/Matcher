const { getCandidates, getJobs, getSkills } = require('../controllers/match-controller');

express = require('express');
const router = express.Router();

router.post("/candidates",getCandidates);
router.get("/jobs",getJobs);
router.get("/skills",getSkills);

module.exports = router
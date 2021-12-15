const Candidate = require("../models/CandidateSchema");
const Job = require("../models/JobSchema");
const Skill = require("../models/SkillSchema");

const getCandidates = async(req,res,next)=>{
    let{job,skills} = req.body;
  
    //const candidates = await Candidate.find({ title: job}).exec();
    //const candidates2 = await Candidate.find({ title: {$ne:job}}).exec();
    const candidates3 = await Candidate.find({$or:[{ skills: {$in:skills}},{title: job}]}).exec();
    console.log(typeof skills);
    console.log(candidates3);

    res.json({candidates:candidates3});

}
const getJobs = async(req,res,next)=>{
    let jobs = await Job.find({},'-skils');
    if(!jobs){
        const error = new myError("no users found",404);
        return next(error);

    }
    // users = users.map((user)=>{
    //     return user.toObject({getters: true})
    // })
    res.json({jobs:jobs});
}
const getSkills = async(req,res,next)=>{
    const skills = await Skill.find({});
    
    res.json({skills:skills});
}

module.exports = {
    getCandidates:getCandidates,
    getSkills:getSkills,
    getJobs:getJobs,
}
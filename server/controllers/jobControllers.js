const job = require('../models/JobsModel')

//get all jobs
const getJobs = async (req, res) =>{
    try {
        const jobs = await job.find({}).sort({createdAt: -1})
        res.status(200).json(jobs)
    } catch (error) {
        console.log(error)
        res.status(404).json({error: 'Internal error'})
    }
}

//get a single job
const getJob = async (req,res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'No such job'})
    }
    const job = await job.findById(id)

    if(!job){
        return res.status(404).json({error:'No such job'})
    }

    res.status(200).json(job)
}


//create a new job
const createJob = async (req, res) =>{
    const { title, description, contact } = req.body

    //add doc to db
    try {
        const newJob = await job.create({title, description, contact})
        res.status(200).json(job)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a job
const deleteJob = async(req,res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'No such job'})
    }
    const job = await job.findOneAndDelete({_id: id})

    if(!job){
        return res.status(404).json({error:'No such job'})
    }
    res.status(200).json(job)
}

//update a job
const updateJob = async (req,res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'No such job'})
    }
    const job = await job.findOneAndUpdate({_id: id}, {...req.body})

    if(!job){
        return res.status(404).json({error:'No such job'})
    }
    res.status(200).json(job)
}

module.exports = {
    createJob,
    getJob,
    getJobs,
    deleteJob,
    updateJob
}
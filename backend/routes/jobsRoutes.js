const express = require('express')
const {
    createJob,
    getJob,
    getJobs,
    deleteJob,
    updateJob
} = require('../controllers/jobControllers')


const router = express.Router()

//GET all jobs
router.get('/', getJobs)

//GET a single job
router.get('/:id',getJob)

//POST a single job
router.post('/', createJob)

//DELETE a single job
router.delete('/:id',deleteJob)

//UPDATE a job
router.patch('/:id',updateJob)


module.exports = router
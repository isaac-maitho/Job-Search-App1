import { useEffect, useState } from 'react'
import JobDetails from '../components/JobDetails'

function JobsAvailable() {

    const [jobs, setJobs] = useState(null)

    useEffect(() =>{
        const fetchJobs = async () =>{
            const response = await fetch('/api/jobs')
            const json = await response.json()

            if(response.ok){
                setJobs(json)
            }
        }
        //call function 
        fetchJobs()
    },[])

  return (
    <div>
        {jobs && jobs.map((job) =>{
           return <JobDetails key={job._id} job = {job} /> 
        })}
    </div>
  )
}

export default JobsAvailable
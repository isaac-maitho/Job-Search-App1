import { useEffect, useState } from 'react'

function JobsAvailable() {

    const [jobs, setJobs] = useState(null)

    useEffect(() =>{
        const fetchJobs = async () =>{
            const response = await fetch('http://localhost:4000/api/jobs')
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
            <p key={job._id}>{job.title}</p>
        })}
    </div>
  )
}

export default JobsAvailable
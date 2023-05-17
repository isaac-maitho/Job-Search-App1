import { useEffect } from 'react'
import { useJobsContext } from '../hooks/useJobsContext'
import JobDetails from '../components/JobDetails'
import JobForm from '../components/JobForm'

function JobsAvailable() {

    const { jobs, dispatch } = useJobsContext()

    useEffect(() =>{
        const fetchJobs = async () =>{
            const response = await fetch('/api/jobs')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'GET_JOBS', payload: json})
            }
        }
        //call function 
        fetchJobs()
        // eslint-disable-next-line
    },[])

  return (
    <div>
        {jobs && jobs.map((job) =>{
           return <JobDetails key={job._id} job = {job} /> 
        })}

        <JobForm />
    </div>
  )
}

export default JobsAvailable
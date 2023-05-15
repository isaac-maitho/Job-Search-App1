import React from 'react'

function JobDetails({job}) {
  return (
    <div className='job-details'>
        <h4>{job.title}</h4>
        <p><strong>Qualifications: </strong>{job.description}</p>
        <p><strong>Contact Details: </strong>{job.contact}</p>
        <p>{job.createdAt}</p>
    </div>
  )
}

export default JobDetails
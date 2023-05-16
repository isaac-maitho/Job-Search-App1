import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function JobDetails({job}) {
  return (
    <div className='job-details'>
        <h4>{job.title}</h4>
        <p><strong>Qualifications: </strong>{job.description}</p>
        <p><strong>Contact Details: </strong>{job.contact}</p>
        <p>{formatDistanceToNow(new Date(job.createdAt), { addSuffix: true})}</p>
    </div>
  )
}

export default JobDetails
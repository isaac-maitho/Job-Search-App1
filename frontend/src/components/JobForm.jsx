import React from 'react'
import { useState } from 'react'

function JobForm() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [contact, setContact] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const job = {title, description, contact}
        const response = await fetch('/api/jobs', {
            method: 'POST',
            body: JSON.stringify(job),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setDescription('')
            setContact('')
            setError(null)
            console.log('Job Added successfully', json)
        }
        
    }

  return (
    <form onSubmit={handleSubmit}>
    <h3>Add a new job</h3>
        <label>Job Title: </label>
        <input 
           type="text"
           onChange={(e) => setTitle(e.target.value)}
           value={title}
            />

        <label>Job Description: </label>
        <input 
           type="text"
           onChange={(e) => setDescription(e.target.value)}
           value={description}
            />

        <label>Contact Details: </label>
        <input 
           type="number"
           onChange={(e) => setContact(e.target.value)}
           value={contact}
            />
        
        <button className='btn'>Add Job</button>
        {error && <div className='error'>{error}</div>}
    </form>
    
  )
}

export default JobForm
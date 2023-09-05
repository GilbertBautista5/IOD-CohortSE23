import { useState } from "react";

function AddStudentForm({onAddStudent}) {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [job, setJob] = useState('')

    return (
        <form onSubmit={(e) => {e.preventDefault(); onAddStudent(name, location, job); }}>
            <label>Name: <input value={name} onChange={(e) => setName(e.target.value)}/></label><br/>
            <label>Location: <select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option></option>
                <option>NZ</option>
                <option>AU</option>
            </select></label><br/>
            <label>Job: <input value={job} onChange={(e) => setJob(e.target.value)}/></label><br/>
            <button>Submit</button>
        </form>
    )
}

export default AddStudentForm;
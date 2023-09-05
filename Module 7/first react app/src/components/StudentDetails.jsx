import {useParams, Link} from 'react-router-dom'
import { students } from '../data/students';

function StudentDetails() {
    const {studentid} = useParams();
    console.log(studentid)
    const student = students.find(stud => parseInt(studentid) === stud.id)

    return (
        <div className="StudentDetails componentBox">
            {student ? (
                <div><h2>{student.name}</h2>
                    <p>Currently works as a {student.job} and lives in {student.location}</p>
                </div>
            ) : <p>Student {studentid} not found</p>}
            <br/>
            <Link to="/students">View all students</Link>
        </div>
    )
}

export default StudentDetails
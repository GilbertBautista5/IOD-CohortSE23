import React from 'react';
import Student from './Student';
import { students } from '../data/students';
import AddStudentForm from './AddStudentForm';

//an array of objects (could come from an API or DB). to render each one in turn, we need to iterate over them,
//and apply the same transformation process to each one to turn the raw data into JSX.
//the Array.map function is OFTEN used in React for this, good idea to review it: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


function StudentList() {   

    const [currentStudents, setCurrentStudents] = React.useState(students)

    //we can either create a variable storing all the list items and render it, OR we can move this students.map down into the return directly
    const studentList = currentStudents.map((student) => (
        // <Student key={student.id} id={student.id} name={student.name} location={student.location} set="set4"/>

        //<Student key={student.id} student={student}/> //we could also pass the whole student object as a single prop and do props.student.name
        <Student key={student.id} {...student} set="set4"/> //or we can destructure the student object and unpack it into individual props like this
    ))

    const handleFilterStudents = (location) => {
        // why don't we do currentStudents.filter ? try it!
        let newStudents = students.filter(student => student.location == location)
        setCurrentStudents(newStudents)
    }

    const handleAddStudent = (name, location, job) => {
        let newStudent = {name, location, job, id: students.length + 1}
        console.log(newStudent)
        setCurrentStudents([...students, newStudent])
    }

    return (
        <div className="StudentList componentBox">
            <h2>IOD Software Engineering Students ({currentStudents.length} in cohort)</h2>
            <ul>
                {studentList}
            </ul>    
            <button onClick={() => handleFilterStudents('NZ')}>NZ Students</button>   
            <button onClick={() => handleFilterStudents('AU')}>AU Students</button>   

            <AddStudentForm onAddStudent={handleAddStudent}/>
        </div>
    );
}

export default StudentList;
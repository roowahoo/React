import React,{useContext} from 'react'
import StudentContext from './StudentContext'
import StudentTable from './StudentTable'


export default function StudentList(){
    let context=useContext(StudentContext)
    return(
        <React.Fragment>
            <h1>Student List</h1>
            <StudentTable/>
            
        </React.Fragment>
    )
}
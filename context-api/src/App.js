import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentContext from "./StudentContext.js"
import StudentList from './StudentList'
import AddStudentForm from "./AddStudent.js";

export default class App extends React.Component {
    state = {
        students: [
            { studentNumber: '1', yearOfStudy: 1, gender: 'male', graduated: 'false' },
            { studentNumber: '2', yearOfStudy: 1, gender: 'female', graduated: 'false' },
            { studentNumber: '3', yearOfStudy: 4, gender: 'male', graduated: 'true' },
        ]

    }
    render() {
        const context={
            students:()=>{
                return this.state.students
            },

            addStudent:(newStudentNumber,newYearOfStudy,newStudentGender,newStudentGraduated)=>{

                const clone=[...this.state.students,{
                    'studentNumber':newStudentNumber,
                    'yearOfStudy':newYearOfStudy,
                    'gender':newStudentGender,
                    'graduated':newStudentGraduated
                }]
                this.setState({
                    'students':clone
                })


            }
        }
        return (
            <div className="App container-fluid">
                <StudentContext.Provider value={context}>
                    <React.Fragment>
                        <StudentList/>
                        <AddStudentForm/>

                    </React.Fragment>
                </StudentContext.Provider>
            </div>
        );

    }

}



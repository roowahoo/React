import React, { useContext } from "react";
import StudentContext from './StudentContext'

export default function StudentTable() {
    let context=useContext(StudentContext)
    return (
        <React.Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th>Student Number</th>
                        <th>Year of Study</th>
                        <th>Gender</th>
                        <th>Graduated</th>
                    </tr>
                </thead>
                <tbody>
                    {context.students().map(s => {
                        return (
                            <React.Fragment>
                                <tr>
                                    <td>{s.studentNumber}</td>
                                    <td>{s.yearOfStudy}</td>
                                    <td>{s.gender}</td>
                                    <td>{s.graduated}</td>
                                </tr>
                            </React.Fragment>
                        );
                    })
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}
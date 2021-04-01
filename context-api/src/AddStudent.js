import React from 'react'
import StudentContext from './StudentContext'

export default class AddStudentForm extends React.Component {
    static contextType = StudentContext;
    state = {
        'studentNumber':0.0,
        'yearOfStudy': '',
        'gender': '',
        'graduated': ''
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    render(){
        return(
            <React.Fragment>
                 <div>
                <label className="form-label">Student Number:</label>
                <input className="form-control "type="text" name="studentNumber" value={this.state.studentNumber}
                    onChange={this.updateFormField}/>
            </div>
            <div>
                <label class="form-label">Year of Study:</label>
                <input type="text" className="form-control" name="yearOfStudy" 
                value={this.state.yearOfStudy} onChange={this.updateFormField}/>
            </div>
            <div>
                <label class="form-label">Gender:</label>
                <input type="text" className="form-control" name="gender" 
                value={this.state.gender} onChange={this.updateFormField}/>
            </div>
            <div>
                <label class="form-label">Graduated:</label>
                <input type="text" className="form-control" name="graduated" 
                value={this.state.graduated} onChange={this.updateFormField}/>
            </div>

            <button className="btn btn-primary mt-3" onClick={()=>{
                this.context.addStudent(this.state.studentNumber, this.state.yearOfStudy,this.state.gender,this.state.graduated)
            }}>Add Student</button>
            </React.Fragment>
        )
    }
}
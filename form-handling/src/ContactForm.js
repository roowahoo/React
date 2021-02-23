import React from 'react'

export default class ContactForm extends React.Component {
    state = {
        fname: '',
        lname: '',
        enquiry: '',
        country: '',

    };
    render() {
        return (
            <React.Fragment>
                <div>
                    <div >
                        <label className='form-label'>First Name:</label>
                        <input className='form-control' type='text' name='fname' value={this.state.fname} onChange={this.updateFname} />
                    </div>

                    <div >
                        <label className='form-label'>Last Name:</label>
                        <input className='form-control' type='text' name='fname' value={this.state.lname} onChange={this.updateLname} />
                    </div>

                    <div>
                        <label className='form-label'>Enquiry Type:</label>
                        <div className='form-check' >
                            <input className='form-check-input' type='radio' value={1} onChange={this.updateEnquiry} name='enquiry' checked={parseInt(this.state.enquiry) === 1} />
                            <label className='form-check-label'>Support</label>
                        </div>

                        <div className='form-check' >
                            <input className='form-check-input' type='radio' value={2} onChange={this.updateEnquiry} name='enquiry' checked={parseInt(this.state.enquiry) === 2} />
                            <label className='form-check-label'>Sales</label>
                        </div>

                        <div className='form-check' >
                            <input className='form-check-input' type='radio' value={3} onChange={this.updateEnquiry} name='enquiry' checked={parseInt(this.state.enquiry) === 3} />
                            <label className='form-check-label'>Marketing</label>
                        </div>
                    </div>

                    <div>
                        <label className='form-label'>Country:</label>
                        <select className='form-control' name='country' value={this.state.country} onChange={this.updateCountry}>
                            <option>Singapore</option>
                            <option>Malaysia</option>
                            <option>Thailand</option>
                        </select>
                    </div>
                <button onClick={this.alertBox} type='button' class='btn btn-primary mt-3'>Submit</button>
                </div>
            </React.Fragment>
        )
    }
    updateFname = event => {
        this.setState({
            fname: event.target.value
        })
    }

    updateLname = event => {
        this.setState({
            lname: event.target.value
        })
    }

    updateEnquiry =event => {
        this.setState({
            enquiry: event.target.value
        })
    }

    updateCountry=event =>{
        this.setState({
            country: event.target.value
        })
    }

    alertBox =()=>{
        alert(this.state.fname)
    }
}



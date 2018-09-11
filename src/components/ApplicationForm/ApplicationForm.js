import React from 'react';
import './ApplicationForm.css'

const ApplicationForm = () => 
<div className='container formDiv'>
    <div>
        <h2>Application Form</h2>
    </div>
    <form>
        <div className="form-group">
            <input type="text" className="form-control" id="companyName" placeholder="Company"></input>
            <input type="text" className="form-control" id="companyAddress" placeholder="Address"></input>
            <div className='row'>
                <div className='col-md-6 col-xs-12'>
                    <input type="text" className="form-control" id="companyCity" placeholder="City"></input>
                </div>
                <div className='col-md-3 col-xs-12'>
                    <select className="form-control" id="companyState">
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div className='col-md-3 col-xs-12'>
                    <input type="text" className="form-control" id="companyZip" placeholder="Zip Code">
                    </input>
                </div>
            </div>
            <p className='applicationDetails'>The purpose of this application is to determine whether or not the applicant is qualified to operate motor carrier equipment according to the requirements of the Federal Motor Carrier Safety Regulations and the Company named above.</p>
        </div>
        <hr/>
        <div className='Instructions'>
            <h4>Instructions to Applicant</h4>
            <p className='applicationDetails'>Please answer all questions. If the answer to any question is "No" or "None", do not leave the item bank, but write "Not" or "None".</p>
        </div>
        <div className="form-group">
            <div className='row'>
                <div className='col-md-2 col-xs-12'>
                    <label className='formLabel' htmlFor="exampleFormControlSelect1">Application Date:</label>
                </div>
                <div className='col-md-3 col-xs-12'>
                    <input type="date" className="form-control" id="applicationDate" placeholder="Date"></input>
                </div>
                <div className='col-md-2 col-xs-12'>
                    <p className='applicationDetailsRight'>Position applying for:</p>
                </div>
                <div className='col-md-5 col-xs-12'>
                    <label className="jobTypeRadio-inline"><input className='radioButton' type="radio" name="optradio"></input>Contractor</label>
                    <label className="jobTypeRadio-inline"><input className='radioButton' type="radio" name="optradio"></input>Driver</label>
                    <label className="jobTypeRadio-inline"><input className='radioButton' type="radio" name="optradio"></input>Contractor's Driver</label> 
                </div>
            </div>
            <div className="row">
                <div className='col-md-3 col-xs-12'>
                    <input type="text" className="form-control" id="FirstName" name="FirstName" placeholder="First Name" />
                </div>
                <div className='col-md-3 col-xs-12'>
                    <input type="text" className="form-control" id="MiddleName" name="MiddleName" placeholder="Middle Name" />
                </div>
                <div className='col-md-3 col-xs-12'>
                    <input type="text" className="form-control" id="LastName" name="LastName" placeholder="Last Name" />
                </div>
                <div className='col-md-3 col-xs-12'> 
                    <input type="text" className="form-control" id="socialSecurityNumber" name="socialSecurityNumber" placeholder="Social Security Number" />
                </div>
            </div>
            <div className="row">
                <div className='col-md-4 col-xs-12'> 
                    <input type="number" className="form-control" id="Age" name="Age" placeholder="*Age" />
                </div>
                <div className='col-md-4 col-xs-12'> 
                    <input type="text" className="form-control" id="Phone" name="Phone" placeholder="Phone Number" />
                </div>
                <div className='col-md-4 col-xs-12'> 
                    <input type="text" className="form-control" id="emergencyPhone" name="emergencyPhone" placeholder="Emergency Phone Number" />
                </div>
            </div>
            <div className="row">
                <div className='col-md-12 col-xs-12'>
                    <p className='applicationDetails'>*The Age Discrimination of Employement Act of 1967 prohibits discrimination on the basis of age with respect to individuas who are at least 40 years of age.</p>
                </div>
            </div>
            <div className="row">
                <div className='col-md-3 col-xs-12'>
                    <label className='formLabel' htmlFor="exampleFormControlSelect1">Physical Exam Expiration Date:</label>
                </div>
                <div className='col-md-3 col-xs-12'>
                    <input type="date" className="form-control" id="physicalExamExpDate" name="physicalExamExpDate" placeholder="Physical Exam Expiration Date" />
                </div>
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Example select</label>
            <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
            <select multiple className="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </form>
</div>

export default ApplicationForm;
import React from 'react';
import './ApplicationForm.css'
import Select from 'react-select';

const options = [
    { value: 'A', label: 'Alabama' },
    { value: "AK", label: 'Alaska' },
    { value: "AZ", label: 'Arizona' },
    { value: "AR", label: 'Arkansas' },
    { value: "CA", label: 'California' },
    { value: "CO", label: 'Colorado' },
    { value: "CT", label: 'Connecticut' },
    { value: "DE", label: 'Delaware' },
    { value: "DC", label: 'District Of Columbia' },
    { value: "FL", label: 'Florida' },
    { value: "GA", label: 'Georgia' },
    { value: "HI", label: 'Hawaii' },
    { value: "ID", label: 'Idaho' },
    { value: "IL", label: 'Illinois' },
    { value: "IN", label: 'Indiana' },
    { value: "IA", label: 'Iowa' },
    { value: "KS", label: 'Kansas' },
    { value: "KY", label: 'Kentucky' },
    { value: "LA", label: 'Louisiana' },
    { value: "ME", label: 'Maine' },
    { value: "MD", label: 'Maryland' },
    { value: "MA", label: 'Massachusetts' },
    { value: "MI", label: 'Michigan' },
    { value: "MN", label: 'Minnesota' },
    { value: "MS", label: 'Mississippi' },
    { value: "MO", label: 'Missouri' },
    { value: "MT", label: 'Montana' },
    { value: "NE", label: 'Nebraska' },
    { value: "NV", label: 'Nevada' },
    { value: "NH", label: 'New Hampshire' },
    { value: "NJ", label: 'New Jersey' },
    { value: "NM", label: 'New Mexico' },
    { value: "NY", label: 'New York' },
    { value: "NC", label: 'North Carolina' },
    { value: "ND", label: 'North Dakota' },
    { value: "OH", label: 'Ohio' },
    { value: "OK", label: 'Oklahoma' },
    { value: "OR", label: 'Oregon' },
    { value: "PA", label: 'Pennsylvania' },
    { value: "RI", label: 'Rhode Island' },
    { value: "SC", label: 'South Carolina' },
    { value: "SD", label: 'South Dakota' },
    { value: "TN", label: 'Tennessee' },
    { value: "TX", label: 'Texas' },
    { value: "UT", label: 'Utah' },
    { value: "VT", label: 'Vermont' },
    { value: "VA", label: 'Virginia' },
    { value: "WA", label: 'Washington' },
    { value: "WV", label: 'West Virginia' },
    { value: "WI", label: 'Wisconsin' },
    { value: "WY", label: 'Wyoming' }
]

class ApplicationForm extends React.PureComponent {
    state = {
        selectedOptionOperated: null,
        selectedOptionLicenseState1: null,
        selectedOptionLicenseState2: null,
        selectedOptionLicenseState3: null,
      }
      handleChange1 = (selectedOptionOperated) => {
        this.setState({ selectedOptionOperated });
        console.log(`Option selected:`, selectedOptionOperated);
      }

      handleChange2 = (selectedOptionLicenseState1) => {
        this.setState({ selectedOptionLicenseState1 });
        console.log(`Option selected:`, selectedOptionLicenseState1);
      }

      handleChange3 = (selectedOptionLicenseState2) => {
        this.setState({ selectedOptionLicenseState2 });
        console.log(`Option selected:`, selectedOptionLicenseState2);
      }

      handleChange4 = (selectedOptionLicenseState3) => {
        this.setState({ selectedOptionLicenseState3 });
        console.log(`Option selected:`, selectedOptionLicenseState3);
      }

      handleSubmit = (e) => {
        //   e.preventDefault();
          console.log('submitted?')
      }


      
      render() {
        const { selectedOption } = this.state;
 
        return (
    
            <div className='container formDiv'>
                <div>
                    <h2>Application Form</h2>
                </div>
                <form id='myApplicationForm' encType='text/plain'>
                    <div className="form-group">
                        <p className='applicationDetails instructions'>The purpose of this application is to determine whether or not the applicant is qualified to operate motor carrier equipment according to the requirements of the Federal Motor Carrier Safety Regulations and the Company named above.</p>
                        <hr/>
                        <div className='instructions'>
                            <h4>Instructions to Applicant</h4>
                            <p className='applicationDetails'>Please answer all questions. If the answer to any question is "No" or "None", do not leave the item bank, but write "Not" or "None".</p>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Application Date:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input required type="date" className="form-control" id="applicationDate" placeholder="Date"></input>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <p className='radioButtonDetails'>Position applying for:</p>
                            </div>
                            <div className='col-md-5 col-xs-12'>
                                <label className="radioDetail jobTypeRadio-inline"><input required className='radioButton' type="radio" name="optradio"></input>Contractor</label>
                                <label className="radioDetail jobTypeRadio-inline"><input className='radioButton' type="radio" name="optradio"></input>Driver</label>
                                <label className="radioDetail jobTypeRadio-inline"><input className='radioButton' type="radio" name="optradio"></input>Contractor's Driver</label> 
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="FirstName" name="FirstName" placeholder="First Name" />
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="MiddleName" name="MiddleName" placeholder="Middle Name" />
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="LastName" name="LastName" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 col-xs-12'> 
                                <input required type="number" className="form-control" id="Age" name="Age" placeholder="*Age" />
                            </div>
                            <div className='col-md-4 col-xs-12'> 
                                <input required type="text" className="form-control" id="Phone" name="Phone" placeholder="Phone Number" />
                            </div>
                            <div className='col-md-4 col-xs-12'> 
                                <input required type="text" className="form-control" id="emergencyPhone" name="emergencyPhone" placeholder="Emergency Phone Number" />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-12 col-xs-12'>
                                <p className='applicationDetails instructions'>*The Age Discrimination of Employement Act of 1967 prohibits discrimination on the basis of age with respect to individuas who are at least 40 years of age.</p>
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
                        <hr />
                        <div className="row">
                            <div className='col-md-12 col-xs-12'>
                                <p className='applicationDetails'>Current and Three Years Previous Addresses:</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="address1" name="address1" placeholder='Address' />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input required type="date" className="form-control" id="addressFromDate1" name="addressFromDate1" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input required type="date" className="form-control" id="addressToDate1" name="addressToDate1" />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="address2" name="address2" placeholder='Address' />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect2">From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" id="addressFromDate2" name="addressFromDate2" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect2">To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" id="addressToDate2" name="addressToDate2" />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="address3" name="address3" placeholder='Address' />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect3">From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" id="addressFromDate3" name="addressFromDate3" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect3">To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" id="addressToDate3" name="addressToDate3" />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="address4" name="address4" placeholder='Address' />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" id="addressFromDate4" name="addressFromDate4" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" id="addressToDate4" name="addressToDate4" />
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <p className='radioButtonDetails'>Have you worked for this company before?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail employedBeforeRadio-inline"><input required className='radioButton' type="radio" name="optradio"></input>Yes</label>
                                <label className="radioDetail employedBeforeRadio-inline"><input className='radioButton' type="radio" name="optradio"></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">If so, from:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" id="employedHereBeforeFrom" name="employedHereBeforeFrom" />
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" id="employedHereBeforeTo" name="employedHereBeforeTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Reason for Leaving:</label>
                            </div>
                            <div className='col-md-9 col-xs-12'>
                                <input type="text" className="form-control" id="reasonForLeaving" name="reasonForLeaving" placeholder='Reason for Leaving' />
                            </div>
                        </div>
                        <hr />
                        <div className='instructions'>
                            <h4>Education History</h4>
                            <p className='applicationDetails'>Please select the highest grade completed:</p>
                        </div>
                        <div className='row'>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Grade School:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <select required className="form-control" id="gradeSchool">
                                    <option disabled selected value> -- select an option -- </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">College:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <select className="form-control" id="College">
                                    <option disabled selected value> -- select an option -- </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Post-Graduate:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <select className="form-control" id="postGraduate">
                                    <option disabled selected value> -- select an option -- </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                        <hr />
                        <div className='instructions'>
                            <h4>Employment History</h4>
                            <p className='applicationDetails'>Give a Complete Record of all employment for the past three years, including any unemployment or self employment, and all commercial driving experience for the past ten years.</p>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="employer1Name" placeholder="Company's Name"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="employer1Address" placeholder="Company's Full Address"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="employer1Phone" placeholder="Company's Phone Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input required type="month" className="form-control" id="employment1Start" name="employment1Start" />
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input required type="month" className="form-control" id="employment1End" name="employment1End" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="employer1Position" placeholder="Position Held"></input>
                            </div>
                            <div className='col-md-8 col-xs-12'>
                                <input required type="text" className="form-control" id="employer1Leaving" placeholder="Reason for Leaving"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Were you subject to the FMCRs* while employed here?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail jobFMCSR-inline"><input required className='radioButton' type="radio" name="optradio"></input>Yes</label>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="optradio"></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Was your job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail job49CFRPart40-inline"><input required className='radioButton' type="radio" name="optradio"></input>Yes</label>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="optradio"></input>No</label>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="employer2Name" placeholder="Company's Name"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="employer2Address" placeholder="Company's Full Address"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="employer2Phone" placeholder="Company's Phone Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" id="employment2Start" name="employment1Start" />
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" id="employment2End" name="employment1End" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="employer2Position" placeholder="Position Held"></input>
                            </div>
                            <div className='col-md-8 col-xs-12'>
                                <input type="text" className="form-control" id="employer2Leaving" placeholder="Reason for Leaving"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Were you subject to the FMCRs* while employed here?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="optradio"></input>Yes</label>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="optradio"></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Was your job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="optradio"></input>Yes</label>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="optradio"></input>No</label>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="employer3Name" placeholder="Company's Name"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="employer3Address" placeholder="Company's Full Address"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="employer3Phone" placeholder="Company's Phone Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" id="employment3Start" name="employment1Start" />
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" id="employment3End" name="employment1End" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="employer3Position" placeholder="Position Held"></input>
                            </div>
                            <div className='col-md-8 col-xs-12'>
                                <input type="text" className="form-control" id="employer3Leaving" placeholder="Reason for Leaving"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Were you subject to the FMCRs* while employed here?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="optradio"></input>Yes</label>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="optradio"></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Was your job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="optradio"></input>Yes</label>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="optradio"></input>No</label>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="employer4Name" placeholder="Company's Name"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="employer4Address" placeholder="Company's Full Address"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="employer4Phone" placeholder="Company's Phone Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" id="employment4Start" name="employment1Start" />
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" id="employment4End" name="employment1End" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="employer4Position" placeholder="Position Held"></input>
                            </div>
                            <div className='col-md-8 col-xs-12'>
                                <input type="text" className="form-control" id="employer4Leaving" placeholder="Reason for Leaving"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Were you subject to the FMCRs* while employed here?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="optradio"></input>Yes</label>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="optradio"></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Was your job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="optradio"></input>Yes</label>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="optradio"></input>No</label>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="employer5Name" placeholder="Company's Name"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="employer5Address" placeholder="Company's Full Address"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="employer5Phone" placeholder="Company's Phone Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" id="employment5Start" name="employment1Start" />
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" id="employment5End" name="employment1End" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="employer5Position" placeholder="Position Held"></input>
                            </div>
                            <div className='col-md-8 col-xs-12'>
                                <input type="text" className="form-control" id="employer5Leaving" placeholder="Reason for Leaving"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Were you subject to the FMCRs* while employed here?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="optradio"></input>Yes</label>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="optradio"></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Was your job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="optradio"></input>Yes</label>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="optradio"></input>No</label>
                            </div>
                        </div>
                        <hr />
                        <div className='instructions'>
                            <h4>Driving Experience</h4>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Straight Truck</label>
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">From:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" id="straightTruckFrom" name="straightTruckFrom" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" id="straightTruckTo" name="straightTruckTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Miles Driven:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" id="straightTruckMilesDriven" name="straightTruckMilesDriven" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Tractor and Semi-Trailer</label>
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">From:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" id="TractorTruckFrom" name="TractorTruckFrom" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" id="TractorTruckTo" name="TractorTruckTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Miles Driven:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" id="TractorTruckMilesDriven" name="TractorTruckMilesDriven" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Tractor-Two Trailers</label>
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">From:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" id="TractorTwoTrailersFrom" name="TractorTwoTrailersFrom" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" id="TractorTwoTrailersTo" name="TractorTwoTrailersTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Miles Driven:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" id="TractorTwoTrailersMilesDriven" name="TractorTwoTrailersMilesDriven" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Tractor-Three Trailers 'Triples'</label>
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">From:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" id="TractorThreeTrailersFrom" name="TractorThreeTrailersFrom" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" id="TractorThreeTrailersTo" name="TractorThreeTrailersTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Miles Driven:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" id="TractorThreeTrailersMilesDriven" name="TractorThreeTrailersMilesDriven" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Other</label>
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">From:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" id="OtherFrom" name="OtherFrom" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" id="OtherTo" name="OtherTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Miles Driven:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" id="OtherDriven" name="OtherDriven" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Select all states operated in, for the last five years</label>
                            </div>
                            <div className='col-md-7 col-xs-12'>
                                <Select
                                    className= 'form-control statesOperated'
                                    id='statesOperated'
                                    value={selectedOption}
                                    onChange={this.handleChange1}
                                    options={options}
                                    isMulti
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <input type="text" className="form-control" id="trainingCompeted" placeholder="List special courses/training competed - PTD/DDC, Haz Mat, etc."></input>
                        </div>
                        <div className='row'>
                            <input type="text" className="form-control" id="safeDrivingAwards" placeholder="List any Safe Driving Awards you hold and from whom"></input>
                        </div>
                        <hr />
                        <div className="row">
                            <p className='applicationDetails instructions'>Accident Record for past three years - include more in the Other Info section at the bottom of the page</p>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Date of Accident:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" id="accidentDate1" name="accidentDate" />
                            </div>
                            <div className='col-md-7 col-xs-12'>
                                <input type="text" className="form-control" id="natureOfAccident1" placeholder="Nature of Accident - Head on, rear end, upset, etc."></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <input type="text" className="form-control" id="accidentLocation1" placeholder="Location of Accident"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" id="numberFatalities1" placeholder="Number of Fatalities"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" id="numberInjured1" placeholder="Number of People Injured"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Date of Accident:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" id="accidentDate2" name="accidentDate" />
                            </div>
                            <div className='col-md-7 col-xs-12'>
                                <input type="text" className="form-control" id="natureOfAccident2" placeholder="Nature of Accident - Head on, rear end, upset, etc."></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <input type="text" className="form-control" id="accidentLocation2" placeholder="Location of Accident"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" id="numberFatalities2" placeholder="Number of Fatalities"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" id="numberInjured2" placeholder="Number of People Injured"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Date of Accident:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" id="accidentDate3" name="accidentDate" />
                            </div>
                            <div className='col-md-7 col-xs-12'>
                                <input type="text" className="form-control" id="natureOfAccident3" placeholder="Nature of Accident - Head on, rear end, upset, etc."></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <input type="text" className="form-control" id="accidentLocation3" placeholder="Location of Accident"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" id="numberFatalities3" placeholder="Number of Fatalities"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" id="numberInjured3" placeholder="Number of People Injured"></input>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <p className='applicationDetails instructions'>Traffic Convictions and Forfeitures for the last three years - other than parking violations</p>
                        </div>
                        <div className='row'>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Date:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" id="convictionDate1" name="convictionDate1" />
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" id="convictionLocation1" placeholder="Location"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" id="convictionCharge1" placeholder="Charge"></input>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <input type="text" className="form-control" id="convictionPenalty1" placeholder="Penalty"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Date:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" id="convictionDate2" name="convictionDate1" />
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" id="convictionLocation2" placeholder="Location"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" id="convictionCharge2" placeholder="Charge"></input>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <input type="text" className="form-control" id="convictionPenalty2" placeholder="Penalty"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Date:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" id="convictionDate3" name="convictionDate1" />
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" id="convictionLocation3" placeholder="Location"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" id="convictionCharge3" placeholder="Charge"></input>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <input type="text" className="form-control" id="convictionPenalty3" placeholder="Penalty"></input>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <p className='applicationDetails instructions'>Driver's License - list each driver's license held in the past three years</p>
                        </div>
                        <div className='row'>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">State:</label>
                            </div>
                            <div className='col-md-6 col-xs-12'>
                                <Select
                                    required 
                                    className= 'form-control statesOperated'
                                    id='licenseState1'
                                    value={selectedOption}
                                    onChange={this.handleChange2}
                                    options={options}
                                />
                            </div>
                            <div className='col-md-5 col-xs-12'>
                                <input required type="text" className="form-control" id="driversLicenseNumber1" placeholder="License Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="driversLicenseType1" placeholder="License Type"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input required type="text" className="form-control" id="driversLicenseEndorsements1" placeholder="Endorsements"></input>
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Expiration:</label>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="month" className="form-control" id="driversLicenseExpiration1" name="driversLicenseExpiration1" />
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">State:</label>
                            </div>
                            <div className='col-md-6 col-xs-12'>
                                <Select
                                    className= 'form-control statesOperated'
                                    id='licenseState2'
                                    value={selectedOption}
                                    onChange={this.handleChange3}
                                    options={options}
                                />
                            </div>
                            <div className='col-md-5 col-xs-12'>
                                <input type="text" className="form-control" id="driversLicenseNumber2" placeholder="License Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="driversLicenseType2" placeholder="License Type"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" id="driversLicenseEndorsements2" placeholder="Endorsements"></input>
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect2">Expiration:</label>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="month" className="form-control" id="driversLicenseExpiration2" name="driversLicenseExpiration1" />
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">State:</label>
                            </div>
                            <div className='col-md-6 col-xs-12'>
                                <Select
                                    className= 'form-control statesOperated'
                                    id='licenseState3'
                                    value={selectedOption}
                                    onChange={this.handleChange4}
                                    options={options}
                                />
                            </div>
                            <div className='col-md-5 col-xs-12'>
                                <input type="text" className="form-control" id="driversLicenseNumber3" placeholder="License Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" id="driversLicenseType3" placeholder="License Type"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" id="driversLicenseEndorsements3" placeholder="Endorsements"></input>
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect3">Expiration:</label>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="month" className="form-control" id="driversLicenseExpiration3" name="driversLicenseExpiration1" />
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-8 col-xs-12'>
                                <label className='radioButtonDetails'>Have you ever been denied a license, permit, or privilege to operate a motor vehicle?:</label>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail deniedLicenseRadio-inline"><input required  className='radioButton' type="radio" name="optradio"></input>Yes</label>
                                <label className="radioDetail deniedLicenseRadio-inline"><input className='radioButton' type="radio" name="optradio"></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-8 col-xs-12'>
                                <label className='radioButtonDetails'>Has any license, permit, or privilege ever been suspended or revoked?:</label>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail revokedLicenseRadio-inline"><input required className='radioButton' type="radio" name="optradio"></input>Yes</label>
                                <label className="radioDetail revokedLicenseRadio-inline"><input className='radioButton' type="radio" name="optradio"></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-8 col-xs-12'>
                                <label className='radioButtonDetails'>Is there any reason you might be unable to perform the functions of the job for which you have applied - as described int he job description?:</label>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail revokedLicenseRadio-inline"><input required className='radioButton' type="radio" name="optradio"></input>Yes</label>
                                <label className="radioDetail revokedLicenseRadio-inline"><input className='radioButton' type="radio" name="optradio"></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-8 col-xs-12'>
                                <label className='radioButtonDetails'>Have you ever been convicted of a felony?:</label>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail revokedLicenseRadio-inline"><input required className='radioButton' type="radio" name="optradio"></input>Yes</label>
                                <label className="radioDetail revokedLicenseRadio-inline"><input className='radioButton' type="radio" name="optradio"></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <input type="text" className="form-control" id="driversLicenseReasons" placeholder='If the answers to A, B, C, or D is "Yes", give details'></input>
                        </div>
                        <hr />
                        <div className='instructions'>
                            <h4>Personal References</h4>
                            <p className='applicationDetails'>List three persons for references, other than family members, who have knowledge of your safety habits.</p>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="referenceName1" placeholder='Name'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="referenceAddress1" placeholder='Address'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="referencePhone1" placeholder='Phone'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="referenceName2" placeholder='Name'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="referenceAddress2" placeholder='Address'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="referencePhone2" placeholder='Phone'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="referenceName3" placeholder='Name'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="referenceAddress3" placeholder='Address'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" id="referencePhone3" placeholder='Phone'></input>
                            </div>
                        </div>
                        <hr />
                        <div className='instructions'>
                            <h4>To Be Read and Signed by Applicant</h4>
                            <p className='applicationAgreement'>It is agreed and understoon that any misrepresentation given on this application shall be considered an act of dishonesty.</p>
                            <p className='applicationAgreement'>It is agreed and understood that the motor carrier or his agents may investigate the applicant's background to ascertain any and all information of concern to applicant's record, whether same is of record or not, and applicant releases employers and persons named herein from all liability for any damages on account of his furnishing such information</p>
                            <p className='applicationAgreement'>It is also agreed and understood that under the Fair Credit Reporting Act, Public Law 91-508, I have been told that this investigation may include an investigating Consumer Report, including information regarding my character, general reputation, personal characteristics, and mode of living.</p>
                            <p className='applicationAgreement'>I agree to furnish such additional information and complete such examinations as may be required to complete my application file.</p>
                            <p className='applicationAgreement'>It is agreed and understood that this Application for Qualification in no way obligates the motor carrier to employ or hire the applicant</p>
                            <p className='applicationAgreement'>It is agreed and understood that if qualified and hired, I may be on a probationary period during which time I may be disqualified without recourse.</p>
                            <p className='applicationAgreement'>This certifies that this application was completed by me, and that all entries on it and information in it are true and complete to the best of my knowledge.</p>
                        </div>
                        <div className='row'>
                            <input required type="text" className="form-control" id="referenceAddress2" placeholder='Sign Here'></input>
                        </div>
                        <hr />
                        <div className='row'>
                            <textarea rows="8" cols="250" name="additionalInfo" form="usrform">Enter additional info here...</textarea>
                        </div> */}
                        <input type='submit' className='applicationSubmitButton' onClick={this.handleSubmit()} value='Send Application' />
                    </div>
                </form>
            </div>
        )
      }
    }

export default ApplicationForm;
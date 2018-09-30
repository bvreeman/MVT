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
    constructor(props) {
        super(props);
        this.state = {
            applicationDate: '',
            optradio: '',
            FirstName: '',
            MiddleName: '',
            LastName: '',
            Age: '',
            Phone: '',
            emergencyPhone: '',
            physicalExamExpDate: '',
            address1: '',
            addressFromDate1: '',
            addressToDate1: '',
            address2: '',
            addressFromDate2: '',
            addressToDate2: '',
            address3: '',
            addressFromDate3: '',
            addressToDate3: '',
            address4: '',
            addressFromDate4: '',
            addressToDate4: '',
            employedBeforeRadio: '',
            employedHereBeforeFrom: '',
            employedHereBeforeTo: '',
            reasonForLeaving: '',
            gradeSchool: '',
            College: '',
            postGraduate: '',
            employer1Name: '',
            employer1Address: '',
            employer1Phone: '',
            employment1Start: '',
            employment1End: '',
            employer1Position: '',
            employer1Leaving: '',
            FMCRsRadio1: '',
            CFRPart40_1: '',
            employer2Name: '',
            employer2Address: '',
            employer2Phone: '',
            employment2Start: '',
            employment2End: '',
            employer2Position: '',
            employer2Leaving: '',
            FMCRsRadio2: '',
            CFRPart40_2: '',
            employer3Name: '',
            employer3Address: '',
            employer3Phone: '',
            employment3Start: '',
            employment3End: '',
            employer3Position: '',
            employer3Leaving: '',
            FMCRsRadio3: '',
            CFRPart40_3: '',
            employer4Name: '',
            employer4Address: '',
            employer4Phone: '',
            employment4Start: '',
            employment4End: '',
            employer4Position: '',
            employer4Leaving: '',
            FMCRsRadio4: '',
            CFRPart40_4: '',
            employer5Name: '',
            employer5Address: '',
            employer5Phone: '',
            employment5Start: '',
            employment5End: '',
            employer5Position: '',
            employer5Leaving: '',
            FMCRsRadio5: '',
            CFRPart40_5: '',
            straightTruckFrom: '',
            straightTruckTo: '',
            straightTruckMilesDriven: '',
            TractorTruckFrom: '',
            TractorTruckTo: '',
            TractorTruckMilesDriven: '',
            TractorTwoTrailersFrom: '',
            TractorTwoTrailersTo: '',
            TractorTwoTrailersMilesDriven: '',
            TractorThreeTrailersFrom: '',
            TractorThreeTrailersTo: '',
            TractorThreeTrailersMilesDriven: '',
            OtherFrom: '',
            OtherTo: '',
            OtherDriven: '',
            statesOperated: '',
            trainingCompleted: '',
            safeDrivingAwards: '',
            accidentDate1: '',
            natureOfAccident1: '',
            accidentLocation1: '',
            numberFatalities1: '',
            numberInjured1: '',
            accidentDate2: '',
            natureOfAccident2: '',
            accidentLocation2: '',
            numberFatalities2: '',
            numberInjured2: '',
            accidentDate3: '',
            natureOfAccident3: '',
            accidentLocation3: '',
            numberFatalities3: '',
            numberInjured3: '',
            convictionDate1: '',
            convictionLocation1: '',
            convictionCharge1: '',
            convictionPenalty1: '',
            convictionDate2: '',
            convictionLocation2: '',
            convictionCharge2: '',
            convictionPenalty2: '',
            convictionDate3: '',
            convictionLocation3: '',
            convictionCharge3: '',
            convictionPenalty3: '',
            licenseState1: '',
            driversLicenseNumber1: '',
            driversLicenseType1: '',
            driversLicenseEndorsements1: '',
            driversLicenseExpiration1: '',
            licenseState2: '',
            driversLicenseNumber2: '',
            driversLicenseType2: '',
            driversLicenseEndorsements2: '',
            driversLicenseExpiration2: '',
            licenseState3: '',
            driversLicenseNumber3: '',
            driversLicenseType3: '',
            driversLicenseEndorsements3: '',
            driversLicenseExpiration3: '',
            deniedLicenceRadio: '',
            suspendedLicenseRadio: '',
            performJobRadio: '',
            felonyRadio: '',
            driversLicenseReasons: '',
            referenceName1: '',
            referenceAddress1: '',
            referencePhone1: '',
            referenceName2: '',
            referenceAddress2: '',
            referencePhone2: '',
            referenceName3: '',
            referenceAddress3: '',
            referencePhone3: '',
            signature: '',
            additionalInfo: '',
        }
    }
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
                                <input required type="date" className="form-control" value={this.state.applicationDate} placeholder="Date"></input>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <p className='radioButtonDetails'>Position applying for:</p>
                            </div>
                            <div className='col-md-5 col-xs-12'>
                                <label className="radioDetail jobTypeRadio-inline"><input required className='radioButton' type="radio" name="optradio"></input>Contractor</label>
                                <label className="radioDetail jobTypeRadio-inline"><input className='radioButton' type="radio" name="optradio" value={this.state.optradio}></input>Driver</label>
                                <label className="radioDetail jobTypeRadio-inline"><input className='radioButton' type="radio" name="optradio" value={this.state.optradio}></input>Contractor's Driver</label> 
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" value={this.state.FirstName} name="FirstName" placeholder="First Name" />
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" value={this.state.MiddleName} name="MiddleName" placeholder="Middle Name" />
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" value={this.state.LastName} name="LastName" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 col-xs-12'> 
                                <input required type="number" className="form-control" value={this.state.Age} name="Age" placeholder="*Age" />
                            </div>
                            <div className='col-md-4 col-xs-12'> 
                                <input required type="text" className="form-control" value={this.state.Phone} name="Phone" placeholder="Phone Number" />
                            </div>
                            <div className='col-md-4 col-xs-12'> 
                                <input required type="text" className="form-control" value={this.state.emergencyPhone} name="emergencyPhone" placeholder="Emergency Phone Number" />
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
                                <input type="date" className="form-control" value={this.state.physicalExamExpDate} name="physicalExamExpDate" placeholder="Physical Exam Expiration Date" />
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
                                <input required type="text" className="form-control" value={this.state.address1} name="address1" placeholder='Address' />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input required type="date" className="form-control" value={this.state.addressFromDate1} name="addressFromDate1" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input required type="date" className="form-control" value={this.state.addressToDate1} name="addressToDate1" />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.address2} name="address2" placeholder='Address' />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect2">From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" value={this.state.addressFromDate2} name="addressFromDate2" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect2">To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" value={this.state.addressToDate2} name="addressToDate2" />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.address3} name="address3" placeholder='Address' />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect3">From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" value={this.state.addressFromDate3} name="addressFromDate3" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect3">To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" value={this.state.addressToDate3} name="addressToDate3" />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.address4} name="address4" placeholder='Address' />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" value={this.state.addressFromDate4} name="addressFromDate4" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" value={this.state.addressToDate4} name="addressToDate4" />
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <p className='radioButtonDetails'>Have you worked for this company before?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail employedBeforeRadio-inline"><input required className='radioButton' type="radio" name="employedBeforeRadio" value={this.state.employedBeforeRadio}></input>Yes</label>
                                <label className="radioDetail employedBeforeRadio-inline"><input className='radioButton' type="radio" name="employedBeforeRadio" value={this.state.employedBeforeRadio}></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">If so, from:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" value={this.state.employedHereBeforeFrom} name="employedHereBeforeFrom" />
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" value={this.state.employedHereBeforeTo} name="employedHereBeforeTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Reason for Leaving:</label>
                            </div>
                            <div className='col-md-9 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.reasonForLeaving} name="reasonForLeaving" placeholder='Reason for Leaving' />
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
                                <select required className="form-control" value={this.state.gradeSchool}>
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
                                <select className="form-control" value={this.state.College}>
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
                                <select className="form-control" value={this.state.postGraduate}>
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
                                <input required type="text" className="form-control" value={this.state.employer1Name} placeholder="Company's Name"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" value={this.state.employer1Address} placeholder="Company's Full Address"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" value={this.state.employer1Phone} placeholder="Company's Phone Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input required type="month" className="form-control" value={this.state.employment1Start} name="employment1Start" />
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input required type="month" className="form-control" value={this.state.employment1End} name="employment1End" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" value={this.state.employer1Position} placeholder="Position Held"></input>
                            </div>
                            <div className='col-md-8 col-xs-12'>
                                <input required type="text" className="form-control" value={this.state.employer1Leaving} placeholder="Reason for Leaving"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Were you subject to the FMCRs* while employed here?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail jobFMCSR-inline"><input required className='radioButton' type="radio" name="FMCRsRadio1" value={this.state.FMCRsRadio1}></input>Yes</label>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="FMCRsRadio1" vlaue={this.state.FMCRsRadio1}></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Was your job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail job49CFRPart40-inline"><input required className='radioButton' type="radio" name="CFRPart40_1" value={this.state.CFRPart40_1}></input>Yes</label>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="CFRPart40_1" value={this.state.CFRPart40_1}></input>No</label>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer2Name} placeholder="Company's Name"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer2Address} placeholder="Company's Full Address"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer2Phone} placeholder="Company's Phone Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.employment2Start} name="employment1Start" />
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.employment2End} name="employment1End" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer2Position} placeholder="Position Held"></input>
                            </div>
                            <div className='col-md-8 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer2Leaving} placeholder="Reason for Leaving"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Were you subject to the FMCRs* while employed here?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="FMCRsRadio2" value={this.state.FMCRsRadio2}></input>Yes</label>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="FMCRsRadio2" value={this.state.FMCRsRadio2}></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Was your job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="CFRPart40_2" value={this.state.CFRPart40_2}></input>Yes</label>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="CFRPart40_2" value={this.state.CFRPart40_2}></input>No</label>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer3Name} placeholder="Company's Name"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer3Address} placeholder="Company's Full Address"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer3Phone} placeholder="Company's Phone Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.employment3Start} name="employment1Start" />
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.employment3End} name="employment1End" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer3Position} placeholder="Position Held"></input>
                            </div>
                            <div className='col-md-8 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer3Leaving} placeholder="Reason for Leaving"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Were you subject to the FMCRs* while employed here?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="FMCRsRadio3" value={this.state.FMCRsRadio3}></input>Yes</label>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="FMCRsRadio3" value={this.state.FMCRsRadio3}></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Was your job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="CFRPart40_3" value={this.state.CFRPart40_3}></input>Yes</label>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="CFRPart40_3" value={this.state.CFRPart40_3}></input>No</label>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer4Name} placeholder="Company's Name"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer4Address} placeholder="Company's Full Address"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer4Phone} placeholder="Company's Phone Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.employment4Start} name="employment1Start" />
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.employment4End} name="employment1End" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer4Position} placeholder="Position Held"></input>
                            </div>
                            <div className='col-md-8 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer4Leaving} placeholder="Reason for Leaving"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Were you subject to the FMCRs* while employed here?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="FMCRsRadio4" value={this.state.FMCRsRadio4}></input>Yes</label>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="FMCRsRadio4" value={this.state.FMCRsRadio4}></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Was your job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="CFRPart40_4" value={this.state.CFRPart40_4}></input>Yes</label>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="CFRPart40_4" value={this.state.CFRPart40_4}></input>No</label>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer5Name} placeholder="Company's Name"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer5Address} placeholder="Company's Full Address"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer5Phone} placeholder="Company's Phone Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.employment5Start} name="employment1Start" />
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.employment5End} name="employment1End" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer5Position} placeholder="Position Held"></input>
                            </div>
                            <div className='col-md-8 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.employer5Leaving} placeholder="Reason for Leaving"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Were you subject to the FMCRs* while employed here?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="FMCRsRadio5" value={this.state.FMCRsRadio5}></input>Yes</label>
                                <label className="radioDetail jobFMCSR-inline"><input className='radioButton' type="radio" name="FMCRsRadio5" value={this.state.FMCRsRadio5}></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Was your job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="CFRPart40_5" value={this.state.CFRPart40_5}></input>Yes</label>
                                <label className="radioDetail job49CFRPart40-inline"><input className='radioButton' type="radio" name="CFRPart40_5" value={this.state.CFRPart40_5}></input>No</label>
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
                                <input type="month" className="form-control" value={this.state.straightTruckFrom} name="straightTruckFrom" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.straightTruckTo} name="straightTruckTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Miles Driven:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" value={this.state.straightTruckMilesDriven} name="straightTruckMilesDriven" />
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
                                <input type="month" className="form-control" value={this.state.TractorTruckFrom} name="TractorTruckFrom" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.TractorTruckTo} name="TractorTruckTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Miles Driven:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" value={this.state.TractorTruckMilesDriven} name="TractorTruckMilesDriven" />
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
                                <input type="month" className="form-control" value={this.state.TractorTwoTrailersFrom} name="TractorTwoTrailersFrom" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.TractorTwoTrailersTo} name="TractorTwoTrailersTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Miles Driven:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" value={this.state.TractorTwoTrailersMilesDriven} name="TractorTwoTrailersMilesDriven" />
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
                                <input type="month" className="form-control" value={this.state.TractorThreeTrailersFrom} name="TractorThreeTrailersFrom" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.TractorThreeTrailersTo} name="TractorThreeTrailersTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Miles Driven:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" value={this.state.TractorThreeTrailersMilesDriven} name="TractorThreeTrailersMilesDriven" />
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
                                <input type="month" className="form-control" value={this.state.OtherFrom} name="OtherFrom" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.OtherTo} name="OtherTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Miles Driven:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" value={this.state.OtherDriven} name="OtherDriven" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Select all states operated in, for the last five years</label>
                            </div>
                            <div className='col-md-7 col-xs-12'>
                                <Select
                                    className= 'form-control statesOperated'
                                    value={this.state.statesOperated}
                                    onChange={this.handleChange1}
                                    options={options}
                                    isMulti
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <input type="text" className="form-control" value={this.state.trainingCompleted} placeholder="List special courses/training completed - PTD/DDC, Haz Mat, etc."></input>
                        </div>
                        <div className='row'>
                            <input type="text" className="form-control" value={this.state.safeDrivingAwards} placeholder="List any Safe Driving Awards you hold and from whom"></input>
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
                                <input type="month" className="form-control" value={this.state.accidentDate1} name="accidentDate" />
                            </div>
                            <div className='col-md-7 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.natureOfAccident1} placeholder="Nature of Accident - Head on, rear end, upset, etc."></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.accidentLocation1} placeholder="Location of Accident"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" value={this.state.numberFatalities1} placeholder="Number of Fatalities"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" value={this.state.numberInjured1} placeholder="Number of People Injured"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Date of Accident:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.accidentDate2} name="accidentDate" />
                            </div>
                            <div className='col-md-7 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.natureOfAccident2} placeholder="Nature of Accident - Head on, rear end, upset, etc."></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.accidentLocation2} placeholder="Location of Accident"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" value={this.state.numberFatalities2} placeholder="Number of Fatalities"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" value={this.state.numberInjured2} placeholder="Number of People Injured"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Date of Accident:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.accidentDate3} name="accidentDate" />
                            </div>
                            <div className='col-md-7 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.natureOfAccident3} placeholder="Nature of Accident - Head on, rear end, upset, etc."></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.accidentLocation3} placeholder="Location of Accident"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" value={this.state.numberFatalities3} placeholder="Number of Fatalities"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" value={this.state.numberInjured3} placeholder="Number of People Injured"></input>
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
                                <input type="month" className="form-control" value={this.state.convictionDate1} name="convictionDate1" />
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.convictionLocation1} placeholder="Location"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.convictionCharge1} placeholder="Charge"></input>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.convictionPenalty1} placeholder="Penalty"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Date:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.convictionDate2} name="convictionDate1" />
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.convictionLocation2} placeholder="Location"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.convictionCharge2} placeholder="Charge"></input>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.convictionPenalty2} placeholder="Penalty"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Date:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.convictionDate3} name="convictionDate1" />
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.convictionLocation3} placeholder="Location"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.convictionCharge3} placeholder="Charge"></input>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.convictionPenalty3} placeholder="Penalty"></input>
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
                                    value={this.state.licenseState1}
                                    onChange={this.handleChange2}
                                    options={options}
                                />
                            </div>
                            <div className='col-md-5 col-xs-12'>
                                <input required type="text" className="form-control" value={this.state.driversLicenseNumber1} placeholder="License Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" value={this.state.driversLicenseType1} placeholder="License Type"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input required type="text" className="form-control" value={this.state.driversLicenseEndorsements1} placeholder="Endorsements"></input>
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Expiration:</label>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="month" className="form-control" value={this.state.driversLicenseExpiration1} name="driversLicenseExpiration1" />
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
                                    value={this.state.licenseState2}
                                    onChange={this.handleChange3}
                                    options={options}
                                />
                            </div>
                            <div className='col-md-5 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.driversLicenseNumber2} placeholder="License Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.driversLicenseType2} placeholder="License Type"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.driversLicenseEndorsements2} placeholder="Endorsements"></input>
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect2">Expiration:</label>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.driversLicenseExpiration2} name="driversLicenseExpiration1" />
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
                                    value={this.state.licenseState3}
                                    onChange={this.handleChange4}
                                    options={options}
                                />
                            </div>
                            <div className='col-md-5 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.driversLicenseNumber3} placeholder="License Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.driversLicenseType3} placeholder="License Type"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" value={this.state.driversLicenseEndorsements3} placeholder="Endorsements"></input>
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect3">Expiration:</label>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="month" className="form-control" value={this.state.driversLicenseExpiration3} name="driversLicenseExpiration1" />
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-8 col-xs-12'>
                                <label className='radioButtonDetails'>Have you ever been denied a license, permit, or privilege to operate a motor vehicle?:</label>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail deniedLicenseRadio-inline"><input required  className='radioButton' type="radio" name="deniedLicenceRadio" value={this.state.deniedLicenceRadio}></input>Yes</label>
                                <label className="radioDetail deniedLicenseRadio-inline"><input className='radioButton' type="radio" name="deniedLicenceRadio" value={this.state.deniedLicenceRadio}></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-8 col-xs-12'>
                                <label className='radioButtonDetails'>Has any license, permit, or privilege ever been suspended or revoked?:</label>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail revokedLicenseRadio-inline"><input required className='radioButton' type="radio" name="suspendedLicenseRadio" value={this.state.suspendedLicenseRadio}></input>Yes</label>
                                <label className="radioDetail revokedLicenseRadio-inline"><input className='radioButton' type="radio" name="suspendedLicenseRadio" value={this.state.suspendedLicenseRadio}></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-8 col-xs-12'>
                                <label className='radioButtonDetails'>Is there any reason you might be unable to perform the functions of the job for which you have applied - as described in the job description?:</label>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail revokedLicenseRadio-inline"><input required className='radioButton' type="radio" name="performJobRadio"></input>Yes</label>
                                <label className="radioDetail revokedLicenseRadio-inline"><input className='radioButton' type="radio" name="performJobRadio"></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-8 col-xs-12'>
                                <label className='radioButtonDetails'>Have you ever been convicted of a felony?:</label>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail revokedLicenseRadio-inline"><input required className='radioButton' type="radio" name="felonyRadio"></input>Yes</label>
                                <label className="radioDetail revokedLicenseRadio-inline"><input className='radioButton' type="radio" name="felonyRadio"></input>No</label>
                            </div>
                        </div>
                        <div className='row'>
                            <input type="text" className="form-control" value="driversLicenseReasons" placeholder='If the answers to A, B, C, or D is "Yes", give details'></input>
                        </div>
                        <hr />
                        <div className='instructions'>
                            <h4>Personal References</h4>
                            <p className='applicationDetails'>List three persons for references, other than family members, who have knowledge of your safety habits.</p>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" value="referenceName1" placeholder='Name'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" value="referenceAddress1" placeholder='Address'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" value="referencePhone1" placeholder='Phone'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" value="referenceName2" placeholder='Name'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" value="referenceAddress2" placeholder='Address'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" value="referencePhone2" placeholder='Phone'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" value="referenceName3" placeholder='Name'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" value="referenceAddress3" placeholder='Address'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" value="referencePhone3" placeholder='Phone'></input>
                            </div>
                        </div>
                        <hr />
                        <div className='instructions'>
                            <h4>To Be Read and Signed by Applicant</h4>
                            <p className='applicationAgreement'>It is agreed and understoond that any misrepresentation given on this application shall be considered an act of dishonesty.</p>
                            <p className='applicationAgreement'>It is agreed and understood that the motor carrier or his agents may investigate the applicant's background to ascertain any and all information of concern to applicant's record, whether same is of record or not, and applicant releases employers and persons named herein from all liability for any damages on account of his furnishing such information</p>
                            <p className='applicationAgreement'>It is also agreed and understood that under the Fair Credit Reporting Act, Public Law 91-508, I have been told that this investigation may include an investigating Consumer Report, including information regarding my character, general reputation, personal characteristics, and mode of living.</p>
                            <p className='applicationAgreement'>I agree to furnish such additional information and complete such examinations as may be required to complete my application file.</p>
                            <p className='applicationAgreement'>It is agreed and understood that this Application for Qualification in no way obligates the motor carrier to employ or hire the applicant</p>
                            <p className='applicationAgreement'>It is agreed and understood that if qualified and hired, I may be on a probationary period during which time I may be disqualified without recourse.</p>
                            <p className='applicationAgreement'>This certifies that this application was completed by me, and that all entries on it and information in it are true and complete to the best of my knowledge.</p>
                        </div>
                        <div className='row'>
                            <input required type="text" className="form-control" value="signature" placeholder='Your Name'></input>
                        </div>
                        <hr />
                        <div className='row'>
                            <textarea rows="8" cols="250" name="additionalInfo" value="additionalInfo" form="usrform">Enter additional info here...</textarea>
                        </div>
                        <input type='submit' className='applicationSubmitButton' onClick={this.handleSubmit()} value='Send Application' />
                    </div>
                </form>
            </div>
        )
      }
    }

export default ApplicationForm;
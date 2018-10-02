import React from 'react';
import './ApplicationForm.css'
import Select from 'react-select';
import {statesData} from './data';

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
            statesOperated: [],
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
            deniedLicenseRadio: '',
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
            selectedOptionOperated: null,
            selectedOptionLicenseState1: null,
            selectedOptionLicenseState2: null,
            selectedOptionLicenseState3: null,
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleChange1 = (selectedOptionOperated) => {
        this.state.statesOperated.push(selectedOptionOperated);
    }

    handleChange2 = (selectedOptionLicenseState1) => {
        this.setState({ licenseState1: selectedOptionLicenseState1 })
        console.log('license state1', this.licenseState1);
    }

    handleChange3 = (selectedOptionLicenseState2) => {
        this.setState({ licenseState2: selectedOptionLicenseState2 })
        // this.state.licenseState2 === selectedOptionLicenseState2
    }

    handleChange4 = (selectedOptionLicenseState3) => {
        this.setState({ licenseState3: selectedOptionLicenseState3 })
    }

    handleSubmit = (e) => {
    //   e.preventDefault();
        // console.log('submitted?')
        console.log(this.state)
    }


      
      render() {
        // const { selectedOption } = this.state; 
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
                                {/* <input required type="date" className="form-control" onChange={this.handleChange} value={this.state.applicationDate} placeholder="Date" /> */}
                                <input type="date" className="form-control" onChange={this.handleChange} value={this.state.applicationDate} name="applicationDate"/>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <p className='radioButtonDetails'>Position applying for:</p>
                            </div>
                            <div className='col-md-5 col-xs-12'>
                                <label className="radioDetail jobTypeRadio-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        required 
                                        className='radioButton' 
                                        type="radio" 
                                        name="optradio" 
                                        value='Contractor'
                                        checked={this.state.optradio === 'Contractor'}>
                                    </input>Contractor
                                </label>
                                <label className="radioDetail jobTypeRadio-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        name="optradio" 
                                        value='Driver'
                                        checked={this.state.optradio === 'Driver'}>
                                    </input>Driver
                                </label>
                                <label className="radioDetail jobTypeRadio-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        name="optradio"
                                        value='Contractor Driver' 
                                        checked={this.state.optradio === 'Contractor Driver'}>
                                    </input>Contractor's Driver
                                </label> 
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" onChange={this.handleChange} className="form-control" value={this.state.FirstName} name="FirstName" placeholder="First Name" />
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" onChange={this.handleChange} className="form-control" value={this.state.MiddleName} name="MiddleName" placeholder="Middle Name" />
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" onChange={this.handleChange} className="form-control" value={this.state.LastName} name="LastName" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 col-xs-12'> 
                                <input required type="number" className="form-control" onChange={this.handleChange} value={this.state.Age} name="Age" placeholder="*Age" />
                            </div>
                            <div className='col-md-4 col-xs-12'> 
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.Phone} name="Phone" placeholder="Phone Number" />
                            </div>
                            <div className='col-md-4 col-xs-12'> 
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.emergencyPhone} name="emergencyPhone" placeholder="Emergency Phone Number" />
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
                                <input type="date" className="form-control" onChange={this.handleChange} value={this.state.physicalExamExpDate} name="physicalExamExpDate" placeholder="Physical Exam Expiration Date" />
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
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.address1} name="address1" placeholder='Address' />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input required type="date" className="form-control" onChange={this.handleChange} value={this.state.addressFromDate1} name="addressFromDate1" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input required type="date" className="form-control" onChange={this.handleChange} value={this.state.addressToDate1} name="addressToDate1" />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.address2} name="address2" placeholder='Address' />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect2">From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" onChange={this.handleChange} value={this.state.addressFromDate2} name="addressFromDate2" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect2">To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" onChange={this.handleChange} value={this.state.addressToDate2} name="addressToDate2" />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.address3} name="address3" placeholder='Address' />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect3">From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" onChange={this.handleChange} value={this.state.addressFromDate3} name="addressFromDate3" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect3">To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" onChange={this.handleChange} value={this.state.addressToDate3} name="addressToDate3" />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.address4} name="address4" placeholder='Address' />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" onChange={this.handleChange} value={this.state.addressFromDate4} name="addressFromDate4" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" onChange={this.handleChange} value={this.state.addressToDate4} name="addressToDate4" />
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <p className='radioButtonDetails'>Have you worked for this company before?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail employedBeforeRadio-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        required 
                                        className='radioButton' 
                                        type="radio" 
                                        name="employedBeforeRadio" 
                                        value='employedBeforeRadio_Yes'
                                        checked={this.state.employedBeforeRadio === 'employedBeforeRadio_Yes'}>
                                    </input>Yes
                                </label>
                                <label className="radioDetail employedBeforeRadio-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        name="employedBeforeRadio"
                                        value='employedBeforeRadio_No' 
                                        checked={this.state.employedBeforeRadio === 'employedBeforeRadio_No'}>
                                    </input>No
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">If so, from:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" onChange={this.handleChange} value={this.state.employedHereBeforeFrom} name="employedHereBeforeFrom" />
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="date" className="form-control" onChange={this.handleChange} value={this.state.employedHereBeforeTo} name="employedHereBeforeTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Reason for Leaving:</label>
                            </div>
                            <div className='col-md-9 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.reasonForLeaving} name="reasonForLeaving" placeholder='Reason for Leaving' />
                            </div>
                        </div>
                        <hr />
                        <div className='instructions'>
                            <h4>Education History</h4>
                            <p className='applicationDetails'>Please select the highest grade completed:</p>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.gradeSchool} name="gradeSchool" placeholder="Highest Grade Completed in Grade School" />
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.College} name="College" placeholder="Level of College Completed" />
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.postGraduate} name="postGraduate" placeholder="Post Graduate Completed" />
                            </div>
                        </div>
                        <hr />
                        <div className='instructions'>
                            <h4>Employment History</h4>
                            <p className='applicationDetails'>Give a Complete Record of all employment for the past three years, including any unemployment or self employment, and all commercial driving experience for the past ten years.</p>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.employer1Name} name="employer1Name" placeholder="Company's Name" />
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.employer1Address} name="employer1Address" placeholder="Company's Full Address"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.employer1Phone} name="employer1Phone" placeholder="Company's Phone Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input required type="month" className="form-control" onChange={this.handleChange} value={this.state.employment1Start} name="employment1Start" />
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input required type="month" className="form-control" onChange={this.handleChange} value={this.state.employment1End} name="employment1End" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.employer1Position} name="employer1Position" placeholder="Position Held" />
                            </div>
                            <div className='col-md-8 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.employer1Leaving} name="employer1Leaving" placeholder="Reason for Leaving" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Were you subject to the FMCRs* while employed here?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail jobFMCSR-inline">
                                    <input 
                                        required 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        name="FMCRsRadio1" 
                                        value='FMCRsRadio1_Yes'
                                        checked={this.state.FMCRsRadio1 === 'FMCRsRadio1_Yes'}>
                                    </input>Yes
                                </label>
                                <label className="radioDetail jobFMCSR-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        value='FMCRsRadio1_No'
                                        checked={this.state.FMCRsRadio1 === 'FMCRsRadio1_No'} 
                                        name="FMCRsRadio1" >
                                    </input>No
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Was your job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail job49CFRPart40-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        required 
                                        className='radioButton' 
                                        type="radio" 
                                        name="CFRPart40_1" 
                                        value='CFRPart40_1_Yes'
                                        checked={this.state.CFRPart40_1 === 'CFRPart40_1_Yes'}>
                                    </input>Yes
                                </label>
                                <label className="radioDetail job49CFRPart40-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        name="CFRPart40_1" 
                                        value='CFRPart40_1_No'
                                        checked={this.state.CFRPart40_1 === 'CFRPart40_1_No'}>
                                    </input>No
                                </label>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer2Name} name='employer2Name' placeholder="Company's Name"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer2Address} name='employer2Address' placeholder="Company's Full Address"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer2Phone} name='employer2Phone' placeholder="Company's Phone Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.employment2Start} name="employment2Start" />
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.employment2End} name="employment2End" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer2Position} name='employer2Position' placeholder="Position Held"></input>
                            </div>
                            <div className='col-md-8 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer2Leaving} name='employer2Leaving' placeholder="Reason for Leaving"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Were you subject to the FMCRs* while employed here?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail jobFMCSR-inline">
                                    <input 
                                        required 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        name="FMCRsRadio2" 
                                        value='FMCRsRadio2_Yes'
                                        checked={this.state.FMCRsRadio2 === 'FMCRsRadio2_Yes'}>
                                    </input>Yes
                                </label>
                                <label className="radioDetail jobFMCSR-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        value='FMCRsRadio2_No'
                                        checked={this.state.FMCRsRadio2 === 'FMCRsRadio2_No'} 
                                        name="FMCRsRadio2" >
                                    </input>No
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Was your job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail job49CFRPart40-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        required 
                                        className='radioButton' 
                                        type="radio" 
                                        name="CFRPart40_2" 
                                        value='CFRPart40_2_Yes'
                                        checked={this.state.CFRPart40_2 === 'CFRPart40_2_Yes'}>
                                    </input>Yes
                                </label>
                                <label className="radioDetail job49CFRPart40-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        name="CFRPart40_2" 
                                        value='CFRPart40_2_No'
                                        checked={this.state.CFRPart40_2 === 'CFRPart40_2_No'}>
                                    </input>No
                                </label>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer3Name} name='employer3Name' placeholder="Company's Name"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer3Address} name='employer3Address' placeholder="Company's Full Address"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer3Phone} name='employer3Phone' placeholder="Company's Phone Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.employment3Start} name="employment3Start" />
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.employment3End} name="employment3End" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer3Position} name='employer3Position' placeholder="Position Held"></input>
                            </div>
                            <div className='col-md-8 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer3Leaving} name='employer3Leaving' placeholder="Reason for Leaving"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Were you subject to the FMCRs* while employed here?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail jobFMCSR-inline">
                                    <input 
                                        required 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        name="FMCRsRadio3" 
                                        value='FMCRsRadio3_Yes'
                                        checked={this.state.FMCRsRadio3 === 'FMCRsRadio3_Yes'}>
                                    </input>Yes
                                </label>
                                <label className="radioDetail jobFMCSR-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        value='FMCRsRadio3_No'
                                        checked={this.state.FMCRsRadio3 === 'FMCRsRadio3_No'} 
                                        name="FMCRsRadio3" >
                                    </input>No
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Was your job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail job49CFRPart40-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        required 
                                        className='radioButton' 
                                        type="radio" 
                                        name="CFRPart40_3" 
                                        value='CFRPart40_3_Yes'
                                        checked={this.state.CFRPart40_3 === 'CFRPart40_3_Yes'}>
                                    </input>Yes
                                </label>
                                <label className="radioDetail job49CFRPart40-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        name="CFRPart40_3" 
                                        value='CFRPart40_3_No'
                                        checked={this.state.CFRPart40_3 === 'CFRPart40_3_No'}>
                                    </input>No
                                </label>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer4Name} name='employer4Name' placeholder="Company's Name"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer4Address} name='employer4Address' placeholder="Company's Full Address"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer4Phone} name='employer4Phone' placeholder="Company's Phone Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.employment4Start} name="employment4Start" />
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.employment4End} name="employment4End" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer4Position} name='employer4Position' placeholder="Position Held"></input>
                            </div>
                            <div className='col-md-8 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer4Leaving} name='employer4Leaving' placeholder="Reason for Leaving"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Were you subject to the FMCRs* while employed here?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail jobFMCSR-inline">
                                    <input 
                                        required 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        name="FMCRsRadio4" 
                                        value='FMCRsRadio4_Yes'
                                        checked={this.state.FMCRsRadio4 === 'FMCRsRadio4_Yes'}>
                                    </input>Yes
                                </label>
                                <label className="radioDetail jobFMCSR-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        value='FMCRsRadio4_No'
                                        checked={this.state.FMCRsRadio4 === 'FMCRsRadio4_No'} 
                                        name="FMCRsRadio4" >
                                    </input>No
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Was your job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail job49CFRPart40-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        required 
                                        className='radioButton' 
                                        type="radio" 
                                        name="CFRPart40_4" 
                                        value='CFRPart40_4_Yes'
                                        checked={this.state.CFRPart40_4 === 'CFRPart40_4_Yes'}>
                                    </input>Yes
                                </label>
                                <label className="radioDetail job49CFRPart40-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        name="CFRPart40_4" 
                                        value='CFRPart40_4_No'
                                        checked={this.state.CFRPart40_4 === 'CFRPart40_4_No'}>
                                    </input>No
                                </label>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer5Name} name='employer5Name' placeholder="Company's Name"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer5Address} name='employer5Address' placeholder="Company's Full Address"></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer5Phone} name='employer5Phone' placeholder="Company's Phone Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed From:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.employment5Start} name="employment5Start" />
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect4">Employed To:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.employment5End} name="employment5End" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer5Position} name='employer5Position' placeholder="Position Held"></input>
                            </div>
                            <div className='col-md-8 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.employer5Leaving} name='employer5Leaving' placeholder="Reason for Leaving"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Were you subject to the FMCRs* while employed here?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail jobFMCSR-inline">
                                    <input 
                                        required 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        name="FMCRsRadio5" 
                                        value='FMCRsRadio5_Yes'
                                        checked={this.state.FMCRsRadio5 === 'FMCRsRadio5_Yes'}>
                                    </input>Yes
                                </label>
                                <label className="radioDetail jobFMCSR-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        value='FMCRsRadio5_No'
                                        checked={this.state.FMCRsRadio5 === 'FMCRsRadio5_No'} 
                                        name="FMCRsRadio5" >
                                    </input>No
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 col-xs-12'>
                                <p className='radioButtonDetails'>Was your job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40?</p>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail job49CFRPart40-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        required 
                                        className='radioButton' 
                                        type="radio" 
                                        name="CFRPart40_5" 
                                        value='CFRPart40_5_Yes'
                                        checked={this.state.CFRPart40_5 === 'CFRPart40_5_Yes'}>
                                    </input>Yes
                                </label>
                                <label className="radioDetail job49CFRPart40-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        name="CFRPart40_5" 
                                        value='CFRPart40_5_No'
                                        checked={this.state.CFRPart40_5 === 'CFRPart40_5_No'}>
                                    </input>No
                                </label>
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
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.straightTruckFrom} name="straightTruckFrom" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.straightTruckTo} name="straightTruckTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Miles Driven:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" onChange={this.handleChange} value={this.state.straightTruckMilesDriven} name="straightTruckMilesDriven" />
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
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.TractorTruckFrom} name="TractorTruckFrom" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.TractorTruckTo} name="TractorTruckTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Miles Driven:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" onChange={this.handleChange} value={this.state.TractorTruckMilesDriven} name="TractorTruckMilesDriven" />
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
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.TractorTwoTrailersFrom} name="TractorTwoTrailersFrom" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.TractorTwoTrailersTo} name="TractorTwoTrailersTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Miles Driven:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" onChange={this.handleChange} value={this.state.TractorTwoTrailersMilesDriven} name="TractorTwoTrailersMilesDriven" />
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
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.TractorThreeTrailersFrom} name="TractorThreeTrailersFrom" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.TractorThreeTrailersTo} name="TractorThreeTrailersTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Miles Driven:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" onChange={this.handleChange} value={this.state.TractorThreeTrailersMilesDriven} name="TractorThreeTrailersMilesDriven" />
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
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.OtherFrom} name="OtherFrom" />
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">To:</label>
                            </div>
                            <div className='col-md-2.5 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.OtherTo} name="OtherTo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Miles Driven:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" onChange={this.handleChange} value={this.state.OtherDriven} name="OtherDriven" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Select all states operated in, for the last five years</label>
                            </div>
                            <div className='col-md-7 col-xs-12'>
                                <Select
                                    className= 'form-control statesOperated'
                                    // onChange={this.handleChange} 
                                    value={this.state.statesOperated}
                                    name="statesOperated"
                                    onChange={this.handleChange1}
                                    options={statesData}
                                    isMulti
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <input type="text" className="form-control" onChange={this.handleChange} value={this.state.trainingCompleted} name='trainingCompleted' placeholder="List special courses/training completed - PTD/DDC, Haz Mat, etc." />
                        </div>
                        <div className='row'>
                            <input type="text" className="form-control" onChange={this.handleChange} value={this.state.safeDrivingAwards} name='safeDrivingAwards' placeholder="List any Safe Driving Awards you hold and from whom"></input>
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
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.accidentDate1} name="accidentDate1" />
                            </div>
                            <div className='col-md-7 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.natureOfAccident1} name='natureOfAccident1' placeholder="Nature of Accident - Head on, rear end, upset, etc."></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.accidentLocation1} name='accidentLocation1' placeholder="Location of Accident"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" onChange={this.handleChange} value={this.state.numberFatalities1} name='numberFatalities1' placeholder="Number of Fatalities"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" onChange={this.handleChange} value={this.state.numberInjured1} name='numberInjured1' placeholder="Number of People Injured"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Date of Accident:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.accidentDate2} name="accidentDate2" />
                            </div>
                            <div className='col-md-7 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.natureOfAccident2} name='natureOfAccident2' placeholder="Nature of Accident - Head on, rear end, upset, etc."></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.accidentLocation2} name='accidentLocation2' placeholder="Location of Accident"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" onChange={this.handleChange} value={this.state.numberFatalities2} name='numberFatalities2' placeholder="Number of Fatalities"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" onChange={this.handleChange} value={this.state.numberInjured2} name='numberInjured2' placeholder="Number of People Injured"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Date of Accident:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.accidentDate3} name="accidentDate3" />
                            </div>
                            <div className='col-md-7 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.natureOfAccident3} name='natureOfAccident3' placeholder="Nature of Accident - Head on, rear end, upset, etc."></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.accidentLocation3} name='accidentLocation3' placeholder="Location of Accident"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" onChange={this.handleChange} value={this.state.numberFatalities3} name='numberFatalities3' placeholder="Number of Fatalities"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="number" className="form-control" onChange={this.handleChange} value={this.state.numberInjured3} name='numberInjured3' placeholder="Number of People Injured"></input>
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
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.convictionDate1} name="convictionDate1" />
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.convictionLocation1} name='convictionLocation1' placeholder="Location"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.convictionCharge1} name='convictionCharge1' placeholder="Charge"></input>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.convictionPenalty1} name='convictionPenalty1' placeholder="Penalty"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Date:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.convictionDate2} name="convictionDate2" />
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.convictionLocation2} name='convictionLocation2' placeholder="Location"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.convictionCharge2} name='convictionCharge2' placeholder="Charge"></input>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.convictionPenalty2} name='convictionPenalty2' placeholder="Penalty"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Date:</label>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.convictionDate3} name="convictionDate3" />
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.convictionLocation3} name='convictionLocation3' placeholder="Location"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.convictionCharge3} name='convictionCharge3' placeholder="Charge"></input>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.convictionPenalty3} name='convictionPenalty3' placeholder="Penalty"></input>
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
                                    // onChange={this.handleChange} 
                                    value={this.state.licenseState1}
                                    name="licenseState1"
                                    onChange={this.handleChange2}
                                    options={statesData}
                                />
                            </div>
                            <div className='col-md-5 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.driversLicenseNumber1} name='driversLicenseNumber1' placeholder="License Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.driversLicenseType1} name='driversLicenseType1' placeholder="License Type"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.driversLicenseEndorsements1} name='driversLicenseEndorsements1' placeholder="Endorsements"></input>
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect1">Expiration:</label>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="month" className="form-control" onChange={this.handleChange} value={this.state.driversLicenseExpiration1} name="driversLicenseExpiration1" />
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
                                    // onChange={this.handleChange} 
                                    value={this.state.licenseState2}
                                    name='licenseState2' 
                                    onChange={this.handleChange3}
                                    options={statesData}
                                />
                            </div>
                            <div className='col-md-5 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.driversLicenseNumber2} name='driversLicenseNumber2' placeholder="License Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.driversLicenseType2} name='driversLicenseType2' placeholder="License Type"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.driversLicenseEndorsements2} name='driversLicenseEndorsements2' placeholder="Endorsements"></input>
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect2">Expiration:</label>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.driversLicenseExpiration2} name="driversLicenseExpiration2" />
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
                                    // onChange={this.handleChange} 
                                    value={this.state.licenseState3}
                                    name='licenseState3' 
                                    onChange={this.handleChange4}
                                    options={statesData}
                                />
                            </div>
                            <div className='col-md-5 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.driversLicenseNumber3} name='driversLicenseNumber3' placeholder="License Number"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.driversLicenseType3} name='driversLicenseType3' placeholder="License Type"></input>
                            </div>
                            <div className='col-md-3 col-xs-12'>
                                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.driversLicenseEndorsements3} name='driversLicenseEndorsements3' placeholder="Endorsements"></input>
                            </div>
                            <div className='col-md-1 col-xs-12'>
                                <label className='formLabel' htmlFor="exampleFormControlSelect3">Expiration:</label>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input type="month" className="form-control" onChange={this.handleChange} value={this.state.driversLicenseExpiration3} name="driversLicenseExpiration3" />
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-8 col-xs-12'>
                                <label className='radioButtonDetails'>Have you ever been denied a license, permit, or privilege to operate a motor vehicle?:</label>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail deniedLicenseRadio-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        required 
                                        className='radioButton' 
                                        type="radio" 
                                        name="deniedLicenseRadio"
                                        value='deniedLicenseRadio_Yes'
                                        checked={this.state.deniedLicenseRadio === 'deniedLicenseRadio_Yes'}>
                                    </input>Yes
                                </label>
                                <label className="radioDetail deniedLicenseRadio-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        name="deniedLicenseRadio"
                                        value='deniedLicenseRadio_No' 
                                        checked={this.state.deniedLicenseRadio === 'deniedLicenseRadio_No'}>
                                    </input>No
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-8 col-xs-12'>
                                <label className='radioButtonDetails'>Has any license, permit, or privilege ever been suspended or revoked?:</label>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail revokedLicenseRadio-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        required 
                                        className='radioButton' 
                                        type="radio" 
                                        name="suspendedLicenseRadio" 
                                        value='suspendedLicenseRadio_Yes'
                                        checked={this.state.suspendedLicenseRadio === 'suspendedLicenseRadio_Yes'}>
                                    </input>Yes
                                </label>
                                <label className="radioDetail revokedLicenseRadio-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        name="suspendedLicenseRadio" 
                                        value='suspendedLicenseRadio_No'
                                        checked={this.state.suspendedLicenseRadio === 'suspendedLicenseRadio_No'}>
                                    </input>No
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-8 col-xs-12'>
                                <label className='radioButtonDetails'>Is there any reason you might be unable to perform the functions of the job for which you have applied - as described in the job description?:</label>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail revokedLicenseRadio-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        required 
                                        className='radioButton' 
                                        type="radio" 
                                        value='performJobRadio_Yes'
                                        checked={this.state.performJobRadio === 'performJobRadio_Yes'} 
                                        name="performJobRadio">
                                    </input>Yes
                                </label>
                                <label className="radioDetail revokedLicenseRadio-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        value='performJobRadio_No'
                                        checked={this.state.performJobRadio === 'performJobRadio_No'} 
                                        name="performJobRadio">
                                    </input>No
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-8 col-xs-12'>
                                <label className='radioButtonDetails'>Have you ever been convicted of a felony?:</label>
                            </div>
                            <div className='col-md-2 col-xs-12'>
                                <label className="radioDetail revokedLicenseRadio-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        required 
                                        className='radioButton' 
                                        type="radio" 
                                        value='felonyRadio_Yes'
                                        checked={this.state.felonyRadio === 'felonyRadio_Yes'} 
                                        name="felonyRadio">
                                    </input>Yes
                                </label>
                                <label className="radioDetail revokedLicenseRadio-inline">
                                    <input 
                                        onChange={this.handleChange} 
                                        className='radioButton' 
                                        type="radio" 
                                        value='felonyRadio_No'
                                        checked={this.state.felonyRadio === 'felonyRadio_No'} 
                                        name="felonyRadio">
                                    </input>No
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <input type="text" className="form-control" onChange={this.handleChange} value={this.state.driversLicenseReasons} name='driversLicenseReasons' placeholder='If the answers to A, B, C, or D is "Yes", give details'></input>
                        </div>
                        <hr />
                        <div className='instructions'>
                            <h4>Personal References</h4>
                            <p className='applicationDetails'>List three persons for references, other than family members, who have knowledge of your safety habits.</p>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.referenceName1} name='referenceName1' placeholder='Name'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.referenceAddress1} name='referenceAddress1' placeholder='Address'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.referencePhone1} name='referencePhone1' placeholder='Phone'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.referenceName2} name='referenceName2' placeholder='Name'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.referenceAddress2} name='referenceAddress2' placeholder='Address'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.referencePhone2} name='referencePhone2' placeholder='Phone'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.referenceName3} name='referenceName3' placeholder='Name'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.referenceAddress3} name='referenceAddress3' placeholder='Address'></input>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.referencePhone3} name='referencePhone3' placeholder='Phone'></input>
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
                            <input required type="text" className="form-control" onChange={this.handleChange} value={this.state.signature} name='signature' placeholder='Your Name'></input>
                        </div>
                        <hr />
                        <div className='row'>
                            <textarea rows="8" cols="250" name="additionalInfo" onChange={this.handleChange} value={this.state.additionalInfo} form="usrform">Enter additional info here...</textarea>
                        </div>
                        <input type='submit' className='applicationSubmitButton' onClick={this.handleSubmit()} value='Send Application' />
                    </div>
                </form>
            </div>
        )
      }
    }

export default ApplicationForm;
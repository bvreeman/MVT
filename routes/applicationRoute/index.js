const router = require("express").Router();
const nodemailer = require('nodemailer')

// API Routes
let transport;

if (process.env.NODE_ENV === "production") {
  console.log('application route production')
  transport = nodemailer.createTransport({
    service: "Hotmail",
    auth: {
        user: process.env.CREDS_USER,
        pass: process.env.CREDS_PASS
      }
    })
  } else {
    console.log('application route development')
    let creds = require('../../config/config');
    transport = nodemailer.createTransport({
      service: "Hotmail",
      auth: {
        user: creds.USER,
        pass: creds.PASS
        }
      })
  }

transport.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/applicationRoute/send', (req, res, next) => {
    // console.log('gets here for req', req.body)
    const applicationDate = req.body.applicationDate
    // console.log('app date', applicationDate)
    const optradio = req.body.optradio
    const FullName = `${req.body.FirstName} ${req.body.MiddleName} ${req.body.LastName}` 
    const Age = req.body.Age
    const PhoneNumber = req.body.Phone
    const emergencyPhone = req.body.emergencyPhone
    const physicalExamExpDate = req.body.physicalExamExpDate
    const address1 = req.body.address1
    const addressFromDate1 = req.body.addressFromDate1
    const addressToDate1 = req.body.addressToDate1
    const address2 = req.body.address2
    const addressFromDate2 = req.body.addressFromDate2
    const addressToDate2 = req.body.addressToDate2
    const address3 = req.body.address3
    const addressFromDate3 = req.body.addressFromDate3
    const addressToDate3 = req.body.addressToDate3
    const address4 = req.body.address4
    const addressFromDate4 = req.body.addressFromDate4
    const addressToDate4 = req.body.addressToDate4
    const employedBeforeRadio = req.body.employedBeforeRadio
    const employedHereBeforeFrom = req.body.employedHereBeforeFrom
    const employedHereBeforeTo = req.body.employedHereBeforeFrom
    const reasonForLeaving = req.body.reasonForLeaving
    const gradeSchool = req.body.gradeSchool
    const College = req.body.College
    const postGraduate = req.body.postGraduate
    const employer1Name = req.body.employer1Name
    const employer1Address = req.body.employer1Address
    const employer1Phone = req.body.employer1Phone
    const employment1Start = req.body.employment1Start
    const employment1End = req.body.employment1End
    const employer1Position = req.body.employer1Position
    const employer1Leaving = req.body.employer1Leaving
    const FMCRsRadio1 = req.body.FMCRsRadio1
    const CFRPart40_1 = req.body.CFRPart40_1
    const employer2Name = req.body.employer2Name
    const employer2Address = req.body.employer2Address
    const employer2Phone = req.body.employer2Phone
    const employment2Start = req.body.employment2Start
    const employment2End = req.body.employment2End
    const employer2Position = req.body.employer2Position
    const employer2Leaving = req.body.employer2Leaving
    const FMCRsRadio2 = req.body.FMCRsRadio2
    const CFRPart40_2 = req.body.CFRPart40_2
    const employer3Name = req.body.employer3Name
    const employer3Address = req.body.employer3Address
    const employer3Phone = req.body.employer3Phone
    const employment3Start = req.body.employment3Start
    const employment3End = req.body.employment3End
    const employer3Position = req.body.employer3Position
    const employer3Leaving = req.body.employer3Leaving
    const FMCRsRadio3 = req.body.FMCRsRadio3
    const CFRPart40_3 = req.body.CFRPart40_3
    const employer4Name = req.body.employer4Name
    const employer4Address = req.body.employer4Address
    const employer4Phone = req.body.employer4Phone
    const employment4Start = req.body.employment4Start
    const employment4End = req.body.employment4End
    const employer4Position = req.body.employer4Position
    const employer4Leaving = req.body.employer4Leaving
    const FMCRsRadio4 = req.body.FMCRsRadio4
    const CFRPart40_4 = req.body.CFRPart40_4
    const employer5Name = req.body.employer5Name
    const employer5Address = req.body.employer5Address
    const employer5Phone = req.body.employer5Phone
    const employment5Start = req.body.employment5Start
    const employment5End = req.body.employment5End
    const employer5Position = req.body.employer5Position
    const employer5Leaving = req.body.employer5Leaving
    const FMCRsRadio5 = req.body.FMCRsRadio5
    const CFRPart40_5 = req.body.CFRPart40_5
    const straightTruckFrom = req.body.straightTruckFrom
    const straightTruckTo = req.body.straightTruckTo
    const straightTruckMilesDriven = req.body.straightTruckMilesDriven
    const TractorTruckFrom = req.body.TractorTruckFrom
    const TractorTruckTo = req.body.TractorTruckTo
    const TractorTruckMilesDriven = req.body.TractorTruckMilesDriven
    const TractorTwoTrailersFrom = req.body.TractorTwoTrailersFrom
    const TractorTwoTrailersTo = req.body.TractorTwoTrailersTo
    const TractorTwoTrailersMilesDriven = req.body.TractorTwoTrailersMilesDriven
    const TractorThreeTrailersFrom = req.body.TractorThreeTrailersFrom
    const TractorThreeTrailersTo = req.body.TractorThreeTrailersTo
    const TractorThreeTrailersMilesDriven = req.body.TractorThreeTrailersMilesDriven
    const OtherFrom = req.body.OtherFrom
    const OtherTo = req.body.OtherTo
    const OtherDriven = req.body.OtherDriven
    const statesOperated = req.body.statesOperated
    const trainingCompleted = req.body.trainingCompleted
    const safeDrivingAwards = req.body.safeDrivingAwards
    const anyAccidents = req.body.anyAccidents
    const accidentDate1 = req.body.accidentDate1
    const natureOfAccident1 = req.body.natureOfAccident1
    const accidentLocation1 = req.body.accidentLocation1
    const numberFatalities1 = req.body.numberFatalities1
    const numberInjured1 = req.body.numberInjured1
    const accidentDate2 = req.body.accidentDate2
    const natureOfAccident2 = req.body.natureOfAccident2
    const accidentLocation2 = req.body.accidentLocation2
    const numberFatalities2 = req.body.numberFatalities2
    const numberInjured2 = req.body.numberInjured2
    const accidentDate3 = req.body.accidentDate3
    const natureOfAccident3 = req.body.natureOfAccident3
    const accidentLocation3 = req.body.accidentLocation3
    const numberFatalities3 = req.body.numberFatalities3
    const numberInjured3 = req.body.numberInjured3
    const anyConvictions = req.body.anyConvictions
    const convictionDate1 = req.body.convictionDate1
    const convictionLocation1 = req.body.convictionLocation1
    const convictionCharge1 = req.body.convictionCharge1
    const convictionPenalty1 = req.body.convictionPenalty1
    const convictionDate2 = req.body.convictionDate2
    const convictionLocation2 = req.body.convictionLocation2
    const convictionCharge2 = req.body.convictionCharge2
    const convictionPenalty2 = req.body.convictionPenalty2
    const convictionDate3 = req.body.convictionDate3
    const convictionLocation3 = req.body.convictionLocation3
    const convictionCharge3 = req.body.convictionCharge3
    const convictionPenalty3 = req.body.convictionPenalty3
    const licenseState1 = req.body.licenseState1.label
    const driversLicenseNumber1 = req.body.driversLicenseNumber1
    const driversLicenseType1 = req.body.driversLicenseType1
    const driversLicenseEndorsements1 = req.body.driversLicenseEndorsements1
    const driversLicenseExpiration1 = req.body.driversLicenseExpiration1
    const licenseState2 = req.body.licenseState2.label
    const driversLicenseNumber2 = req.body.driversLicenseNumber2
    const driversLicenseType2 = req.body.driversLicenseType2
    const driversLicenseEndorsements2 = req.body.driversLicenseEndorsements2
    const driversLicenseExpiration2 = req.body.driversLicenseExpiration2
    const licenseState3 = req.body.licenseState3.label
    const driversLicenseNumber3 = req.body.driversLicenseNumber3
    const driversLicenseType3 = req.body.driversLicenseType3
    const driversLicenseEndorsements3 = req.body.driversLicenseEndorsements3
    const driversLicenseExpiration3 = req.body.driversLicenseExpiration3
    const deniedLicenseRadio = req.body.deniedLicenseRadio
    const suspendedLicenseRadio = req.body.suspendedLicenseRadio
    const performJobRadio = req.body.performJobRadio
    const felonyRadio = req.body.felonyRadio
    const driversLicenseReasons = req.body.driversLicenseReasons
    const referenceName1 = req.body.referenceName1
    const referenceAddress1 = req.body.referenceAddress1
    const referencePhone1 = req.body.referencePhone1
    const referenceName2 = req.body.referenceName2
    const referenceAddress2 = req.body.referenceAddress2
    const referencePhone2 = req.body.referencePhone2
    const referenceName3 = req.body.referenceName3
    const referenceAddress3 = req.body.referenceAddress3
    const referencePhone3 = req.body.referencePhone3
    const signature = req.body.signature
    const additionalInfo = req.body.additionalInfo
    // const selectedOptionOperated = req.body.selectedOptionOperated
    // const selectedOptionLicenseState1 = req.body.selectedOptionLicenseState1
    // const selectedOptionLicenseState2 = req.body.selectedOptionLicenseState2
    // const selectedOptionLicenseState3 = req.body.selectedOptionLicenseState3
    const content = `
        Application submitted on: ${applicationDate} \n
        Applying to be: ${optradio} \n
        Name: ${FullName} \n 
        Age: ${Age} \n
        Phone: ${PhoneNumber} \n 
        Emergency Phone: ${emergencyPhone} \n
        Physical Exam Expiration Date: ${physicalExamExpDate} \n
        \nLives at ${address1} \n
        From: ${addressFromDate1} \n
        To: ${addressToDate1} \n
        \n Other places of residence: \n
        Address 2: ${address2} \n
        From: ${addressFromDate2} \n
        To: ${addressToDate2} \n
        Address 3: ${address3} \n
        From: ${addressFromDate3} \n
        To: ${addressToDate3} \n
        address 4: ${address4} \n
        From: ${addressFromDate4} \n
        To: ${addressToDate4} \n
        \nWere they employed here before? ${employedBeforeRadio} \n
        From: ${employedHereBeforeFrom} \n
        To: ${employedHereBeforeTo} \n
        They left because: ${reasonForLeaving} \n
        \nSchooling Completed: \n
        Grade school grade completed: ${gradeSchool} \n
        College completed: ${College} \n
        Post Grad completed: ${postGraduate} \n
        \nEmployment History: \n
        Employer Name: ${employer1Name} \n
        From: ${employment1Start} \n
        To: ${employment1End} \n
        Located at: ${employer1Address} \n
        Phone: ${employer1Phone} \n
        Position: ${employer1Position} \n
        Reason for Leaving: ${employer1Leaving} \n
        Were they subject to the FMCRs* while employed here: ${FMCRsRadio1}\n
        Was their job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40: ${CFRPart40_1}\n
        \n***If values are blank, they were not filled out by applicant***\n
        \nEmployer Name ${employer2Name} \n
        From: ${employment2Start} \n
        To: ${employment2End} \n
        Located at: ${employer2Address} \n
        Phone: ${employer2Phone} \n
        Position: ${employer2Position} \n
        Reason for Leaving: ${employer2Leaving} \n
        Were they subject to the FMCRs* while employed here: ${FMCRsRadio2}\n
        Was their job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40: ${CFRPart40_2}\n
        \n***If values are blank, they were not filled out by applicant***\n
        \nEmployer Name ${employer3Name} 
        \nFrom: ${employment3Start} \n
        To: ${employment3End} \n
        Located at: ${employer3Address} \n
        Phone: ${employer3Phone} \n
        Position: ${employer3Position} \n
        Reason for Leaving: ${employer3Leaving} \n
        Were they subject to the FMCRs* while employed here: ${FMCRsRadio3}\n
        Was their job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40: ${CFRPart40_3}\n
        \n***If values are blank, they were not filled out by applicant***\n
        \nEmployer Name ${employer4Name} \n
        From: ${employment4Start} \n
        To: ${employment4End} \n
        Located at: ${employer4Address} \n
        Phone: ${employer4Phone} \n
        Position: ${employer4Position} \n
        Reason for Leaving: ${employer4Leaving} \n
        Were they subject to the FMCRs* while employed here: ${FMCRsRadio4}\n
        Was their job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40: ${CFRPart40_4}\n
        \n***If values are blank, they were not filled out by applicant***\n
        \nEmployer Name ${employer5Name} \n
        From: ${employment5Start} \n
        To: ${employment5End} \n
        Located at: ${employer5Address} \n
        Phone: ${employer5Phone} \n
        Position: ${employer5Position} \n
        Reason for Leaving: ${employer5Leaving} \n
        Were they subject to the FMCRs* while employed here: ${FMCRsRadio5}\n
        Was their job designated as a safety-sensitive function in any DOT-Regulated mode subject to the drug and alcohol requirements of 49 CFR Part 40: ${CFRPart40_5}\n
        \nDriving Experience:\n
        \nStraight Truck:\n
        Drove ${straightTruckMilesDriven} miles \n
        From: ${straightTruckFrom} \n
        To: ${straightTruckTo}\n
        \nTractor Truck:\n
        Drove ${TractorTruckMilesDriven} miles \n
        From: ${TractorTruckFrom} \n
        To: ${TractorTruckTo}\n
        \nTractor Two Trailers:\n
        Drove ${TractorTwoTrailersMilesDriven} miles \n
        From: ${TractorTwoTrailersFrom} \n
        To: ${TractorTwoTrailersTo}\n
        \nTractor Three Trailers:\n
        Drove ${TractorThreeTrailersMilesDriven} miles \n
        From: ${TractorThreeTrailersFrom} \n
        To: ${TractorThreeTrailersTo}\n
        \nOther:\n
        Drove ${OtherDriven} miles \n
        From: ${OtherFrom} \n
        To: ${OtherTo}\n
        \nStates Operated In: ${statesOperated}\n
        Courses and Training Completed: ${trainingCompleted}\n
        Awards won: ${safeDrivingAwards}\n
        \nAccidents:\n
        Has the applicant been in any accidents in the past three years: ${anyAccidents}\n
        \n***If the values are blank, the applicant did not fill them out or they haven't been in any accidents***\n
        \nAccident 1 \n
        Accident on: ${accidentDate1}\n
        Nature of Accident: ${natureOfAccident1}\n
        Location of Accident: ${accidentLocation1}\n
        Injuries: ${numberInjured1} \n
        Fatalities: ${numberFatalities1}\n
        \nAccident 2 \n
        Accident on: ${accidentDate2}\n
        Nature of Accident: ${natureOfAccident2}\n
        Location of Accident: ${accidentLocation2}\n
        Injuries: ${numberInjured2} \n
        Fatalities: ${numberFatalities2}\n
        \nAccident 3 \n
        Accident on: ${accidentDate3}\n
        Nature of Accident: ${natureOfAccident3}\n
        Location of Accident: ${accidentLocation3}\n
        Injuries: ${numberInjured3} \n
        Fatalities: ${numberFatalities3}\n
        \nConvictions\n
        Has the applicant been convicted of any crimes: ${anyConvictions} \n
        \n***If the values are blank, the applicant did not fill them out or they haven't been convicted of any crimes***\n
        \nConviction 1 \n
        Date of Conviction: ${convictionDate1}\n
        Location of Conviction: ${convictionLocation1}\n
        Charge: ${convictionCharge1} \n
        Penalty: ${convictionPenalty1}\n
        \nConviction 2 \n
        Date of Conviction: ${convictionDate2}\n
        Location of Conviction: ${convictionLocation2}\n
        Charge: ${convictionCharge2} \n
        Penalty: ${convictionPenalty2}\n
        \nConviction 3 \n
        Date of Conviction: ${convictionDate3}\n
        Location of Conviction: ${convictionLocation3}\n
        Charge: ${convictionCharge3} \n
        Penalty: ${convictionPenalty3}\n
        \nLicense Information\n
        \nLicensed 1 \n
        State: ${licenseState1} \n
        License Number: ${driversLicenseNumber1}\n
        License Type: ${driversLicenseType1} \n
        Endorsements: ${driversLicenseEndorsements1}\n
        Expiration: ${driversLicenseExpiration1}\n
        \nLicensed 2 \n
        State: ${licenseState2} \n
        License Number: ${driversLicenseNumber2}\n
        License Type: ${driversLicenseType2} \n
        Endorsements: ${driversLicenseEndorsements2}\n
        Expiration: ${driversLicenseExpiration2}\n
        \nLicensed 3 \n
        State: ${licenseState3} \n
        License Number: ${driversLicenseNumber3}\n
        License Type: ${driversLicenseType3} \n
        Endorsements: ${driversLicenseEndorsements3}\n
        Expiration: ${driversLicenseExpiration3}\n
        \nHas the applicant ever been denied a license: ${deniedLicenseRadio}\n
        Has the applicant ever had their license suspended: ${suspendedLicenseRadio}\n
        Is there any reason the applicant might be unable to perform the functions of the job for which they have applied: ${performJobRadio}\n
        Has the applicant been convicted of a felony: ${felonyRadio}\n
        If any of the above were answered YES, here is the explanation: ${driversLicenseReasons}\n
        \nReferences:\n
        \nReference 1 \n
        Name: ${referenceName1}\n
        Address: ${referenceAddress1}\n
        Phone: ${referencePhone1}\n
        \nReference 2 \n
        Name: ${referenceName2}\n
        Address: ${referenceAddress2}\n
        Phone: ${referencePhone2}\n
        \nReference 3 \n
        Name: ${referenceName3}\n
        Address: ${referenceAddress3}\n
        Phone: ${referencePhone3}\n
        \nElectronic Signature:\n
        ${signature}\n
        \nAdditional Info:\n
        ${additionalInfo}
        `

let mail;

if (process.env.NODE_ENV === "production") {
  console.log('production')
  mail = {
    from: FullName,
    to: process.env.CREDS_OUTGOING,
    subject: 'New Application filled out from your website',
    text: content
  }
} else {
  console.log('development')
  let creds = require('../../config/config');
  mail = {
    from: FullName,
    to: creds.OUTGOING,
    subject: 'New Application filled out from your website',
    text: content
  }
}

  transport.sendMail(mail, (err, data) => {
    // console.log('this is the mail', mail)
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
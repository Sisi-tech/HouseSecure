const ApplicantInfo = require("../model/applicantInfo");
const User = require("../model/user");
const mongoose = require("mongoose");

const createApplicantInfo = async (req, res) => {
    try {
        const { userId } = req.body;
        const applicantInfo = req.body;
        // const {
        //     selectedDate,
        //     entityType,
        //     firstName,
        //     lastName,
        //     partnership,
        //     jointVenture,
        //     llc,
        //     corporation,
        //     trust,
        // } = applicantInfo.responses;

        // console.log("userId:", userId);
        // console.log("applicantInfo:", applicantInfo);
        // console.log("selectedDate:", selectedDate);

        // const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        // if (!dateRegex.test(selectedDate)) {
        //     return res.status(400).json({ message: "Invalid date format for selectedDate." });
        // }
        // const parsedDate = new Date(selectedDate);

        // if (isNaN(parsedDate.getTime())) {
        //     return res.status(400).json({ message: "Invalid date value for selectedDate." });
        // }

        // parsedDate.setHours(0, 0, 0, 0);
        // const today = new Date();
        // today.setHours(0, 0, 0, 0); // Reset time portion

        // if (parsedDate < today) {
        //     return res.status(400).json({ message: "selectedDate must be today or a future date." });
        // }

        // if (!mongoose.isValidObjectId(userId)) {
        //     return res.status(400).json({ message: "Invalid userId" });
        // }

        // const user = await User.findById(userId);
        // if (!user) {
        //     return res.status(404).json({ message: "User not found" });
        // }
        
        // // Include individual data if entityType is 'individual'
        // if (entityType === "individual") {
        //     if (!firstName || !lastName) {
        //         return res.status(400).json({ message: "First name and last name are required for individuals." });
        //     }
        //     individual = { firstName, lastName };
        // } else {
        //     // Handle other entity types
        //     switch (entityType) {
        //         case "Partnership":
        //             if (!partnership) {
        //                 return res.status(400).json({ message: "Partnership name is required." });
        //             }
        //             partnership = partnership;
        //             console.log("applicantInfo.partnership", applicantInfoData.partnership);
        //             break;
        //         case "Joint Venture":
        //             if (!jointVenture) {
        //                 return res.status(400).json({ message: "Joint venture name is required." });
        //             }
        //             jointVenture = jointVenture;
        //             break;
        //         case "Limited Liability Corporation":
        //             if (!llc) {
        //                 return res.status(400).json({ message: "LLC name is required." });
        //             }
        //             llc = llc;
        //             break;
        //         case "corporation":
        //             if (!corporation) {
        //                 return res.status(400).json({ message: "Corporation name is required." });
        //             }
        //            corporation = corporation;
        //             break;
        //         case "trust":
        //             if (!trust) {
        //                 return res.status(400).json({ message: "Trust name is required." });
        //             }
        //            trust = trust;
        //             break;
        //         default:
        //             return res.status(400).json({ message: "Invalid entity type." });
        //     }
        // }

        const updatedApplicantInfo = await ApplicantInfo.findOneAndUpdate(
            { userId },
            { ...applicantInfo },
            { new: true, upsert: true, runValidators: true }
        );
        res.status(200).json({ applicantInfoId: updatedApplicantInfo._id, data: updatedApplicantInfo });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

// const createApplicantInfo = async (req, res) => {
//     try {
//         const {
//             selectedDate,
//             entityType,
//             policyForm,
//             occupancyType,
//             lossHistory,
//             firstName,
//             lastName,
//             partnership,
//             jointVenture,
//             llc,
//             corporation,
//             trust,
//             userId,
//         } = req.body;
       
//         console.log("Received payload:", req.body);
//         console.log("date:", selectedDate);

//         const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
//         if (!dateRegex.test(selectedDate)) {
//             return res.status(400).json({ message: "Invalid date format for selectedDate." });
//         }
//         const parsedDate = new Date(selectedDate);

//         if (isNaN(parsedDate.getTime())) {
//             return res.status(400).json({ message: "Invalid date value for selectedDate." });
//         }

//         parsedDate.setHours(0, 0, 0, 0);
//         const today = new Date();
//         today.setHours(0, 0, 0, 0); // Reset time portion

//         if (parsedDate < today) {
//             return res.status(400).json({ message: "selectedDate must be today or a future date." });
//         }

//         if (!mongoose.isValidObjectId(userId)) {
//             return res.status(400).json({ message: "Invalid userId" });
//         }

//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         const applicantInfoData = {
//             selectedDate,
//             entityType,
//             policyForm,
//             occupancyType,
//             lossHistory,
//             userId: user._id,
//         };
//         console.log("applicationData", applicantInfoData);
//         // Include individual data if entityType is 'individual'
//         if (entityType === "individual") {
//             if (!firstName || !lastName) {
//                 return res.status(400).json({ message: "First name and last name are required for individuals." });
//             }
//             applicantInfoData.individual = { firstName, lastName };
//         } else {
//             // Handle other entity types
//             switch (entityType) {
//                 case "Partnership":
//                     if (!partnership) {
//                         return res.status(400).json({ message: "Partnership name is required." });
//                     }
//                     applicantInfoData.partnership = partnership;
//                     console.log("applicantInfo.partnership", applicantInfoData.partnership);
//                     break;
//                 case "Joint Venture":
//                     if (!jointVenture) {
//                         return res.status(400).json({ message: "Joint venture name is required." });
//                     }
//                     applicantInfoData.jointVenture = jointVenture;
//                     break;
//                 case "Limited Liability Corporation":
//                     if (!llc) {
//                         return res.status(400).json({ message: "LLC name is required." });
//                     }
//                     applicantInfoData.llc = llc;
//                     break;
//                 case "corporation":
//                     if (!corporation) {
//                         return res.status(400).json({ message: "Corporation name is required." });
//                     }
//                     applicantInfoData.corporation = corporation;
//                     break;
//                 case "trust":
//                     if (!trust) {
//                         return res.status(400).json({ message: "Trust name is required." });
//                     }
//                     applicantInfoData.trust = trust;
//                     break;
//                 default:
//                     return res.status(400).json({ message: "Invalid entity type." });
//             }
//         }

//         const applicantInfo = new ApplicantInfo(applicantInfoData);
//         await applicantInfo.save();
//         res.status(200).json({ applicantId: applicantInfo._id, data: applicantInfoData });
//         console.log("Saved applicant info with Id:", applicantInfo._id);
//     } catch (err) {
//         res.status(400).json({ message: "Error saving applicantInfo", error: err.message });
//     }
// };



const getApplicantInfo = async (req, res) => {
    try {
        const userId = req.params.user;
        const applicantInfo = await ApplicantInfo.findOne({ user: userId });
        console.log("req.params.user for get applicant info:", userId);
        if (!userId) {
            return res.status(404).json({ message: "ApplicantInfo not found" });
        }
        res.status(200).json(applicantInfo);
    } catch (err) {
        res.status(400).json({ message: "Error fetching applicantInfo", error: err.message });
    }
};

const updateApplicantInfo = async (req, res) => {
    try {
        const applicantInfo = await ApplicantInfo.findById(req.params.id);
        if (!applicantInfo) {
            return res.status(404).json({ message: "ApplicantInfo not found" });
        }

        // Update only defined fields to avoid setting undefined values
        Object.keys(req.body).forEach(key => {
            if (req.body[key] !== undefined) {
                applicantInfo[key] = req.body[key];
            }
        });

        await applicantInfo.save();
        res.status(200).json(applicantInfo);
    } catch (err) {
        res.status(400).json({ message: "Error updating applicantInfo", error: err.message });
    }
};

module.exports = { createApplicantInfo, getApplicantInfo, updateApplicantInfo };

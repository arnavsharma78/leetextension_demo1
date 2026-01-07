const LeetcodeSubmission = require("./../models/leetcode_submission");
exports.handleLeetcodesubmission = async (data) => {
  try {
    const leetcodesubmission = await LeetcodeSubmission.create(data);
  } catch (err) {
    console.log(err);
  }
};

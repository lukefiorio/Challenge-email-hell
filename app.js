let emailLog = require("./emails.json");

const emailAddressCounts = emailLog.emails.reduce(function (prevVal, curVal) {
  if (prevVal.hasOwnProperty(curVal.email)) {
    prevVal[curVal.email] += 1;
  }
  if (!prevVal.hasOwnProperty(curVal.email)) {
    prevVal[curVal.email] = 1;
  }
  return prevVal;
}, {});

module.exports = {
  emailAddressCounts: emailAddressCounts
};
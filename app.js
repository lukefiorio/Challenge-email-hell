'use strict';

let emailLogData = function () {
  let emailLog = require('./emails.json');

  const emailAddressCounts = emailLog.emails.reduce(function (prevVal, curVal) {
    if (prevVal.hasOwnProperty(curVal.email)) {
      prevVal[curVal.email] += 1;
    } else if (!prevVal.hasOwnProperty(curVal.email)) {
      prevVal[curVal.email] = 1;
    }
    return prevVal;
  }, {});

  return {
    emailAddressCounts: emailAddressCounts
  }
}

const emailModule = emailLogData();
console.log(emailModule.emailAddressCounts);
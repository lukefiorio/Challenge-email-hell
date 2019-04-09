
let emailLogData = function () {

  let emailLog = require("./emails.json");

  function makeEmailCountObj() {
    const emailAddressCounts = emailLog.emails.reduce(function (prevVal, curVal) {
      if (prevVal.hasOwnProperty(curVal.email)) {
        prevVal[curVal.email] += 1;
      }
      if (!prevVal.hasOwnProperty(curVal.email)) {
        prevVal[curVal.email] = 1;
      }
      return prevVal;
    }, {});
    return emailAddressCounts;
  }

  return {
    makeEmailCountObj: makeEmailCountObj
  }
}

const emailModule = emailLogData();
console.log(emailModule.makeEmailCountObj());
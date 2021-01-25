const moment = require("moment");

var dob = "2014-12-24";
var dif = moment(dob,"YYYY-MM-DD").fromNow();
console.log(dif);
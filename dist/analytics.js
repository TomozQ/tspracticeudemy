"use strict";
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
    logged = 'max';
    console.log(logged);
}
sendAnalytics('the data');

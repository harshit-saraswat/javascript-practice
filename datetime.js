// Initialize as current date object
var d = new Date();

// Initialize as custom date object
var d = new Date(2018, 11, 24, 10, 33, 30, 0); // Arguments- Date(year, month, day, hours, minutes, seconds, milliseconds)

// Initializing date object with date string
var d = new Date("October 13, 2014 11:13:00");

// By default date format:-Sun Nov 01 2020 23:21:21 GMT+0530 (India Standard Time)

// Date to UTC Date
utcDate=d.toUTCString();

// Date to Date String
ds=d.toDateString();

// Date String - ISO Format
isoDate=d.toISOString();

// Parse Date String to milliseconds
var msec = Date.parse("March 21, 2012");

// Get time from date
var d=new Date();
var time=d.getTime();

// Get Full Year
var year=d.getFullYear();

// Get Month
var month=d.getMonth();

// Get Date
var date=d.getDate();

// Get Hours
var hours=d.getHours();

// Get Minutes
var mins=d.getMinutes();

// Get Seconds
var secs=d.getSeconds();

// Get Milliseconds
var msecs=d.getMilliseconds();

// Get Day
var day=d.getDay();



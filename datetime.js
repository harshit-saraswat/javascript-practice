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
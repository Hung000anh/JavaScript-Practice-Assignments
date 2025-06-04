const date = new Date();
const date1 = new Date(2024, 0, 1, 2, 3, 4, 5);
const date2 = new Date("2024-01-01T02:03:04.005Z");
const date3 = new Date(0);
const date4 = new Date(170000000000);

console.log("Current Date:", date.toString());
console.log("Date 1:", date1.toString());
console.log("Date 2:", date2.toString());
console.log("Date 3:", date3.toString());
console.log("Date 4:", date4.toString());

console.log("Year:", date.getFullYear());
console.log("Month:", date.getMonth() + 1);
console.log("Day:", date.getDate());
console.log("Hours:", date.getHours());
console.log("Minutes:", date.getMinutes());
console.log("Seconds:", date.getSeconds());
console.log("Milliseconds:", date.getMilliseconds());
console.log("Day of Week:", date.getDay());

const date5 = new Date();
date5.setFullYear(2024);
date5.setMonth(0);
date5.setDate(1);
date5.setHours(2);
date5.setMinutes(3);
date5.setSeconds(4);
date5.setMilliseconds(5);
console.log("Updated Date 5:", date5.toString());

const date6 = new Date("2023-12-31");
const date7 = new Date("2024-01-01");
if (date6 < date7) {
    console.log("Date 6 is earlier than Date 7");
}

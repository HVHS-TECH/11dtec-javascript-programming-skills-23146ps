/*
 t10_activate_via_button.js,
 javascript activation via button,
 pasha,
 april 2025
*/
console.log("Running t10_activate_via_button.js");

//Variables
function getUserName() {
    userName = prompt("please input username:");
}
function getUserAge() {
    userAge = prompt("Hi "+userName+" please input age:");
}
function getUserMoney() {
    userMoney = prompt("Hi "+userName+ " who is "+userAge+" please input your yearly salary (in $)")
}
/*
Main code
*/
function start() {
    getUserName();
    getUserAge();
    getUserMoney();
    alert("thanks for the info, I virused you");
}
/*
Functions
*/
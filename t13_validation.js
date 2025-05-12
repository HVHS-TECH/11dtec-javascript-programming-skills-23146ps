/*
 t13_validation.js,
 javascript validation,
 pasha,
 may 2025
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
    userMoney = prompt("Hi "+userName+ " who is "+userAge+" years old. please input how much money you are willing to spend ($1-$5)")
}
/*
Main code
*/
function start() {
    getUserName();
    if (!isNaN(userName)|| userName == null || userName == "" || userName == " "){
        userName = prompt("Invalid, name must not be empty or a number!")
    }
    getUserAge();
    if (isNaN(userAge)|| userAge == null || userAge == "" || userAge == " " ||){
        userAge = prompt()
    }
    getUserMoney();
    alert("thanks for the info, I virused you");
}
/*
Functions
*/
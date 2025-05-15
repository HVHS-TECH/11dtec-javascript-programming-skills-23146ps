/*
 t14_constants.js,
 javascript constants,
 pasha,
 may 2025
*/
console.log("Running t14_constants.js");

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
const MIN_USER_AGE = 0
const MAX_USER_AGE = 130
const MIN_USER_MONEY = 1
const MAX_USER_MONEY = 5
function start() {
    getUserName();
    if (!isNaN(userName)|| userName == null || userName == "" || userName == " "){
        userName = prompt("Invalid, name must not be empty or a number!")
    } 
    getUserAge();
    if (isNaN(userAge)|| userAge == null || userAge == "" || userAge == " " || userAge < MIN_USER_AGE || userAge > MAX_USER_AGE){
        userAge = prompt("Invalid, age can not be under 0 or over 130")
    }
    getUserMoney();
    if (isNaN(userMoney)|| userMoney == null || userMoney == "" || userMoney == " " || userMoney < MIN_USER_MONEY || userMoney > MAX_USER_MONEY){
        userMoney = prompt("Invalid, can't you read the godamned prompt!? :3")
    }
    alert("thanks for the info, I virused you");
}
/*
Functions
*/
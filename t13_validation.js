/*
 t13_validation.js,
 javascript validation,
 pasha,
 may 2025
*/
console.log("Running t13_validation.js");

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
    if (isNaN(userAge)|| userAge == null || userAge == "" || userAge == " " || userAge < 0 || userAge > 130){
        userAge = prompt("Invalid, age can not be under 0 or over 130")
    }
    getUserMoney();
    if (isNaN(userMoney)|| userMoney == null || userMoney == "" || userMoney == " " || userMoney < 0 || userMoney > 5){
        userMoney = prompt("Invalid, can't you read the godamned prompt!? :3")
    }
    alert("thanks for the info, I virused you");
}
/*
Functions
*/
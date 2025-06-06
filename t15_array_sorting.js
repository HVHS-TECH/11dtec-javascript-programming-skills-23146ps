/*
 t15_array_sorting.js,
 javascript array sorting,
 pasha,
 may 2025
*/

//Variables

let classArray = ["weeds", "mexican coke", "fenta", "sprite", "3g methamphetamine"];

let prices = ["1.50","2.00","3.00","4.50","6.10"];

let message = "These items are for sale:"

for (i = 0; i < classArray.length; i++){
    message = message + "\nfor $"+ prices[i] + " is "+classArray[i];
}

function getUserName() {
    userName = prompt("please input username:");
}

function getUserMoney() {
    userMoney = prompt("Hi, "+userName+" what would you like to purchase from this list? " + message);
}

/*
Main code
*/
function start() {
    getUserName();
    if (!isNaN(userName)|| userName == null || userName == "" || userName == " "){
        userName = prompt("Invalid, name must not be empty or a number!")
    } 
    getUserMoney();
    if (!isNaN(userMoney)|| userMoney != "weeds" || userMoney != "mexican coke" || userMoney != "fenta" || userMoney != "sprite" || userMoney != "3g methamphetamine" || userMoney == null || userMoney == "" || userMoney == " "){
            userMoney = prompt("Invalid, ")
    }
    alert("thanks for the purchase");
}
/*
Functions
*/

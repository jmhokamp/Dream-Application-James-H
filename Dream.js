
//Date Night Coach

/* Values, Data Types, and Operations
-The start of the app I would prompt the user with questions to know what the last date was 
what the partner name is, what the user name is and # of days since last date. I used 
implicit conversion to convert the string to a number....I know I should use .int in the readline
but wanted to show skills outside of a readline. 
*/
const readlineSync = require('readline-sync'); //Call readline so I can recieve user input

let userName = readlineSync.question("What is your name? ");
let currentDate = new Date(); //Storing todays date into current date
let lastDate = readlineSync.question("Number of days since last date? "); //Use readline sync
let partnerName = readlineSync.question("What is your partners name? "); 
let numberDates = Number(lastDate); //type conversion of string to interger

console.log(userName);
console.log(currentDate);
console.log(lastDate);
console.log(partnerName);

/* Stringing Characters Together
After the inital questions, I print what I would expect to see as an end user.
I use escape squence newlince character \n to start a new line.
Additionally, I used template literals to have a clean print line with the help of backticks. 
This can be done cleaner with combining them both with just backticks but showing skill usage and understanding.
*/
console.log(`Welcome, ${userName}. \n Todays date is: ${currentDate} \n You haven't been on a date with ${partnerName} in ${lastDate} days! `.trim());


/* Control Structure and Logic
For this example I want to control the user input with a response. I use relational and
logical operators to determine what the outcome should be. If a date night is already planned and its
been less than 7 days since the last date night we wish them a great night! I could suggest date nights
but I will save that for arrays! I used different operators to show my understanding of operators
*/
let plannedNight = readlineSync.question("Do you currently have a date night planned? (Yes or No) ");
console.log(plannedNight);


if (plannedNight === "Yes" && lastDate > 7){
    console.log("It's about time! Go have a great night and enjoy every second!")
}
else if (plannedNight != "No" && lastDate <= 7){
    console.log("Might be a good night to relax at home and give it a few more days!")
}
else if (plannedNight === "No" && lastDate <= 7){
    console.log("You've come to the right place, stay tuned we got you covered! ")
}
else if (plannedNight === "No" && lastDate > 7 ) {
    console.log(`We need to get to work ${lastDate} days is too long!`)
}
else console.log("You entered a incorrect response, you're wasting time!")

/* Working with Loops
Used a for loop to iterate over my array to print each line in my array. Initialzied with i,
set my condition to stop once it equals the length of the array, and used i decrement to increase
after each loop. Could use for in loop if I wanted to access each property.
*/
let dateScenario = [
    {Category: "Adventure", Activity: "Outdoor Trail"},
    {Category: "Romantic", Activity: "Picnic"}
]
for (let i = 0;  i < dateScenario.length; i++){
    console.log(`Date Idea that is ${dateScenario[i].Category} - Activity: ${dateScenario[i].Activity} `)
}

/* Buliding Arrays
Created an empty array for the user to store a previous date night so they know what they have 
already done. I am having the user store this into a mixed-type array essitinally building their
own data set. Using .push to push the users input into the array. I could use an if statement
to include additional inputs from the user. 
*/
let dateCompleted = [];

let catResponse = readlineSync.question("What was the Category of your date? ");
let actResponse = readlineSync.question("What activity did you do? ")

dateCompleted.push({Catergory: catResponse, Activity: actResponse});
console.log(dateCompleted);

/* Using Arrays
I am having the user search an array to see if it is found in the date scenario. I am doing so by using 
.find. I return the category and activity when it finds the match. 


*/ 

let checkAct = readlineSync.question("What activity do you want to search? ");
let foundAct = dateScenario.find(scenario => scenario.Activity === "Picnic");

if (foundAct){
    console.log("This scenario is included in the list:", foundAct)
} else {
    console.log("This scenario is not in the list, you should add it!");
}


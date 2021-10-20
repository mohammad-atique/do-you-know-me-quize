var readlineSync = require("readline-sync");
const chalk = require("chalk");
var score = 0;

var userName = readlineSync.question("What's your Name? ");
console.log("Welcome " + chalk.bold.blue(userName) + " to" + chalk.yellowBright( " DO YOU KNOW ME?"));

// function
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("You are right!"));
    score = score+1;
  }else{
    console.log(chalk.red("You are Wrong!"));
    score = score - 1;
  }
  console.log("Current Score = ", score);
  console.log(chalk.magentaBright("------------------"));
}

var questions = 
    [
      {
    question: chalk.cyanBright("1. What is my Name? "),
    answer:"Atique"},{
    question: chalk.cyanBright("2. Where do I live? "),
    answer:"Khamgaon" },{
    question: chalk.cyanBright("3. What is my Qualification? "),
    answer: "Electrical Engineering"},{
    question: chalk.cyanBright("4. What is my favourite Hobby? "),
    answer: "Reading"}
    ];

        // loop


for(var i=0; i<questions.length; i++)
        {
          currentQuestion=questions[i];
          play(currentQuestion.question,currentQuestion.answer);
        }

console.log(chalk.blue.bold.italic("Congratulation You Scored = "), chalk.magenta(score));
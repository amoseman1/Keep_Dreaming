
var myWindow

function openWin() {
    myWindow = window.open("", "myWindow", "width=200,height=100");
    myWindow.document.write("<p>This is 'myWindow'</p>");
}

function closeWin() {
    myWindow.close();
}

{/* add to html <button onclick="openWin()">Open "myWindow"</button>
<button onclick="closeWin()">Close "myWindow"</button>
 */}




const questions = [
    // Questions list in an array
    {
        question: "How many people are in your party?",
        choices: [
            { text: "1" },
            { text: "2" },
            { text: "3" },
            { text: "4" },
            { text: "5+" },
        ]
    },

    {
        question: "What is your budget?",
        choices: [
            { text: "I am Broke. Free Please" },
            { text: "I have a small budget >$300" },
            { text: "I have a slightly bigger budget >$750" },
            { text: "I have a decent budget >$1000" },
            { text: "I have a little more than a decent budget >$3000" },
            { text: "I have a nice budget >$5000" },
            { text: "The skys the limit <$10,000" },
        ]
    },
    {
        question: "Where is your dream destination?",
        choices: [
            { text: "Beach" },
            { text: "Mountains" },
            { text: "City" },
            { text: "Going Abroad" },
            { text: "Staycation" },
            { text: "Kid Friendly" },
        ]
    },

    {
        question: "What type of vacation (activity) are you looking for?",
        choices: [
            { text: "I like to get active and move! (hiking, biking, sky diving, hang gliding, bungee jumping, paragliding, scuba diving, ziplining, etc)" },
            { text: "Volunteering is great. (working at an animal shelter, building houses for the needy, working in a soup kitchen, building water sources for communities in need, etc )" },
            { text: "Let's party! (concerts, sports games, bar crawls, full moon, parties, etc)" },
            { text: "Spiritual awakenings or retreats are what I desire. (pilgrimages, churches, cathedrals, mosques, temples, meditation, shrines, etc)" },
            { text: "I need more culture in my life. (museums, concerts, architecture, cultural events, etc )" },
            { text: "Relax and forget it all. (beaches, spas, resorts, hot springs, etc)" },
            { text: "Lets stay near home. (local activities, etc)" },
        ]
    },
]


//event listeners and api fetchs on front-end
const destContainer = document.querySelector(".dest-container");
const destForm = document.getElementById("dest-form");

const initializeRows = () => {
  destContainer.innerHTML = "";
  const rowsToAdd = [];
  for (let i = 0; i < destination.length; i++) {
    rowsToAdd.push(createNewRow(destination[i]));
  }

  rowsToAdd.forEach((row) => destContainer.prepend(row));
};

const getDests = () => {
  fetch("/api/destinations", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success in getting destinations:", data);
      destinations = data;
      initializeRows();
    });
};

getDests();

function makeQuestions() {
  questionNumber++;
  answer = questions[questionNumber].answer;
  questionHead.textContent = questions[questionNumber].title;
  answerChoices.textContent = "";
  var choices = questions[questionNumber].choices;
  for (var q = 0; q < choices.length; q++) {
    var nextChoice = document.createElement("button");
    nextChoice.textContent = choices[q];
    answerBtn = answerChoices
      .appendChild(nextChoice)
      .setAttribute("class", "p-3 m-1 btn btn-light btn-block");
  }
}


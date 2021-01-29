//makes sure the handlebars loads before js
document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  //questions displayed to user one at a time
  const allQuestions = [
    {
      question: "What is your budget?",
      choices: [
        "<$0",
        ">$300",
        ">$750",
        ">$1000",
        ">$3000",
        ">$5000",
        "<$10000",
      ],
    },
    {
      question: "Where is your dream destination?",
      choices: ["Beach", "Mountains", "City", "Abroad", "Staycation"],
    },
    {
      question: "What type of vacation (activity) are you looking for?",
      choices: [
        "active",
        "adrenaline",
        "volunteering",
        "partying",
        "spiritual",
        "cultural",
      ],
    },
  ];

  var i = 0;
  //empty array for users choices
  const selection = [];

  function init() {
    const theQuestions = document.getElementById("questions");
    const questionText = document.createTextNode(allQuestions[i].question);

    theQuestions.prepend(questionText);

    // this selects the choices of the object array
    const choices = allQuestions[i].choices;

    choices.forEach((button) => {
      const body = document.getElementById("answers");
      const buttonMaker = document.createElement("button");
      buttonMaker.setAttribute("class", "button");
      buttonMaker.textContent = button;
      body.appendChild(buttonMaker);

      //event listener on choice pushes users choice to array
      buttonMaker.addEventListener("click", function (event) {
        const userChoice = event.target.textContent;
        selection.push(userChoice);
        i++;
        //clears the container for the next question and choices
        questionText.textContent = "";
        body.innerHTML = "";
        console.log("------------------selection-------------------");
        console.log(selection);

        // if the user had gone through all the questions, call the callData function to render query
        if (allQuestions[i] === undefined) {
          callData();
        }
        //otherwise go to the next question (our loop attribute for the questions)
        else {
          init();
        }
      });
    });
  }

  //fetches our backend query after questions have ended and we have user input
  function callData() {
    const budget1 = parseInt(selection[0].substring(2, selection[0].length));
    selection[1] = selection[1].toLowerCase();

    let queryUrl = `/api/destinations/${budget1}/${selection[1]}/${selection[2]}`
    fetch(queryUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }) 
      //replaces the url from home page, with the query where data is rendered
      .then((data) => window.location.replace(queryUrl))
      .catch((err) => console.error(err));
  }

  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const newUser = {
      username: document.getElementById("userName").value.trim(),
      email: document.getElementById("email").value.trim(),
      //this is icebox functionality to get the users saved destinations info to show on for that user
      // location: document.getElementById("locationItem").getatrribute("data-item-location"),
      // location: document.getElementById("costItem").getatrribute("data-item-cost"),
      // location: document.getElementById("genreItem").getatrribute("data-item-genre"),
      // location: document.getElementById("typeItem").getatrribute("data-item-type"),
      // location: document.getElementById("kidFriendlyItem").getatrribute("data-item-kidFriendly")
    };

    //post routw to save the user, emai, and returned location info from DB
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    //clears out form after user input is submitted 
    document.getElementById("userName").value = "";
    document.getElementById("email").value = "";
  });

  init();
});

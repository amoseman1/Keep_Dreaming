// what does this refer to?

document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  //event listeners and api fetchs on front-end
  const allQuestions = [
    // {
    //   question: "How many people are in your party?",
    //   choices: ["1", "2", "3", "4", "5+"],
    // },
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

  // starter function (wrapper)- for loop to iterate through objects, and display questions and choices separately (questions.question or questions.choices)
  var i = 0;
  const selection = [];

  function init() {
    const theQuestions = document.getElementById("questions");
    const questionText = document.createTextNode(allQuestions[i].question);

    theQuestions.prepend(questionText);

    // this selects the choices of the object array
    const choices = allQuestions[i].choices;

    choices.forEach((button) => {
      // console.log(button);
      const body = document.getElementById("answers");
      const buttonMaker = document.createElement("button");
      buttonMaker.setAttribute("class", "button");
      buttonMaker.textContent = button;
      body.appendChild(buttonMaker);

      // if (i === 2) {
      //   buttonMaker.setAttribute("href", "/dests");
      // }

      buttonMaker.addEventListener("click", function (event) {
        const userChoice = event.target.textContent;
        selection.push(userChoice);
        i++;

        questionText.textContent = "";
        body.innerHTML = "";
        console.log("------------------selection-------------------");
        console.log(selection);

        if (allQuestions[i] === undefined) {
          callData();
        } else {
          init();
        }
      });
    });
  }

  function callData() {
    const budget1 = selection[0].substring(2, selection[0].length);

    fetch(`/api/destinations/${budget1}/${selection[1]}/${selection[2]}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }

  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const newUser = {
      username: document.getElementById("userName").value.trim(),
      email: document.getElementById("email").value.trim(),
    };

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
  });

  init();
});

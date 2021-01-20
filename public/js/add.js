// what does this refer to?

document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  // var myWindow;

  // function openWin() {
  //   myWindow = window.open("", "myWindow", "width=200,height=100");
  //   myWindow.document.write("<p>This is 'myWindow'</p>");
  // }

  // function closeWin() {
  //   myWindow.close();
  // }

  {
    /* add to html <button onclick="openWin()">Open "myWindow"</button>
<button onclick="closeWin()">Close "myWindow"</button>
 */
  }

  //event listeners and api fetchs on front-end
  const allQuestions = [
    {
      question: "How many people are in your party?",
      choices: ["1", "2", "3", "4", "5+"],
    },
    {
      question: "What is your budget?",
      choices: [
        "$0",
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
    // allQuestions.forEach((question) =>
    // console.log(question);

    const theQuestions = document.getElementById("questions");
    const questionText = document.createTextNode(allQuestions[i].question);
    // console.log("---------------question -----------------");
    // console.log(theQuestions);
    console.log("---------------Text -----------------");
    console.log(questionText);

    theQuestions.appendChild(questionText);
    // translate to handlebars or front end?

    // this selects the choices of the object array
    const choices = allQuestions[i].choices;
    // does this need to be in a loop to pull each choice? or is the big overall loop appropriate?
    choices.forEach((button) => {
      // console.log(button);

      const buttonMaker = document.createElement("button");
      buttonMaker.setAttribute("class", "button");
      buttonMaker.textContent = button;

      buttonMaker.addEventListener("click", function (event) {
        const userChoice = event.target.textContent;
        selection.push(userChoice);
        i++;
        // if (allQuestions[i] === null) {
        //   // callData();
        //   init();
        // }

        questionText.textContent = "";
        buttonMaker.button = "";
        init();
        console.log("------------------selection-------------------");
        console.log(selection);
      });
      // button.innerHTML = choices; // dynamic?

      // console.log("---------------button maker -----------------");
      // console.log(buttonMaker);
      const body = document.getElementById("answers");

      // console.log("---------------body -----------------");
      // console.log(body);
      body.appendChild(buttonMaker);

      // button.addEventListener("click", function () {

      //   selection.push(button.innerHTML);
      // });
    });
  }

  function callData() {}

  init();
  // makebutton function to loop through choices for each choice

  // then append buttons to correct location/id

  // on click event to store that value in an empty Array

  // then with the empty array you can pull data from mysql

  // for (let i = 0; i < questions.length; i++) {

  //     let limit = questions[i].chices
  //     //var = text content of element chosen
  //     //switch (var)
  //     //case (splice the < and $ off of the number string and then parseInt)

  // }

  // const QuestionsIndex = 0
  // const currentQuestion = question[currentQuestionIndex]
  // //our html element to grab - empty h2
  // const questionEl = document.getElementById("questiontitle");
  // questionEl.textContent = currentQuestion.question

  // currentQuestion.choices.forEach(function (choice, i) {
  //     //dynamically create a button element , set content of button
  //     element.textcontent = choice
  //     //set an on click on that element which will equal the
  //     //function to (StartQuizes)

  //     const keys = Object.keys //thid grabs all the title and choices
  //     const item = keys[i];
  //     const preferences = {
  //         genre: $('.genre').val,
  //         location: $('.location').val,
  //         //etc
  //     }
  //     Element.onclick = preferences[item] = this.textcontent

  //     $('submit-btn').on('click', () => {
  //         fetch(`api/destinations/${preferences.genre}/${preferences.location}`)
  //             .then((results) => {
  //                 results.json(results)
  //             }).then('something' => {
  //                 $('.displayGenre').val
  //             })
  //     })

  // });

  // const destContainer = document.querySelector('.dest-container');
  // const destForm = document.getElementById('dest-form');

  // const initializeRows = () => {
  //     destContainer.innerHTML = '';
  //     const rowsToAdd = [];
  //     for (let i = 0; i < destination.length; i++) {
  //         rowsToAdd.push(createNewRow(destination[i]));
  //     }

  //     rowsToAdd.forEach((row) => destContainer.prepend(row));
  // };

  // const getDests = () => {
  //   fetch(
  //     `/api/destinations/${locationvariable}/${activity_genrevariable}/${activity_typevariable}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success in getting destinations:", data);
  //       destinations = data;
  //       initializeRows();
  //     });
  // };

  // getDests();

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
});

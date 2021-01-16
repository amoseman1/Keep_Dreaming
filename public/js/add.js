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

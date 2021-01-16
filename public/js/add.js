//event listeners and api fetchs on front-end
const questions = [
    {
        question: "How many people are in your party?",
        choices: [
            "1",
            "2",
            "3",
            "4",
            "5+",
        ]
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
        ]
    },
    {
        question: "Where is your dream destination?",
        choices: [
            "Beach",
            "Mountains",
            "City",
            "Abroad",
            "Staycation",
        ]
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
        ]
    },

];

// for (let i = 0; i < questions.length; i++) {

//     let limit = questions[i].chices
//     //var = text content of element chosen
//     //switch (var)
//     case (splice the < and $ off of the number string and then parseInt)

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

const getDests = () => {
    fetch(`/api/destinations/${locationvariable}/${activity_genrevariable}/${activity_typevariable}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success in getting destinations:', data);
            destinations = data;
            initializeRows();
        });
};

getDests();
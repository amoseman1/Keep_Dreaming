//event listeners and api fetchs on front-end
const questions = [
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

];

const QuestionsIndex = 0
const currentQuestion = question[currentQuestionIndex]
//our html element to grab - empty h2
const questionEl = document.getElementById("questiontitle");
questionEl.textContent = currentQuestion.question

currentQuestion.choices.forEach(function (choice, i) {
    //dynamically create a button element , set content of button
    element.textcontent = choice
    //set an on click on that element which will equal the 
    //function to (StartQuizes)

    const keys = Object.keys //thid grabs all the title and choices 
    const item = keys[i];
    const preferences = {
        genre: $('.genre').val,
        location: $('.location').val,
        //etc
    }
    Element.onclick = preferences[item] = this.textcontent

    $('submit-btn').on('click', () => {
        fetch(`api/destinations/${preferences.genre}/${preferences.location}`)
            .then((results) => {
                results.json(results)
            }).then('something' => {
                $('.displayGenre').val
            })
    })

});

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
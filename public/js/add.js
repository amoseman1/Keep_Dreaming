//event listeners and api fetchs on front-end
const destContainer = document.querySelector('.dest-container');
const destForm = document.getElementById('dest-form');

const initializeRows = () => {
    destContainer.innerHTML = '';
    const rowsToAdd = [];
    for (let i = 0; i < destination.length; i++) {
        rowsToAdd.push(createNewRow(destination[i]));
    }

    rowsToAdd.forEach((row) => destContainer.prepend(row));
};

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
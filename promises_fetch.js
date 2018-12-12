// SETUP
// fetchGame function will return a promise because fetch always returns a promise
function fetchGame() {
    const result = fetch('https://bgg-json.azurewebsites.net/thing/110327');
    console.log('Promise on fetchGame:',result);
    return result;
}

// parseGame is going to return another promise because json also returns a promise
function parseGame(result) {
    console.log(result);
    const data = result.json();
    // throw "this is a parse error!";
    return data;
}

// insertData is going to use the values from parseGame to modify the dom.
function insertData(data){
    console.log(data);
    let content = document.querySelector('.content');   
    content.innerHTML = `<h1> ${data.name} - ${data.publishers[0]}</h1>
        <img src=${data.thumbnail} class='thumbnail'>
        <p class='description'>${data.description}</p> `;
}

// Here we are going to start the process and we are going to nest two promises.
fetchGame()
    .then(result => parseGame(result))
    .then(gameData => insertData(gameData))
    .catch(error => console.error(error));
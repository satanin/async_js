// Setup
// fetchGame function will return a promise because fetch always returns a promise
function fetchGame() {
    const result = fetch('https://bgg-json.azurewebsites.net/thing/110327');
    console.log(result); // just to see that this is a promise not a value
    return result;
}
// parseGame is going to return another promise because json also returns a promise
function parseGame(result) {
    const data = result.json();
    console.log(data); // just to see that this is a promise not a value
    return data;
}

// insertData is going to use the values from parseGame to modify the dom.
function insertData(data){
    console.log(data); // this is now parsed json data
    let content = document.querySelector('.content');   
    content.innerHTML = `<h1> ${data.name} - ${data.publishers[0]}</h1>
        <img src=${data.thumbnail} class='thumbnail'>
        <p class='description'>${data.description}</p> `;
}

async function init() {
    try {
        var result = await fetchGame();
        var data = await parseGame(result);
        insertData(data);

    }catch(error){
        console.error(error);
    }
}

init();
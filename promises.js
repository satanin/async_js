// SETUP
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li> ${post.title}</li>`;
        });
        contentTag = document.querySelector('.content');
        contentTag.innerHTML = output;
    }, 1000);
}

// With promises
// This time we are going to return a promise in createPost 
// because we know that takes some time, a promise is an object
// that represents a future value. We are adding also error checking
// to see how resolve and reject works.
function createPost(post, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            posts.push(post);
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
        
    });
}
// Whe we are going to receive a promise we use the 'then' syntax
// to call the next action after the promise has been resolved.
// We use catch to handle errors.
createPost({ title: 'Post three', body: 'this is post three'})
    .then(getPosts)
    .catch(err => console.error(err));
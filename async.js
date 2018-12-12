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

// createPost remains as it was in the promises example, because we are going to expect a promise
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

// We are going to use an async tagged function to deal with the createPost promise using await, await 
// can only be used within an async tagged function. We are also using try/catch to handle possible 
// errors
async function init() {
    try {
        const result = await createPost({ title: 'Post three', body: 'this is post three'});
        getPosts();
    }
    catch(error) {
        console.error(error);
    }
}

// We start the process calling our async function init.
init();

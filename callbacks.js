// SETUP
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

// We use getPosts to add our items to the dom
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

// Using callbacks
// We use createPost to add another Post to posts, this simulates
// a call to a server that serves the posts and takes 2s. 
// This time we are passing a callback function that we will call
// after our adding the post to post. 
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// We try to add another post to posts but this time we will pass
// getPosts as a callback so createPost can use it after adding the
// new post.
createPost({title: 'Post three', body: 'this is post three'}, getPosts);

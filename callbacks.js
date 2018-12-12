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

// Without callbacks
// We use createPost to add another Post to posts, this simulates
// a call to a server that serves the posts and takes 2s.
function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

// We try to add another post to posts
createPost({title: 'Post three', body: 'this is post three'});

// We add all the posts to the dom but, we just see two posts 
// because createPosts takes longer (2s, that's intented) and 
// when we are going to add the posts to the dom the third posts
// hasn't been added yet 
getPosts();
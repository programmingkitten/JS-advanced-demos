
const data = {
    'body': 'First post',
    'title': ' ',
}
const postsDiv = document.getElementById('posts')
const inputBody = document.getElementById('body')
const inputTitle = document.getElementById('title')
const postBtn = document.getElementById('postBtn')
postBtn.addEventListener('click', () => {
    
    let postData = {'body': inputBody.value, 'title': inputTitle.value}
    inputBody.value = '';
    inputTitle.value = '';
    createPost(postData);
    postsList();

})

async function createPost(data) {

    const response = await fetch("http://localhost:3030/jsonstore/blog/posts", {
        method: 'post',
        headers: {
            'Content-Type': 'application/js'
        },
        body: JSON.stringify(data)
    })

    const responseData = await response.json()
    console.log(responseData)

    postsList()
} 

async function postsList() {
    const response = await fetch('http://localhost:3030/jsonstore/blog/posts')
    const data = await response.json()

    
    for (let children of postsDiv.children) {
        children.remove()
    }


    const jsData = JSON.parse(JSON.stringify(data, 2, null))
// list [id, {data}]
    let listData = Object.entries(jsData)
    console.log(listData)

    for (let [id, post] of listData) {
        console.log(post);

        const currentPostDiv = document.createElement('div');
        const postTitle = document.createElement('p');
        const postBody = document.createElement('p');
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'delete'
        deleteBtn.addEventListener('click', () => deletePost(id))

        postTitle.textContent = post.title;
        postBody.textContent = post.body;
    
        currentPostDiv.appendChild(postTitle)
        currentPostDiv.appendChild(postBody)
        currentPostDiv.appendChild(deleteBtn)
        postsDiv.appendChild(currentPostDiv)
    }




}

async function deletePost(id) {

    const res = await fetch('http://localhost:3030/jsonstore/blog/posts/' + id, {
        method: 'delete',
    })

    postsList()
}

postsList()
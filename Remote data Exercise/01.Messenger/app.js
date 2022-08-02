const nameInput = document.getElementsByName('author')[0]
const messageInput = document.getElementsByName('content')[0]

const sendBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');

function attachEvents() {
    

    sendBtn.addEventListener('click', () => postMessage(nameInput.value, messageInput.value))
    refreshBtn.addEventListener('click', () => refreshData())
    console.log(nameInput, messageInput, sendBtn, refreshBtn)
}

async function postMessage(name, message) {
    console.log("?")

    const messageData = {author: name, content: message}

    const response = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'post',
        body: JSON.stringify(messageData)
    });

    const data = await response.json()
    console.log(data, '!!!')
    resetInputs()
    showData()
    return data
    
}

function resetInputs () {

    nameInput.value = '';
    messageInput.value = '';

}

async function showData(clear) {
    const res = await fetch('http://localhost:3030/jsonstore/messenger')
    const data = await res.json()


    if (clear) {
        // array [id, {data}]
        for (let message of Object.entries(data)) {
            // console.log('message', message[0])
            console.log(deleteItem(message[0]))
        }
    }

    refreshData()

    

    console.log(data, 'all data')
}

async function refreshData() {

    const messagesBox = document.getElementById('messages')
    messagesBox.value = ''


    const res = await fetch('http://localhost:3030/jsonstore/messenger')
    const data = await res.json()

    for (let [_, messageData] of Object.entries(data)) {
        messagesBox.value += `${messageData.author}: ${messageData.content}` + '\n'
    }
}

async function deleteItem(id) {

    const response = await fetch('http://localhost:3030/jsonstore/messenger/' + id, {
        method: 'delete',
    });


}


attachEvents();
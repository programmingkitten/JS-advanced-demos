function attachEvents() {

    data = fetch('http://localhost:3030/jsonstore/advanced/profiles')
    .then(res => res)
    .then(data => data.json())

    console.log(data)
}

attachEvents();
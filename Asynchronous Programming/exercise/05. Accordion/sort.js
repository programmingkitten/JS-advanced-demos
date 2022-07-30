
async function extractData() {

    const response = await fetch('https://www.google.com')
    const data = await response.json()
    console.log(data)
    console.log('a')
}
async function getInfo() {
    


    const input = document.getElementById('stopId')
    const textDiv = document.getElementById('stopName')
    textDiv.innerHTML = ""
    let busId = input.value
    const textArea = document.createElement('p')
    
    textDiv.appendChild(textArea)

    try {
    const res = await fetch(`http://localhost:3030/jsonstore/bus/businfo/` + busId)
    const data = await res.json()
    let bussData = Object.entries(
        JSON.parse(
        JSON.stringify(data, null, 2)
        ));

    console.log(Object.entries(bussData))
    textArea.textContent = bussData[1][1]

    // const busGraphic = document.createElement('li')

    busGraphic = bussData[0][1]

    const bussUl = document.getElementById('buses')
    bussUl.innerHTML = '';
    for (let [id, time] of Object.entries(busGraphic)) {
        const currentBussInfo = document.createElement('li')
        currentBussInfo.textContent = `Bus ${id} arrives in ${time} minutes`
        bussUl.appendChild(currentBussInfo)
    }
    } catch (err) {
        textArea.textContent = "ERROR"
    }
}

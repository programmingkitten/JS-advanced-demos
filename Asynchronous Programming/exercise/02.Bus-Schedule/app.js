function solve() {

    const infoLabel = document.querySelector('.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive')
    console.log(arriveBtn)

    let busData = {
        next: "depot",
        name: "",
    }

    async function depart() {
        
        try {
            departBtn.disabled = true;
            const res = await fetch('http://localhost:3030/jsonstore/bus/schedule/' + busData.next)
            const data = await res.json()
            
            busData = data;
            infoLabel.textContent = 'Next stop ' + busData.name;
            arriveBtn.disabled = false;
        } catch (err) {
            infoLabel.textContent = 'ERROR';
            arriveBtn.disabled = true;
            departBtn.disabled = true;
        }
    }

    function arrive() {
        arriveBtn.disabled = true;
        departBtn.disabled = false;

        infoLabel.textContent = `Arriving at ${busData.name}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
async function lockedProfile() {
    
    const profileDiv = document.getElementById('main')

    const res = await fetch('http://localhost:3030/jsonstore/advanced/profiles')
    const data = await res.json();
    const profilesData = Object.entries(
        JSON.parse(
            JSON.stringify(data, null, 2)))

    console.log(Object.entries(profilesData))

    for (let profile of profilesData) {

        const profileDiv = document.createElement('div');
        profileDiv.className = 'profile';

        const profileImage = document.createElement('img')
        profileImage.src = './iconProfile2.png';
        profileImage.className = 'userIcon'
        const lockLabel = pass;
    }


}
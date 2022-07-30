async function solution() {
    
    const mainDiv = document.getElementById('main')
    console.log(mainDiv)

    const res = await fetch('http://localhost:3030/jsonstore/advanced/articles/list')
    const data = await res.json()

    const articlesData = JSON.parse(
        JSON.stringify(data, null, 2)
    )
    
    for (let [title, id] of Object.entries(articlesData)) {
        let aritcleData = Object.entries(id)
        articleId = aritcleData[0][1]
        articleTitle = aritcleData[1][1]
        console.log(articleId, articleTitle)

        const accordionDiv = document.createElement('div')
        accordionDiv.className = 'accordion'

        const headDiv = create('div')
        headDiv.className = 'head'

        const titleSpan = create('span');
        titleSpan.textContent = articleTitle;

        const moreBtn = create('button')
        moreBtn.textContent = 'More'
        moreBtn.className = 'button'
        moreBtn.addEventListener('click', () => showMore(extraDiv)) // !!!!!!!!!!!!!!!!!!!!


        const extraDiv = create('div');
        extraDiv.innerHtml = `<div class="extra">
        <p>Scalable Vector Graphics .....</p>
    </div>`
        

        const extraInfo = create('p');
        extraInfo.textContent = 'MORE TEXT'

        mainDiv.appendChild(accordionDiv)
        accordionDiv.appendChild(headDiv);
        headDiv.appendChild(titleSpan);
        headDiv.appendChild(moreBtn);
        mainDiv.appendChild(extraDiv);
        extraDiv.appendChild(extraInfo);

    }

    function create(tag) {
        return document.createElement(tag)
    }

    function showMore(div) {
        if (div.style.display === 'none') {
            div.style.display = 'block'
        } else {
            div.style.display = 'none';
        }
        
    }
    // console.log(articlesData)

}



solution()
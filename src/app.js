const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8080/results')
.then(response => response.json())
.then(data => {
    data.array.forEach(article => {
        const title = `<h3>`+article.title+ `</h3>`
        feedDisplay.insertAdjacentElement("beforeend", title)
    });
}).catch(err => {
    console.log(err)
})
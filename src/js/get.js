
const btnRead = document.querySelector("#btnRead")
const table = document.querySelector("#table")

const BASE_URL = "http://localhost:3000/movies"

function getMovies() {

    fetch(`${BASE_URL}`).then(res => res.json()).then(movies => {
        table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Director</th>
            <th>Year</th>
        </tr>`
        let numb = 1
        for (const i of movies) {
            table.insertAdjacentHTML("beforeend", `
            <tr>
                <td>${numb}</td>
                <td>${i.title}</td>
                <td>${i.genre}</td>
                <td>${i.director}</td>
                <td>${i.year}</td>
            </tr>`)
            numb+=1
        }}
    )
}

btnRead.addEventListener("click", getMovies)



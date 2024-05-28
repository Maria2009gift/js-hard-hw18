
const btnAdd = document.querySelector("#btnAdd")
const table = document.querySelector("#table")
const title = document.querySelector("#inpAddTitle")
const genre = document.querySelector("#inpAddGenre")
const director = document.querySelector("#inpAddDirector")
const year = document.querySelector("#inpAddYear")


const BASE_URL = "http://localhost:3000/movies"

function addMovie() {
  const addToMovies = {
    "title": `${title.value}`,
    "genre": `${genre.value}`,
    "director": `${director.value}`,
    "year": `${year.value}`
  }
    const options = {
    method: "POST",
    body: JSON.stringify(addToMovies),
    headers: {
      "content-type": "application/json",
    }}
    fetch(`${BASE_URL}`, options)
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
        }
      }
    )
}

btnAdd.addEventListener("click", addMovie)



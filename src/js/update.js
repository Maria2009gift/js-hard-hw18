
const btnUpdate = document.querySelector("#btnUpdate")
const table = document.querySelector("#table")
const id = document.querySelector("#inpUpId")
const title = document.querySelector("#inpUpdateTitle")
const genre = document.querySelector("#inpUpdateGenre")
const director = document.querySelector("#inpUpdateDirector")
const year = document.querySelector("#inpUpdateYear")

const BASE_URL = "http://localhost:3000/movies"
// ===============PUT===============


function updateMovies() {

    const movieToUpdate = {
      "title": `${title.value}`,
      "genre": `${genre.value}`,
      "director": `${director.value}`,
      "year": `${year.value}`
    }
    fetch(`${BASE_URL}`).then(res => res.json()).then(movies => {
      let a = movies[Number.parseInt(id.value)-1].id
      const options = {
        method: "PUT",
        body: JSON.stringify(movieToUpdate),
        headers: {
          "Content-Type": "application/json",
        },
      }
      
      fetch(`${BASE_URL}/${a}`, options)

    })
}

btnUpdate.addEventListener("click", updateMovies)



















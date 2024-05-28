
const btnEdit = document.querySelector("#btnEdit")
const table = document.querySelector("#table")
const id = document.querySelector("#inpEditId")
const title = document.querySelector("#inpEditTitle")
const genre = document.querySelector("#inpEditGenre")
const director = document.querySelector("#inpEditDirector")
const year = document.querySelector("#inpEditYear")

const BASE_URL = "http://localhost:3000/movies"

function editMovies() {
    const movieToEdit = {} 
    fetch(`${BASE_URL}`).then(res => res.json()).then(movies => {

        if (title.value !== "") {
            movieToEdit.title = `${title.value}`          
        }
        if (genre.value !== "") {
            movieToEdit.genre = `${genre.value}`
        }
        if (director.value !== "") {
            movieToEdit.director = `${director.value}`
        }
        if (year.value !== "") {
            movieToEdit.year = `${year.value}`
        } else {
            movieToEdit.title = " "           
            movieToEdit.genre = " " 
            movieToEdit.director = " " 
            movieToEdit.year = " "
        }

        const options = {
            method: "PUT",
            body: JSON.stringify(movieToEdit),
            headers: {
                "Content-Type": "application/json",
            },
        }
        
        let a = movies[Number.parseInt(id.value)-1].id

        fetch(`${BASE_URL}/${a}`, options)
    })
}

btnEdit.addEventListener("click", editMovies)









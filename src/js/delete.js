
const id = document.querySelector("#inpDeleteId")
const btnDelete = document.querySelector("#btnDelete")

const BASE_URL = "http://localhost:3000/movies"

function deleteMovie() {
    fetch(`${BASE_URL}`).then(res => res.json()).then(movies =>
        fetch(`${BASE_URL}/${movies[Number.parseInt(id.value)-1].id}`, {
            method: "DELETE",
          })
    )
}

btnDelete.addEventListener("click", deleteMovie)



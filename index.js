const accesKey = "P2GLIOOkieY8zpHw-Z0Qkn8LjePUszK6xcnq-Z_Sgxo"
const formE1 = document.querySelector("form")
const inputE1 = document.querySelector("search-input");
const searchResults = document.querySelector(".search-results")
const showmore = document.querySelector("show-more")

let inputdata = ""
let page = 1;

async function searchImages() {
    inputdata = inputE1.value;
    const url = `https://api.unslapsh.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if (page === 1) {
        searchResults.innerHTML = ""
    }
    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        img.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;
        imageLink.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);

    });
    page++;
    if (page > 1) {
        showmore.style.display = "block"
    }

}
formE1.addEventListener("sumit", (Event) => {
    Event.preventDefault()
    page = 1;
    searchImages();
});
// showmore.addEventListener("click", () => {

//     searchImages();
// });
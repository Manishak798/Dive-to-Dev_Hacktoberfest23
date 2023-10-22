//dont change this code line 2 to 5
let logoimg = document.getElementById("logo");
logoimg.style.height = "250px";
logoimg.style.width = "100%";

/*this file is mainly made for the search tab for searching the project*/
let projectName;
function findProject() {
    projectName = document.getElementById("proname").value.trim(); // Trim whitespace from the input

    if (projectName === "") {
        alert("Please enter a project name."); // Show an alert for empty input
        return; // Exit the function to prevent further execution
    }

    if (projectName.toLowerCase() === "amazon") {
        let findCard = document.getElementById("amazon");
        document.body.innerHTML = findCard.innerHTML;
    } else if (projectName.toLowerCase() === "searchengine") {
        let findCard = document.getElementById("searchengine");
        document.body.innerHTML = findCard.innerHTML;
    } else {
        let img = new Image();
        img.src = 'Notfound-img.jpg';
        document.getElementById('body').appendChild(img);
    }
}

const menuIcon = document.getElementById("menu-icon");
const searchForm = document.querySelector(".search-form");

menuIcon.addEventListener("click", function () {
    searchForm.style.display = (searchForm.style.display === "none" || searchForm.style.display === "") ? "flex" : "none";
});

// Ensure that the search form is hidden initially on small screens
if (window.innerWidth <= 767) {
    searchForm.style.display = "none";
}

window.addEventListener("resize", function () {
    if (window.innerWidth > 767) {
        searchForm.style.display = "flex";
    } else {
        searchForm.style.display = "none";
    }
});


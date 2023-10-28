//dont change this code line 2 to 5
let logoimg = document.getElementById("logo");
logoimg.style.height = "250px";
logoimg.style.width = "100%";


// Search function for project lookup
function findProject() {
    const projectNameInput = document.getElementById("proname").value.trim();
    
    if (projectNameInput === "") {
        alert("Please enter a project name.");
        return;
    }

    const projectMappings = {
        amazon: "amazon",
        searchengine: "searchengine",
    };

    const projectNameLower = projectNameInput.toLowerCase();
    const findCardId = projectMappings[projectNameLower] || 'notfound-img';

    const findCard = document.getElementById(findCardId);
    document.body.innerHTML = findCard.innerHTML;
}

// Toggle search form visibility
const menuIcon = document.getElementById("menu-icon");
const searchForm = document.querySelector(".search-form");

menuIcon.addEventListener("click", function () {
    searchForm.style.display = searchForm.style.display === "none" || searchForm.style.display === "" ? "flex" : "none";
});

function toggleSearchFormVisibility() {
    searchForm.style.display = window.innerWidth > 767 ? "flex" : "none";
}

window.addEventListener("resize", toggleSearchFormVisibility);
toggleSearchFormVisibility();



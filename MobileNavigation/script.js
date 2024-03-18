const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

function activeLink() {
    let index = contents.findIndex(content => content.classList.contains("show"));

    listItems.forEach((item) => item.classList.remove("active"));
    listItems[index].classList.add("active");
}

listItems.forEach((item, index) => item.addEventListener("click", () => {
    contents.forEach((content) => content.classList.remove("show"));
    contents[index].classList.add("show");
    activeLink();
}))

activeLink();


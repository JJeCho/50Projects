const toggles = document.querySelectorAll('.toggle');
const confidentiality = document.querySelector('#confidentiality');
const integrity = document.querySelector('#integrity');
const availability = document.querySelector('#availability');

toggles.forEach((toggle) => {
    toggle.addEventListener('change', (e) => doTheTrick(e.target))
})

function doTheTrick(theClickedOne) {
    if (confidentiality.checked && integrity.checked && availability.checked) {
        if (confidentiality === theClickedOne) {
            availability.checked = false;
        }
        if (integrity === theClickedOne) {
            confidentiality.checked = false;
        }
        if (availability === theClickedOne) {
            integrity.checked = false;
        }
    }
}


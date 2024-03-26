const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

let randomURL = 'https://source.unsplash.com/random/';
const images = document.querySelectorAll(".loveMe");

images.forEach(image => {

    image.style.backgroundImage = "url(" + randomURL + getRandomSize() + ")"; 

    image.addEventListener('click', (e) => {
        if (clickTime === 0) {
            clickTime = new Date().getTime();
        } else {
            if ((new Date().getTime() - clickTime) < 800) {
                createHeart(e);
                updateTotalTimesClicked();
                clickTime = 0;
            } else {
                clickTime = new Date().getTime();
            }
        }
    });
})


function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.pageX;
    const y = e.pageY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    e.target.appendChild(heart);

    const divElement = e.target;
    const timesClicked = parseInt(divElement.dataset.timesClicked);
    if (!isNaN(timesClicked)) {
        divElement.dataset.timesClicked = timesClicked + 1;
    } else {
        divElement.dataset.timesClicked = 1; // Set to a default value if NaN
    }
    console.log( divElement.dataset.timesClicked )
    setTimeout(() => heart.remove(), 1000);
}


// Function to calculate and update the total times clicked
const updateTotalTimesClicked = () => {
    const loveMeDivs = document.querySelectorAll('.loveMe');
    let totalTimesClicked = 0;

    loveMeDivs.forEach(divElement => {
        const timesClicked = parseInt(divElement.dataset.timesClicked);
        if (!isNaN(timesClicked)) {
            totalTimesClicked += timesClicked;
        }
    });

    // Update the total in the #times element
    const timesElement = document.querySelector('#times');
    timesElement.textContent = totalTimesClicked;
};


updateTotalTimesClicked();


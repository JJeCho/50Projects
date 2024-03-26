const panels = document.querySelectorAll('.panel');
const titles = document.querySelectorAll('.title');
const unsplashURL = `https://source.unsplash.com/random`;
const funnyAdjectives = [
    "zany",
    "kooky",
    "wacky",
    "quirky",
    "goofy",
    "whimsical",
    "funky",
    "bizarre",
    "absurd",
    "ridiculous",
    "witty",
    "silly",
    "droll",
    "eccentric",
    "offbeat",
    "outrageous",
    "lopsided",
    "lopsided",
    "wonky",
    "wonky"
  ];

panels.forEach(panel => {
    panel.style.backgroundImage = `url(${unsplashURL}/${getRandomSize()})`;
  });


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

titles.forEach(title => {
    const randomWord = funnyAdjectives[Math.floor(Math.random() * funnyAdjectives.length)];
    console.log(randomWord);
    title.innerHTML = randomWord;
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}
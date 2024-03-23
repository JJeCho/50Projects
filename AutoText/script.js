document.addEventListener('DOMContentLoaded', () => {
    const textEl = document.getElementById('text');
    const speedEl = document.getElementById('speed');
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec sapien sem. Duis aliquet, diam congue maximus vehicula, diam dui placerat nisl, at pharetra libero enim id mauris. Nam non congue orci, ut efficitur magna. Phasellus scelerisque pulvinar fringilla. Quisque ultrices leo a placerat tincidunt. Nulla ac urna id ex vehicula aliquet ac eu tortor. Nam eu tellus turpis. Quisque luctus viverra turpis, maximus tempus eros vestibulum nec. Morbi et tellus interdum, tempor enim non, sollicitudin lectus. Integer tellus magna, eleifend at justo a, aliquam rutrum libero. Cras in mi egestas, dictum lacus eget, tincidunt felis. Quisque vestibulum enim in luctus elementum. Sed mattis, dolor at aliquet sodales, nunc arcu dapibus lorem, aliquet eleifend tortor diam sit amet mi. Integer sit amet posuere massa, sit amet consequat metus. Donec lectus purus, aliquam sit amet risus et, rhoncus interdum purus. Quisque nibh nisi, commodo facilisis risus malesuada, ullamcorper tristique felis. Donec non metus quam. Integer fermentum enim nunc, ut dignissim lectus imperdiet finibus. Curabitur malesuada vulputate neque et iaculis. Proin ut hendrerit nunc, id fringilla eros Morbi tincidunt turpis fermentum vestibulum sagittis. Donec ipsum elit, finibus at elementum quis, faucibus et felis. Morbi semper augue vitae quam imperdiet aliquet. Integer vulputate laoreet sapien at tincidunt.";

    let idx = 0;
    let speed = 300 / speedEl.value;

    function writeText() {
        textEl.textContent = text.slice(0, idx);
        idx = (idx + 1) % text.length;
        setTimeout(writeText, speed);
    }

    function updateSpeed(event) {
        speed = 300 / event.target.value;
    }

    speedEl.addEventListener('input', updateSpeed);
    writeText();
});


const buttons = document.querySelectorAll('.ripple');


buttons.forEach(button => {
    button.addEventListener('click', e => {
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      switch(randomNumber) {
        case 1:
          fadeOutCircle(e);
          break;
        case 2:
          fadeOutTriangle(e);
          break;
        case 3:
          fadeOutSquare(e);
          break;
        default:
          break;
      }
    });
  });

function fadeOutCircle(e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    e.target.appendChild(circle);

    setTimeout(() => circle.remove(), 300);
}
function fadeOutTriangle(e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const triangle = document.createElement('span');
    triangle.classList.add('triangle');
    triangle.style.top = yInside + 'px';
    triangle.style.left = xInside + 'px';
    triangle.classList.add('fade-out');
    e.target.appendChild(triangle);

    setTimeout(() => triangle.remove(), 300);
  }

  function fadeOutSquare(e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const square = document.createElement('span');
    square.classList.add('square');
    square.style.top = yInside + 'px';
    square.style.left = xInside + 'px';
    square.classList.add('fade-out');
    e.target.appendChild(square);

    setTimeout(() => square.remove(), 300);
  }


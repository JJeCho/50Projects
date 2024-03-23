const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector(".reset");
const nums = Array.from(document.querySelectorAll(".nums span"));

resetDOM();
runAnimation();

replay.addEventListener("click", resetAndRun);

function resetAndRun() {
  resetDOM();
  runAnimation();
}

function resetDOM() {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");
  nums.forEach((num) => num.classList.remove("in", "out"));
  nums[0].classList.add("in");
}

function runAnimation() {
  nums.forEach((num, index) => {
    const isLast = index === nums.length - 1;

    num.addEventListener("animationend", () => {
      num.classList.remove(isLast ? "out" : "in");
      if (!isLast) {
        nums[index + 1].classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}


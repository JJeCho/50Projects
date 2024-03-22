const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const background = document.getElementById("background");
const button = document.getElementById("btn");

password.addEventListener("input", (e) => {
    const input = e.target.value;
    const length = input.length;
    const blurValue = 20 - length * 2;
    background.style.filter = "blur(" + blurValue + "px)";
});

button.addEventListener("click", () => {
    const passwordValue = password.value;
    const password2Value = password2.value;
    
    const hasNumber = /\d/.test(passwordValue);
    const hasCapital = /[A-Z]/.test(passwordValue);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);

    if (!hasNumber) {
        notifyUser("Password should contain at least one number");
    }
    if (!hasCapital) {
        notifyUser("Password should contain at least one capital letter");
    }
    if (!hasSymbol) {
        notifyUser("Password should contain at least one symbol");
    }
    if (passwordValue !== password2Value) {
        notifyUser("Passwords do not match");
    }

    if (passwordValue === password2Value && hasNumber && hasCapital && hasSymbol) {
        notifyUser("Nice Password :D");
    }
});

function notifyUser(message) {
    // Implement your notification logic here
    // For example, you can display an alert or show a notification element
    alert(message);
}
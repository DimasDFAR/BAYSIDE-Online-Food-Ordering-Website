const welcomeElement = document.getElementById('welcome-message')

setup()

function setup() {
    let fullName = localStorage.getItem('full-name');
    let firstName = fullName.split(" ")[0];

    welcomeElement.innerText = `Welcome ${firstName}!`;
}   
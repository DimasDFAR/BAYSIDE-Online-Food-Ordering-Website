const welcomeElement = document.getElementById('welcome-message')

setup()

function setup() {
    welcomeElement.innerText = `Welcome to Bayside Restaraunt, ${localStorage.getItem('full-name')}!`
}
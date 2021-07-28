const photoUrl = "https://picsum.photos/180/170/"

addEventListener("DOMContentLoaded", () => {
    generateProfileCard()
})

const generateRandomImg = function(photoUrl) {
    let img = document.getElementsByTagName('img')
    img.style.backgroundImage = "url(https://picsum.photos/200/300/?random)";
}

const generateRandomUsername = function(length=6) {
    let username = document.querySelector('.username');
    let randomUsername = Math.random().toString(20).substr(2, length)
    username.innerHTML = randomUsername
    }

const generateRandomAge = function(max=60, min=18) {
    let age = document.querySelector('.age')
    let randomAge = Math.floor(Math.random() * (max - min + 1) + min)
    age.innerHTML = randomAge
}

const generateRandomDescription = function(length=20) {
    let description = document.querySelector('.description')
    let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomResult = '';
    for (let i = 0; i < length; i++) {
        randomResult += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
    }
    description.innerHTML = randomResult
}

const generateProfileCard = function() {
    generateRandomImg
    generateRandomUsername()
    generateRandomAge()
    generateRandomDescription()
}

document.querySelector(".button").addEventListener("click", generateProfileCard)





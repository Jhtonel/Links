function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /*  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  */
}

const dynamicText = document.querySelector("#makedby span")
const words = ["amor", "exelência"]

let wordIndex = 0
let charIndex = 0
let isDeleting = false

const typeEffect = () => {
  const currentWord = words[wordIndex]
  const currentChar = currentWord.substring(0, charIndex)
  dynamicText.textContent = currentChar
  dynamicText.classList.add("stop-blinking")

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++
    setTimeout(typeEffect, 150)
  } else if (isDeleting && charIndex > 0) {
    charIndex--
    setTimeout(typeEffect, 100)
  } else {
    isDeleting = !isDeleting
    dynamicText.classList.remove("stop-blinking")
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex
    setTimeout(typeEffect, 1600)
  }
  if (currentWord === "amor") {
    if (charIndex === currentWord.length) {
      setTimeout(function () {
        dynamicText.innerHTML =
          '<ion-icon class="ionicon" name="heart"></ion-icon>'
      }, 350)
      setTimeout(() => {
        dynamicText.innerHTML = currentWord
      }, 1700)
    }
  }
  if (currentWord === "exelência") {
    if (charIndex === currentWord.length) {
      setTimeout(function () {
        dynamicText.innerHTML =
          '<ion-icon class="ionicon jose" name="glasses"></ion-icon>'
      }, 350)
      setTimeout(() => {
        dynamicText.innerHTML = currentWord
      }, 1700)
    }
  }
}
typeEffect()

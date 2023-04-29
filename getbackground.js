console.log("[LOG] getbackground.js: loaded")
const body = document.querySelector('body');

fetch("backgrounds/backgrounds.json")
  .then(response => response.json())
  .then(data => {
    const randomIndex = Math.floor(Math.random() * data.backgrounds.length);
    const selectedBackground = data.backgrounds[randomIndex];
    console.log("[LOG] getbackground: current image = " + selectedBackground)
    document.body.style.backgroundImage = `url('${selectedBackground}')`;
  })
  .catch(error => console.error(error));
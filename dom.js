const body = document.body

const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

spanBye.innerText = "Joker"
spanHi.dataset.newName = "SiliconValley"
spanHi.style.backgroundColor = 'red'

window.onload = () => {
    let div = document.body.children[1];
    let ul = div.children[0];
    let thirdLi = ul.children[2];

    thirdLi.innerText = "New Text";
  };

let colors = generateRandomColors(6)

let cuadros = document.querySelectorAll(".square")
let colorDisplay = document.querySelector("#colorDisplay")
let message = document.querySelector("#message")
let botonReset = document.querySelector("#reset")
let botonHard = document.querySelector("#hardButton") // boton duro
let botonEasy = document.getElementById("easyButton")
let cabecera = document.querySelector(".cabecera")


for(let i = 0; i < colors.length; i++) {
    cuadros[i].style.background = colors[i]
    botonReset.addEventListener("click", reset)

    cuadros[i].addEventListener("click" , function(){
        let clickedColor = this.style.background;
         //si lo que clickeaste es lo mismo que el color guardado en la variable "pickedColor (color ganador)"
        if(clickedColor === pickedColor) {
			message.textContent = "Correct!";   //salta en pantalla correcto!
            botonReset.textContent = "PLAY AGAIN?"
            botonReset.addEventListener("click", reset)
             //todos los cuadros del mismo color del ganador
             //titulo mismo color que el cuadro ganador
            for(let i = 0; i < cuadros.length; i++) {
				cuadros[i].style.background = pickedColor;
                colorDisplay.style.background = pickedColor;
                cabecera.style.background = pickedColor
			} 
		}
        else if (clickedColor != pickedColor) {
            this.style.background="";
            message.textContent = "Intentalo Nuevamente"; 
        }
    })
    
}

let pickedColor = pickColor() //1- colors[3]
colorDisplay.textContent = pickedColor

// Elegir colores aleatorios ganador
function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
pickColor()
//____________________________________________________
//generar y devolver un color aleatorio//creacion de colores random
function randomColor() {
    let r = Math.round(Math.random() * 256);
    let g = Math.round(Math.random() * 256);
    let b = Math.round(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
randomColor()

//creacion de array de colores aleatorios random.
function generateRandomColors (num) {
    let array = [];
  for (let i = 0; i < num; i++) {
    array[i] = randomColor();
  }
 return array
}
generateRandomColors()

//___________________________________________________________________
//boton juega de nuevo y nuevos colores (boton reset)
function reset() {
  location.reload()
}
//MODOS DE BOTON DURO O FACIL_______________________________________________________
botonHard.addEventListener("click", function () {
    botonHard.classList.toggle("selected") 
    botonEasy.style.display = "none"
    botonHard.addEventListener("click", reset)
    message.textContent = ""
    generateRandomColors(6)
    colors = generateRandomColors (6)
    pickedColor = pickColor()
    for (let i = 0; i < cuadros.length; i++) {
        if (colors[i]) {
            cuadros[i].style.backgroundColor = colors[i];
        } else{
            cuadros[i].style.display = "none"
        }

    }
})
//__________________________________________________________________________
botonEasy.addEventListener("click", function () {
    botonEasy.classList.toggle("selected") 
    botonHard.style.display = "none"
    botonEasy.addEventListener("click", reset)
    message.textContent = ""
    generateRandomColors(3)
    colors = generateRandomColors(3)
    pickedColor = pickColor()
    for (let i = 0; i < cuadros.length; i++) {
        if (colors[i]) {
            cuadros[i].style.backgroundColor = colors[i];
        } else{
            cuadros[i].style.display = "none"
        }

    }
})
//___________________________________________________________________________________ 




let boton = document.getElementById('boton')
let img = document.getElementById('logo')

let img_on = true;

boton.onclick= () => {
  if (img_on) {
    img.style.display="None"
    img_on = false
  }
  else {
    img.style.display = "inline"
    img_on = true
  }
}

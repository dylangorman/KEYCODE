



let welcome = document.getElementById("welcome");
let generator = document.getElementById("generator");
let head = document.getElementById("keycode");

function keycode(event) {
let key = event.key;
let which = event.which;
let code = event.code;



head.textContent = which;
document.getElementById("eventKey").innerHTML= key;
document.getElementById("eventWhich").innerHTML= which;
document.getElementById("eventCode").innerHTML= code;
generator.classList.remove("show");
welcome.remove()
}
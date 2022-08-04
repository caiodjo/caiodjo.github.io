let contato = document.getElementById("contato");
let sobreMim = document.getElementById("sobre-mim");


let borderBottom = function (event) {
    event.target.style.borderBottom = "3px solid black";
    event.target.style.fontWeight = "700";
    sobreMim.style.borderBottom = "none"
    sobreMim.style.fontWeight = "500";
}

let removeBorder = function (event) {
    event.target.style.borderBottom = "";
    event.target.style.fontWeight = "";
    sobreMim.style.borderBottom = ""
    sobreMim.style.fontWeight = "";
}

contato.onmouseover = borderBottom;
contato.onmouseout = removeBorder;
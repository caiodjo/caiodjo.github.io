let sidebar = document.getElementById("mobile-nav");
let mobile = document.getElementById("menu-mobile");
let xmark = document.getElementById("xmark");

// let option = document.getElementsByClassName("side-op")[0];

let sideAppear = function (event) {
    sidebar.style.width = "80%";
    sidebar.style.borderLeft = "solid 1px aliceblue";
}
let sideDisappear = function () {
    sidebar.style.width = "";
    sidebar.style.borderLeft = "";
}

let options = ["side-sobre-mim", "side-contato", "side-projetos"];
let elementosOp = [];
options.forEach(option => elementosOp.push(document.getElementById(option))); //transforma o array de string em elementos e passa pro array elementosOp
console.log(elementosOp);
elementosOp.forEach(element => element.onclick = sideDisappear);

mobile.onclick = sideAppear;
xmark.onclick = sideDisappear;
// option.onclick = sideDisappear;

// Icones da intro flutuando loucamente
let contato = document.getElementById("nav-contato");
let sobreMim = document.getElementById("nav-sobre-mim");

let borderBottom = function (event) {
    event.target.style.borderBottom = "3px solid black";
    event.target.style.fontWeight = "700";
    sobreMim.style.borderBottom = "none";
    sobreMim.style.fontWeight = "500";
}

let removeBorder = function (event) {
    event.target.style.borderBottom = "";
    event.target.style.fontWeight = "";
    sobreMim.style.borderBottom = "";
    sobreMim.style.fontWeight = "";
}

contato.onmouseover = borderBottom;
contato.onmouseout = removeBorder;

// Icons flutuantes
let html = document.getElementById("html");
let css3 = document.getElementById("css3");
let js = document.getElementById("js");
let react = document.getElementById("react");

//Inicializando os icones
let changePosition = function (event) {
    const posx = Math.ceil(Math.random()*95);
    const posy = Math.ceil(Math.random()*95);
    event.target.style.position = 'absolute';
    event.target.style.margin = '0';
    event.target.style.right = `${posx}%`;
    event.target.style.bottom = `${posy}%`;
}

html.onclick = changePosition;
css3.onclick = changePosition;
js.onclick = changePosition;
react.onclick = changePosition;
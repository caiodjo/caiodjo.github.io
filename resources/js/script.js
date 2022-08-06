let sidebar = document.getElementById("mobile-nav");
let mobile = document.getElementById("menu-mobile");
let xmark = document.getElementById("xmark");

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
elementosOp.forEach(element => element.onclick = sideDisappear); //adiciona evento de click em todos os elementos do array

mobile.onclick = sideAppear;
xmark.onclick = sideDisappear;

// ativa e desativa os links da nav bar
let contato = document.getElementById("nav-contato");
let sobreMim = document.getElementById("nav-sobre-mim");
let projetos = document.getElementById("nav-projetos");
const navElements = [contato, sobreMim, projetos]; //criei a array dos elementos
let borderBottom = function (event) {
    navElements.forEach(elemento => { //percorro por todos os elementos verificando se ele foi o clicado ou não
        if(elemento != event.target){ //se nao for o clicado, tiro o active dele e adiciono o hover
            elemento.classList.remove("active");
            elemento.classList.add("hover");
        } else { //se for o clicado adiciono o active e removo o hover
            elemento.classList.add("active");
            elemento.classList.remove("hover");
        }
    });
}
navElements.forEach(elem =>{
    elem.onclick = borderBottom;
})

// Icons flutuantes
let html = document.getElementById("html");
let css3 = document.getElementById("css3");
let js = document.getElementById("js");
let react = document.getElementById("react");

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
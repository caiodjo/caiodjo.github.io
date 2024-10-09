var mouse = {
    nome: "Mouse",
    preco: 299.99,
    desconto: 0.2,
    precoCDesconto: function () { return mouse.preco * mouse.desconto; },
};
console.log(mouse.precoCDesconto());

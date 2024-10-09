// type ContaCorrente = {
//   numero: number;
//   saldo: number;
//   movimentar: (val: number) => void;
// };
// type Cliente = {
//   nome: string;
//   email: string;
//   contas: ContaCorrente[];
// };
// function movimentarContas(conta: number, valor: number) {
//   for (let cliente of clientes) {
//     for (let cliConta of cliente.contas) {
//       if (conta === cliConta.numero) {
//         cliConta.movimentar(valor);
//       }
//     }
//   }
// }
// function movimentar(this: ContaCorrente, valor: number) {
//   this.saldo += valor;
//   console.log("done");
// }

// const clientes: Cliente[] = [
//   {
//     nome: "Caio",
//     email: "vasco",
//     contas: [
//       {
//         numero: 123,
//         saldo: 0,
//         movimentar,
//       },
//       {
//         numero: 9876,
//         saldo: -5000,
//         movimentar,
//       },
//     ],
//   },
//   {
//     nome: "Jose",
//     email: "flamco",
//     contas: [
//       {
//         numero: 121313,
//         saldo: 1000,
//         movimentar,
//       },
//       {
//         numero: 12241,
//         saldo: 400,
//         movimentar,
//       },
//     ],
//   },
// ];

// movimentarContas(123, 50);
// movimentarContas(9876, 500);
// movimentarContas(9876123, 10000);
// movimentarContas(12241, 1000);

// console.log(clientes[1]);

// class Produto {
//   constructor(
//     readonly id: number,
//     readonly nome: string,
//     readonly preco: number,
//     readonly desconto: number = 0
//   ) {
//     if (nome.length < 2 && nome.length > 250)
//       throw Error("Nome fora do padrão");
//     if (preco < 1) throw Error("Preco fora do padrão");
//     if (desconto < 0 && desconto > 0.8)
//       throw Error("Desconto fora do padrão");
//   }
//   get precoFinal(): number {
//     return this.preco * (1 - this.desconto);
//   }
// }

// const c1 = new Produto(123, "vasco", 1000, 0.5);
// console.log(c1.precoFinal);

class Desafio {
  nota: number = 1000;

  static imprima() {
    console.log(new Desafio().nota);
  }
}

Desafio.imprima();

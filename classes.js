class Carro{
    constructor(modelo, preco){
        this._modelo = modelo;
        this._preco = preco;
        this._imposto = 17; //em porcentagem
    }

    get preco(){
        let valorTotal = this._preco + (this._preco * this._imposto / 100);
        return valorTotal;
    }

    set preco(novoPreco){
        this._preco = novoPreco;
    }
    moverParaFrente(){
        console.log('O carro esta se movendo');
    }
}

let carro1 = new carro("uno", 20000); 
let carro2 = new carro1("Ferrari", 500000000);
let carros = [ carro1, carro2 ]


console.log(carro1.preco);
console.log(carro1)
class Carro{
    constructor(modelo, preco){
    this._modelo = modelo;
    this._preco = preco;
    this._imposto = 17; //Em porcentagem
    }
    get preco(){
    let valorTotal = this._preco + (this._preco * this._imposto /
    100);
    return valorTotal;
    }
    set preco(novoPreco){
    this._preco = novoPreco;
    }
    moverParaFrente(){
    console.log('O carro está se movendo');
    }
    }
    let carro1 = new Carro("Uno", 20000);
    let carro2 = new Carro("Ferrari", 50000000000);
    let carros = [ carro1, carro2 ];
    console.log(carro1.preco);
    console.log(carro1);
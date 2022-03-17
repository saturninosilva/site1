class Automovel{
    imposto = 0.12;

    constructor(modelo, precoCompra, cor, tipo){
        this._modelo = modelo;
        this._precoCompra = precoCompra;
        this._cor = cor;
        this._tipo = tipo;
    }

    precoVenda(){
        return this._precoCompra + (this._precoCompra * this._imposto);
        + (this._precoCompra * this._comissaoVendedor)
        + (this._precoCompra * this._acrescimo);
    }
 }
}
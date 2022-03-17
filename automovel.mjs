class Automovel {
    _imposto = 0.12;
    _comissaoVendedor = 0.05;
    _acrescimo = 0.10;

    constructor(modelo, precoCompra, cor, tipo){
        this._modelo = modelo;
        this._precoCompra = precoCompra;
        this._cor = cor;
        this._tipo = tipo;
    }

    get modelo(){
        return this._modelo;
    }

    precoVenda(){
        return this._precoCompra + (this._precoCompra * this._imposto)
            + (this._precoCompra * this._comissaoVendedor)
            + (this._precoCompra * this._acrescimo);
    }
}

export default Automovel;
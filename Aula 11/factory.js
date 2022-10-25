class Produto{
    constructor (codigo){
        this.codigo = codigo
    }

    getCodigo(){
        return this.codigo
    }
}

const FactoryProduto = codigo => ({
    codigo,
    getCodigo: () => codigo
})

const p1 = new Produto(12)
const p2 = FactoryProduto(22)

console.log(p1.getCodigo())
console.log(p2.getCodigo())

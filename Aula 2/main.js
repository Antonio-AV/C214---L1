class Veiculo {
    _placa
    _ano

    constructor(placa, ano){
        this._placa = placa;
        this._ano = ano;
    }

    setPlaca(placa){
        this._placa = placa;
    }

    setAno(ano){
        this._ano = ano;
    }

    getPlaca(){
        return this._placa
    }

    getAno(){
        return this._ano
    }

    exibirDados(){
        console.log("Placa: ", this._placa);
        console.log("Ano: ", this._ano);
    }
}

class Onibus extends Veiculo{
    _assentos

    constructor(placa, ano, assentos){
        super(placa, ano)
        this._assentos = assentos
    }

        setAssentos(assentos){
            this._assentos = assentos
        }

        getAssentos(){
            return this._assentos
        }

        exibirDados(){
            console.log("Placa: ", super.placa);
            console.log("Ano: ", super.ano);
            console.log("Número de assentos: ", this._assentos)
        }
}


class Caminhao extends Veiculo{
    _eixos

    constructor(placa, ano, eixos){
        super(placa, ano)
        this._eixos = eixos
    }

        setEixos(eixos){
            this._eixos = eixos
        }

        getEixos(){
            return this._eixos
        }

        exibirDados(){
            console.log("Placa: ", super.placa);
            console.log("Ano: ", super.ano);
            console.log("Número de eixos: ", this._eixos)
        }
}

//Criando instancias usando consrtutor
const novoVeiculo = new Veiculo("HBR2022", 2022)
const novoOnibus = new Onibus("HBR2021", 2021, 60)
const novoCaminhao = new Caminhao("HBR2020", 2020, 3)


console.log(novoVeiculo._placa)
console.log(novoVeiculo._ano)

console.log(novoOnibus._placa)
console.log(novoOnibus._ano)
console.log(novoOnibus._assentos)

console.log(novoCaminhao._placa)
console.log(novoCaminhao._ano)
console.log(novoCaminhao._eixos)


//Criando instancias usando setter
const veiculoSet = new Veiculo()
const onibusSet = new Onibus()
const caminhaoSet = new Caminhao()

veiculoSet.setPlaca("ABC2001")
veiculoSet.setAno(2001)
veiculoSet.setAno("2001")

onibusSet.setPlaca("ABC2002")
onibusSet.setAno(2002)
onibusSet.setAssentos(70)

caminhaoSet.setPlaca("ABC2003")
caminhaoSet.setAno(2003)
caminhaoSet.setEixos(4)

console.log(veiculoSet._ano)
console.log(veiculoSet._placa)

console.log(onibusSet._ano)
console.log(onibusSet._placa)
console.log(onibusSet._assentos)

console.log(caminhaoSet._ano)
console.log(caminhaoSet._placa)
console.log(caminhaoSet._eixos)

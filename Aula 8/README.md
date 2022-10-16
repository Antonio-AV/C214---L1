# API

API de carros


##  Instale antes de tentar executar os projetos
 - [Node](https://nodejs.org/)
 
##  Preparando os projetos

1. Clone o repositório: 
```bash
git clone https://github.com/Antonio-AV/C214---L1.git && cd C214---L1
```
2. Entre na Aula8
```bash
cd Aula 8
```

3. Instale todas as depencências
```bash
npm install
```

4. Rode o projeto
```bash
npm start
```

5. Teste o projeto
```bash
npm test
```

##  Executando o projeto
- [x] Cadastrar carro
```bash
http://localhost:3333/carro/create
```
```json
{
    "placa": "ZXY-9876",
    "cor": "Verde",
    "ano": 2021,
}
```
- [x] Buscar carros
```bash
http://localhost:3333/carro/list
```
- [x] Buscar carros por placa
```bash
http://localhost:3333/carro/list?placa=ZXY-9876
```
- [x] Atualizar carro
```bash
http://localhost:3333/carro/update
```
```json
{
    "placa": "ZXY-9999",
    "cor": "Azul",
    "ano": 2022,
}
```
- [x] Excluir carro
```bash
http://localhost:3333/carro/delete?placa=ZXY-9999
```


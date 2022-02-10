let pessoa = { 
    nome:"",
    idade: 0,
    altura: 0,
    peso: 0,
    sexo: "",
    imc: 0
}
const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const res = document.querySelector('#res');
const nomePessoa = document.querySelector('.nome');
const idadePessoa = document.querySelector('.idade');
const pesoPessoa = document.querySelector('.peso');
const alturaPessoa = document.querySelector('.altura');
const imcPessoa = document.querySelector('.imc');
const sexoPessoa = document.querySelector('.sexo');
const classPessoa = document.querySelector('.class');

function getValue(x) {
    pessoa.sexo = x.value;
  }

function calcular() {
    pessoa.nome = nome.value;
    pessoa.idade = Number(idade.value);
    pessoa.altura = Number(altura.value);
    console.log(pessoa.altura)
    pessoa.peso = Number(peso.value);
    pessoa.imc = pessoa.peso / (pessoa.altura * pessoa.altura);
    if (pessoa.nome.length == 0 || pessoa.idade.length == 0 || pessoa.altura.length == 0 || 
        pessoa.peso.length == 0 || pessoa.sexo.length == 0) {
        window.alert('[ERRO]: Preencha todos os dados!')
    }
    else {
        res.style.display = 'block';
        nomePessoa.innerHTML = `Nome: ${pessoa.nome}.`;
        idadePessoa.innerHTML = `Idade: ${pessoa.idade} anos.`;
        pesoPessoa.innerHTML = `Peso: ${pessoa.peso} Kg.`;
        alturaPessoa.innerHTML = `Altura: ${pessoa.altura.toFixed(2)} Metros.`;
        sexoPessoa.innerHTML = `Sexo: ${pessoa.sexo}.`;
        let classi;
        if (pessoa.imc < 18.5) {
            classi = "Magreza";
            classPessoa.style.background = '#f74821';
        } else if (pessoa.imc < 25) {
            classi = "Normal";
            classPessoa.style.background = '#399936';
        } else if (pessoa.imc < 30) {
            classi = "SobrePeso";
            classPessoa.style.background = '#ffc239';
        } else if (pessoa.imc < 40) {
            classi = "Obesidade";
            classPessoa.style.background = '#ff9151';
        } else if (pessoa.imc >= 40) {
            classi = "Obesidade Grave";
            classPessoa.style.background = '#bd1313';
        }
        imcPessoa.innerHTML = `O seu IMC é ${pessoa.imc.toFixed(1)}kg/m2.`;
        classPessoa.innerHTML = `Classificação: ${classi}.`;
    }
}
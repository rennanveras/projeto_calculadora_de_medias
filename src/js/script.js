// initial data
const form = document.querySelector('#form-atividade');
const imgAprovado = `<img src="src/img/aprovado.png" alt="Emoji celebrando">`;
const imgReprovado = `<img src="src/img/reprovado.png" alt="Emoji triste">`;
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;
const notaMinima = Number(prompt(`Qual será a nota minima:`))
let linhas = '';


//events
form.addEventListener('submit',(e) => {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

//function

function adicionaLinha() {
    const inputNomeAtividade = document.querySelector('#nome-atividade');
    const inputNotaAtividade = document.querySelector('#nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi adicionada`);
    }else{
        atividades.push(inputNomeAtividade.value);
        notas.push(Number(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '<tr>';
        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calcularMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}


function calcularMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    const media = somaDasNotas / notas.length;
    return media;
}


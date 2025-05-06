'use strict'

import { getContatos } from "./contato.js"
import { getContatosPorNome } from "./contato.js"
import { postContato } from "./contato.js"

function criarCards (contato) {
    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('card-contato')
    card.innerHTML = `
                <img src="${contato.foto}" alt="avatar">
                <h2>${contato.nome}</h2>
                <p>${contato.celular}</p>`

                container.appendChild(card)
}

async function carregarCards () {
    const contatos = await getContatos()

    contatos.forEach(criarCards)

}

async function carregarPesquisa(evento) {
    const container = document.getElementById('container')
    if(evento.key == 'Enter') {
        const contatos = await getContatosPorNome(evento.target.value)
        container.replaceChildren()
        contatos.forEach(criarCards)
    }
}

function novoContato(){
    document.querySelector('main').className = 'form-show'
}
function cancelar(){
    document.querySelector('main').className = 'card-show'
}
function salvar(){
    const contato = {
        "nome": document.getElementById('nome').value,
        "celular": document.getElementById('celular').value,
        "foto": document.getElementById('foto').value,
        "email": document.getElementById('email').value,
        "endereco": document.getElementById('endereco').value,
        "cidade": document.getElementById('cidade').value
    }

    if(postContato(contato)){
        alert('cadastro com sucesso!!')
        carregarCards()
        cancelar()
    }
}
carregarCards()

document.getElementById('nome_contato')
        .addEventListener('keydown', carregarPesquisa)

document.getElementById('novo_contato')
.addEventListener('click', novoContato)

document.getElementById('cancelar')
.addEventListener('click', cancelar)

document.getElementById('salvar')
.addEventListener('click', salvar)
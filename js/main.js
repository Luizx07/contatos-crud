'use strict'

import { getContatos } from "./contato.js"
import { getContatosPorNome } from "./contato.js"

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

carregarCards()

document.getElementById('nome_contato')
        .addEventListener('keydown', carregarPesquisa)
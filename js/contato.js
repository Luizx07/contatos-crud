'use strict'

export async function getContatosPorNome(nome) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos?nome_like=^${nome}`
    const response = await fetch (url)
    const data = await response.json()
    return data
}

export async function getContatos () {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const response = await fetch (url)
    const data = await response.json()
    return data
}

export async function postContato (contato) {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
    const response = await fetch(url, options)
    return response.ok
}

async function putContato(contato, id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch (url, options)
    return response.ok
}

async function deleteContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'DELETE'
    }

    const response = await fetch (url, options)
    return response.ok
}

const contatoTeste = {
    "nome": "luiz santos",
    "celular": "11 9 6767-8987",
    "foto": "../img/luizpng",
    "email": "LuizSantos.198@gmail.com",
    "endereco": "Av. São vincente, 70",
    "cidade": "Barueri"
}
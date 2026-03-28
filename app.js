'use strict'

import funcionarios from "./funcionarios.json" with { type: "json" }

const criarContainer = () => {
    const containerExistente = document.getElementById('container')

    if (containerExistente) {
        return containerExistente
    }

    const novoContainer = document.createElement('div')
    novoContainer.id = 'container'
    document.body.appendChild(novoContainer)

    return novoContainer
}

const container = criarContainer()

const criarCard = ({ nome, cargo, imagem }) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const foto = document.createElement('img')
    foto.src = `./img/${imagem}`
    foto.alt = `Foto de ${nome}`

    const info = document.createElement('div')
    info.classList.add('card-info')

    const titulo = document.createElement('h3')
    titulo.textContent = nome

    const funcao = document.createElement('span')
    funcao.textContent = cargo

    info.append(titulo, funcao)
    card.append(foto, info)

    return card
}

const carregarFuncionarios = () => {
    container.replaceChildren()

    funcionarios.forEach((funcionario) => {
        const card = criarCard(funcionario)
        container.appendChild(card)
    })
}

carregarFuncionarios()


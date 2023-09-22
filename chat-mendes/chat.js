'use strict'

const pessoas = [

    {
        nome: 'Babi',
        imagem: 'barbie.jpg',
        mensagem: 'Acho que vou usar ...',
        contato: 'Barbie',
        tempo: 'Há 30 min',
        quantidade: '2'
    },

    {
        nome: 'Veigh',
        imagem: 'veigh.jpg',
        mensagem: 'Passa seu pix',
        contato: 'Veigh',
        tempo: 'Há 4 horas',
        quantidade: '3'
    },

    {
        nome: 'Haridade',
        imagem: 'hariel.jpg',
        mensagem: 'nao sei po',
        contato: 'Hariel',
        tempo: 'Há 3 horas',
        quantidade: '5'
    },

    {
        nome: 'Rogerzinho',
        imagem: 'Rg10.jpg',
        mensagem: 'não vou voltar',
        contato: 'Rg10',
        tempo: 'Há 9 horas',
        quantidade: '1'
    },

    {
        nome: 'Luísa',
        imagem: 'luisa.jpg',
        mensagem: 'Fui corna de novo KKK',
        contato: 'Luísa corna',
        tempo: 'Há 6 horas',
        quantidade: '1'
    },

    {
        nome: 'moedas',
        imagem: 'chico.jpg',
        mensagem: 'Errei, fui neymar',
        contato: 'chico ',
        tempo: 'Há 2 dias',
        quantidade: '3'
    },



]

const criarCard = (pessoa) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoa.imagem}`
    img.alt = pessoa.nome

    const info = document.createElement('div')
    info.classList.add('info')

    const nomeContainer = document.createElement('div')
    nomeContainer.classList.add('nome-container')

    const nome = document.createElement('h3')
    nome.classList.add('nome')
    nome.textContent = pessoa.nome

    const qntMsg = document.createElement('span')
    qntMsg.classList.add('qnt-msg')
    qntMsg.textContent = pessoa.quantidade

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = pessoa.mensagem

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoa.tempo

    const contatoCard = document.createElement('div')
    contatoCard.classList.add('contato')

    const contato = document.createElement('p')
    contato.textContent = pessoa.contato

    card.appendChild(img)
    card.appendChild(info)
    card.appendChild(tempo)
    card.appendChild(contatoCard)
    info.appendChild(nomeContainer)
    info.appendChild(mensagem)
    nomeContainer.appendChild(nome)
    nomeContainer.appendChild(qntMsg)
    contatoCard.appendChild(contato)

    return card

}

const mostrarCards = (pessoa) => {

    const containerChat = document.getElementById('container-chat')
    const card = criarCard(pessoa)
    containerChat.appendChild(card)

} 

pessoas.forEach(mostrarCards)
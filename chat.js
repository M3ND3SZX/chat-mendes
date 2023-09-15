'use strict'
//JSON

const perfis = [
{
    nome: 'Calvo',
    mensagem: 'Vou voltar para o timão!',
    imagem: 'Rg10.jpg'
},
{
   nome: 'Dos prédios',
   mensagem: 'o glóriaaa',
    imagem: 'veigh.jpg' 
},
{
   nome: 'Haridade',
   mensagem: 'Tá tonta ou?',
    imagem: 'hariel.jpg' 
},
{
   nome: 'Barbie',
    mensagem: 'ROSAAAAA AMO ROSA',
    imagem: 'barbie.jpg' 
}

]
function criarCards(fotoChat){
    const container = document.getElementById('card-container')

    const card = document.createElement('div')
    card.classList.add('card')
    
    const imagem = document.createElement('img')
    imagem.src = `./img/${fotoChat.imagem}` 
    imagem.alt = fotoChat.nome

    const divContainer = document.createElement ('div')

    const nome = document.createElement('h2')
    nome.textContent = fotoChat.nome

    const mensagem = document.createElement('p')
    mensagem.textContent = fotoChat.mensagem

    divContainer.replaceChildren(nome, mensagem)
    card.replaceChildren(imagem, divContainer)

    container.appendChild(card)
}

perfis.forEach(criarCards)
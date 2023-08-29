import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscaVideo(e) {
    e.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;

    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(e => lista.appendChild(constroiCard(e.titulo, e.descricao, e.url, e.imagem)))

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem">Não existe vídeos com esse termo.</h2>`
    }
}

const botao = document.querySelector("[data-botao-pesquisa]")
botao.addEventListener("click", e => buscaVideo(e))

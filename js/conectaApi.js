async function listaVideos() {
    const conexao = await fetch('https://64ed67eef9b2b70f2bfb7b10.mockapi.io/videos')
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("https://64ed67eef9b2b70f2bfb7b10.mockapi.io/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo. ");
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`https://64ed67eef9b2b70f2bfb7b10.mockapi.io/videos?q=${termoDeBusca}`)
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}
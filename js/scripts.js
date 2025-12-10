document.getElementById("player-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let time = document.getElementById("time").value;
    let caracteristica = document.getElementById("caracteristica").value;

    let jogadores = {
        velocidade: [
            {nome: "Vinícius Jr", foto: "img/Vini.jpeg", video: "https://www.youtube.com/watch?v=bvZcFqZq8vs"},
            {nome: "Kylian Mbappé", foto: "img/Mbappe.jpeg", video: "https://www.youtube.com/watch?v=bvZcFqZq8vs"}
        ],
        drible: [
            {nome: "Neymar Jr", foto: "img/Neymar.jpeg", video: "https://www.youtube.com/watch?v=Jz5lHppZAr0"},
            {nome: "Ronaldinho", foto: "img/Ronaldinho.jpeg", video: "https://www.youtube.com/watch?v=Jz5lHppZAr0"}
        ],
        finalizacao: [
            {nome: "Cristiano Ronaldo", foto: "img/Ronaldo.jpeg", video: "https://www.youtube.com/watch?v=pa1jPT3YPpY"},
            {nome: "Erling Haaland", foto: "img/Haaland.jpeg", video: "https://www.youtube.com/watch?v=4ZRWqj0IcdE"}
        ],
        forca: [
            {nome: "Van Dijk", foto: "img/VanDijk.jpeg", video: "https://www.youtube.com/watch?v=lYQLOjFIc9E"},
            {nome: "Zlatan Ibrahimovic", foto: "img/Zlatan.jpeg", video: "https://www.youtube.com/watch?v=lYQLOjFIc9E"}
        ],
        passe: [
            {nome: "Kevin De Bruyne", foto: "img/DeBruyne.jpeg", video: "https://www.youtube.com/watch?v=oa5gYv7FpC0"},
            {nome: "Toni Kroos", foto: "img/Kroos.jpeg", video: "https://www.youtube.com/watch?v=oa5gYv7FpC0"}
        ],
        visao: [
            {nome: "Messi", foto: "img/Messi.jpeg", video: "https://www.youtube.com/watch?v=pkBGQW43ZlE"},
            {nome: "Modrić", foto: "img/Modric.jpeg", video: "https://www.youtube.com/watch?v=pkBGQW43ZlE"}
        ],
        defesa: [
            {nome: "Sergio Ramos", foto: "img/SergioRamos.jpeg", video: "https://www.youtube.com/watch?v=lYQLOjFIc9E"},
            {nome: "Rúben Dias", foto: "RubenDias.jpeg", video: "https://www.youtube.com/watch?v=lYQLOjFIc9E"}
        ],
        tecnica: [
            {nome: "Messi", foto: "img/Messi.jpeg", video: "https://www.youtube.com/watch?v=pkBGQW43ZlE"},
            {nome: "Neymar", foto: "img/Neymar.jpeg", video: "https://www.youtube.com/watch?v=Jz5lHppZAr0"}
        ]
    };

    let resultado = jogadores[caracteristica];

    document.getElementById("mensagem").innerText = `Olá ${nome}! Infelizmente, seu time ${time} não é dos mais fortes atualmente, mas o jogador que combina com você provavelmente ajudaria seu time a melhorar!`;

    document.getElementById("jogador1-nome").innerText = resultado[0].nome;
    document.getElementById("jogador1-foto").src = resultado[0].foto;
    document.getElementById("jogador1-video").href = resultado[0].video;

    document.getElementById("jogador2-nome").innerText = resultado[1].nome;
    document.getElementById("jogador2-foto").src = resultado[1].foto;
    document.getElementById("jogador2-video").href = resultado[1].video;

    document.getElementById("resultado").classList.remove("hide");
});

// Dados dos Pokémon (Bulbasaur, Charmander, Squirtle)
const POKEMON_DATA = {
    bulbasaur: {
        nome: "Bulbasaur",
        numero: "#001",
        tipo: "grass",
        descricao: "Um Pokémon bípede e reptiliano. A semente em suas costas armazena energia e cresce com ele.",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    charmander: {
        nome: "Charmander",
        numero: "#004",
        tipo: "fire",
        descricao: "A chama em sua cauda indica a força de sua vida. Se a chama se apagar, a vida de Charmander acaba.",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
    },
    squirtle: {
        nome: "Squirtle",
        numero: "#007",
        tipo: "water",
        descricao: "É um pequeno Pokémon tartaruga. Sua carapaça é usada para se proteger e dar poderosos ataques de água.",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
    }
};

const cartao = document.getElementById('cartao-pokedex');
const nomeElemento = document.getElementById('pkm-nome');
const numeroElemento = document.getElementById('pkm-numero');
const tipoElemento = document.getElementById('pkm-tipo');
const descricaoElemento = document.getElementById('pkm-descricao');
const imagemElemento = document.getElementById('pkm-imagem');

/**
 * Exibe os dados do Pokémon selecionado no cartão e o torna visível.
 * @param {string} pkmKey - A chave do Pokémon (ex: 'bulbasaur', 'charmander').
 */
function exibirPokemon(pkmKey) {
    const data = POKEMON_DATA[pkmKey];

    if (!data) {
        console.error("Dados do Pokémon não encontrados:", pkmKey);
        return;
    }

    // 1. Esconde o cartão para remover a classe 'fadeInScale' e permitir a repetição da animação
    cartao.classList.add('oculto');
    
    // Pequeno atraso para garantir que a classe 'oculto' seja aplicada antes de remover
    setTimeout(() => {
        // 2. Preenche os dados
        nomeElemento.textContent = data.nome;
        numeroElemento.textContent = data.numero;
        descricaoElemento.textContent = data.descricao;
        imagemElemento.src = data.imagem;

        // Limpa classes de tipo antigas e adiciona a nova classe de cor
        tipoElemento.className = 'pkm-tag'; 
        tipoElemento.textContent = data.tipo.toUpperCase();
        tipoElemento.classList.add(data.tipo);

        // 3. Mostra o cartão, ativando a animação de keyframe novamente
        cartao.classList.remove('oculto');
    }, 50); // Ajuste o atraso se necessário
}
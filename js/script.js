const userInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const searchForm = document.getElementById('search-form');
const pokeName = document.getElementById("pokemon-name");
const id = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const spriteContainer = document.getElementById("sprite");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const fetchPokemon = async () => {
    try {
        const pokemonNameOrId = userInput.value.toLowerCase();
        //Get data
        const result = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`);
        const data = await result.json();
        //Set pokemon stats
        pokeName.textContent=`${data.name.toUpperCase()}`;
        id.textContent=`#${data.id}`;
        weight.textContent=`Weight: ${data.weight}`;
        height.textContent=`Height: ${data.height}`;
        hp.textContent=data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;

        //Set pokemon picture
        spriteContainer.innerHTML = `<img
               src="${data.sprites.front_shiny}"
               alt="${data.name} picture"
               class="poke-picture">`;

        //Set Types :
        types.innerHTML = data.types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`).join('');

        
    }
    catch (err) {
        alert("Pokémon not found")
        console.log(`Pokémon "${userInput.value}" not found`);
    }
};

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    fetchPokemon();
});
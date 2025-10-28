/*
Este es un ejemplo de una API REST utilizaNDO UNA LLAMADA CON FETCH, EL CUAL SIRVE PARA OBTENER INFORMCACION sobre el tipo de API, (pokemos) 
y obtener su estructura a partir de crear una funcion call baCK CON UNA PRMESA
*/

const pokeApiURL = "https://pokeapi.co/api/v2/";

//vamos a crear una fncion para crear todos los datos de la pokedex, para esto tenemos que imagiar el orden y la obtencion de los daros

const pokedex = () => {
    //primero necesitamos obtener todas las estadisticas del pokemon, asi que necesitamos crear un diccionario para obtemer cada uno de los elementod del frotn para despues vaciar los daTOS
    
    const pokemonStatsElements ={
        hp: document.getElementById("pokemonStatHp"),
        attack: document.getElementById("pokemonStatAttack"),
        defense: document.getElementById("pokemonStatDefense"),
        specialAttack: document.getElementById("pokemonStatSpecialAttack"),
        specialDefense: document.getElementById("pokemonStatSpecialDefense"),
        speed: document.getElementById("pokemonStatSpeed")
    };

    let currentClassType = null;

    //tiene que cambiar los elementos de la imagen para ello tene,os que crear un template que se encargue de encadnar los datos

    const imageTemplate = "<img class='pokedisplay' src='{imgSrc}' alt='pokedisplay'/>";


    //necesitamos un objeto que se encargue de guardar las rutas de las imagenes que vamos a cambiar dependeiendo si es una busqueda si lo encontro o no al pokemon

    const images = {
        imgPokemonNotFound : "../img/404.png",
        imgLoadingPokemon : "../img/loading.gif"
    };

    //necesitamos una variable que guarde todos los contenedores de la pokedex

    const containers = {
        imagenContainer : document.getElementById("pokedisplay-container"),
        pokemonTypesContainer : document.getElementById("pokemonTypes"),
        pokemonNameElement : document.getElementById("pokemonNameResult"),
        pokemonAbilitiesContainer : document.getElementById("pokemonAbilities"),
        pokemonMovesElement : document.getElementById("pokemonMoves"),
        pokemonIdElement : document.getElementById("pokemonId")
    };

    //necesitamos un objeto de tipo array que guarde los botones con su tipo de referencia 

    const buttons = {
        all : Array.from(document.getElementsByClassName("btn")),
        search : document.getElementById("btnSearch"),
        next : document.getElementById("btnUp"),
        prev : document.getElementById("btnDown")
    };

    //vamos a buscar un pokemon necesitamos una variable que guarde el nombre del pokemon

    const pokemonInput = document.getElementById("pokemonName");

    //La agrupacion de los elementos en este objeto deben de ser una estructura que nos permita crear funciones mas pequeñas qe sin importar el orden puedan obtener cada uno de los datos solicitados

    const processPokemonType = (pokemonData) => {
        //Primero necesitamos obtener el tipo de pokemon, el nombre, y la clase para que se modifique en el html, ya que tenemos eso, tendremos que obtener stats, moves, abilites

        let pokemonTypes = "";
        
        const firstClass = pokemonData.types[0].type.name;
        pokemonData.types.forEach(pokemonTypeData => {
            //necesito obtener la etiqueta de cada cambio
            pokemonTypes += `<span class="pokemon-type-${pokemonTypeData.type.name}">${pokemonTypeData.type.name}</span>`;
        });
        //para poder quitar y cambiar el contenedor dependiendo del tipo tengo que saber a cual pertenece

        if(currentClassType){
            containers.pokemonMovesElement.classList.remove(currentClassType);
            containers.pokemonAbilitiesElement.classList.remove(currentClassType);
        }

        containers.pokemonMovesElement.classList.add(firstClass);
        containers.pokemonAbilitiesContainer.classList.add(firstClass);

        containers.pokemonTypesContainer.innerHTML = pokemonTypes;
    };

    //ahora necesitamos obtener las estadisticas del pokemon

    const processPokemonStats = (pokemonData) => {
        pokemonData.stats?.forEach((pokemonStatData)=> {
            //vamos a evauar si encuentra el nombre de la estadistica para colorarlo en su contenedor correspondiente
            switch(pokemonStatData.stat.name){
                case "hp":
                    pokemonStatsElements.hp.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.hp.style = `background: linear-CanvasGradient(0deg, rgba(0, 118,255, 1)) ${pokemonStatData.base_stat}%, rgba(0, 0, 0, 1) $(pokemonData.base_stat}%);`
                    break;
                case "attack":
                    pokemonStatsElements.attack.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.attack.style = `background: linear-CanvasGradient(0deg, rgba(255, 0, 0, 1)) ${pokemonStatData.base_stat}%, rgba(0, 0, 0, 1) $(pokemonData.base_stat}%);`
                    break;
                case "defense":
                    pokemonStatsElements.defense.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.defense.style = `background: linear-CanvasGradient(0deg, rgba(255, 255, 0, 1)) ${pokemonStatData.base_stat}%, rgba(0, 0, 0, 1) $(pokemonData.base_stat}%);`
                    break;
                case "special-attack":
                    pokemonStatsElements.specialAttack.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.specialAttack.style = `background: linear-CanvasGradient(0deg, rgba(255, 0, 255, 1)) ${pokemonStatData.base_stat}%, rgba(0, 0, 0, 1) $(pokemonData.base_stat}%);`
                    break;
                case "special-defense":
                    pokemonStatsElements.specialDefense.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.specialDefense.style = `background: linear-CanvasGradient(0deg, rgba(0, 255, 0, 1)) ${pokemonStatData.base_stat}%, rgba(0, 0, 0, 1) $(pokemonData.base_stat}%);`
                    break;
                case "speed":
                    pokemonStatsElements.speed.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.speed.style = `background: linear-CanvasGradient(0deg, rgba(255, 165, 0, 1)) ${pokemonStatData.base_stat}%, rgba(0, 0, 0, 1) $(pokemonData.base_stat}%);`
                    break;
            }
        })
    }
}
import pokemon from "../../models/pokemon";
import { pokemonFormat } from "./globalStateFormat";
import { typesPokemon } from "./typesPokemon";
import { battleVariables } from "@/app/battle/battle";
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const dimension = {
  height: 550,
  width: 1000,
  margin: 5,
};

export const valuesPokemon = {
  levelsTrainers: {
    easy: {
      probability: 0,
      addFractionLevel: 1,
      baseLevel: 0.9,
      restriction: "all",
    },
    equal: {
      probability: 0.5,
      addFractionLevel: 1.6,
      baseLevel: 1,
      restriction: "all",
    },
    hard: {
      probability: 0.77,
      addFractionLevel: 2.5,
      baseLevel: 1.2,
      restriction: "pokerfull",
    },
    master: {
      probability: 0.99,
      addFractionLevel: 4,
      baseLevel: 3,
      restriction: "legendary",
    },
  },
  values: {
    expedition: {
      big: { value: 100, sizeTeam: 4 },
    },
  },
  
  componentBattle: {
    limitSpeedL: {
      max: 20,
      min: 5,
    },
    areaBattlefield: {
      size: {
        width: dimension.width,
        height: dimension.height,
      },
    },
    groupCards: {
      size: 8,
      shortCuts: {
        cards: [
          { key: "0", value: 0 },
          { key: "1", value: 1 },
          { key: "2", value: 2 },
          { key: "3", value: 3 },
          { key: "4", value: 4 },
          { key: "5", value: 5 },
          { key: "6", value: 6 },
          { key: "7", value: 7 },
          { key: "8", value: 8 },
          { key: "9", value: 9 },
        ],
        endPhase: [{ key: " ", value: 9000 }],
      },
      dimension: {
        height: 120,
        width: 80,
      },
      maxPower: 500,
      minPower: 200,
    },
    size: {
      team: 5,
      pokemonBaseSize: 30,
      tailInGame: 30,
    },
    initialPosition: {
      user: {
        y: (1 * dimension.height) / 2,
        x: (1 * dimension.width) / 8,
        rotation: 0,
      },
      rival: {
        y: (1 * dimension.height) / 2,
        x: (8 * dimension.width) / 8,
        rotation: 0,
      },
    },
  },
  componentSentToOak: {
    baseValue: {
      coins: 5,
      pokeball: 2,
      box: 0,
      baseValuePointsToBox: 30,
      exp: 25,
    },
  },
  componentRenderCards: {
    sizeRender: 8,
    initialIndex: 1,
  },
  componentBox: {
    size: 16,
  },
  toleranceShiny: 5,
  maxNumberPokedex: 1007, //Valor maximo de la pokedex para buscar pokemones
  minNumberPokedex: 1, //valor minimo de la pokedex para buscar pokemones
  maxLevelTrainer: 100, //nivel maximo del entrenador
  minLevelTrainer: 1, //nivel minimo del entrenador
  maxLevelPokemon: 100, //nivel maximo de un pokemon
  minLevelPokemon: 5, //nivel minimo de un pokemon
  baseStackLevelPokemon: 10, //base de los Stack de un pokemon para subir por nive //! se usa en pokemonGet.stackLevel
  probabilityTrainer: {
    powerfull: 20, //anillo para hallar pokemones poderosos
    legendary: 90, // anillo para hallar pokemones legendarios
  },
  probabilitiLevel: {
    epic: { value: 30, probability: 0.99 },
    ultra: { value: 15, probability: 0.8 },
    rare: { value: 10, probability: 0.7 },
    comun: { value: 5, probability: 0.5 },
  },
  probabilitiScale: {
    epic: { value: 30, probability: 0.99 },
    ultra: { value: 15, probability: 0.9 },
    rare: { value: 10, probability: 0.8 },
    comun: { value: 5, probability: 0.5 },
  },
  listWarningPokemon: {
    pokerfull: {
      requireLevel: 20,
      list: [
        //lista de pokemon poderosos
        445, 289, 784, 376, 149, 248, 373, 746, 635, 448, 130, 94, 464, 212,
        214, 625, 530, 141, 139, 142, 967, 969, 970, 977,
      ],
    },

    legendary: {
      requireLevel: 90,
      list: [
        // lista de pokemones legendarios
        144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 251, 377, 378, 379,
        380, 381, 382, 383, 384, 385, 386, 480, 481, 482, 483, 484, 485, 486,
        487, 488, 489, 490, 491, 492, 493, 494, 638, 639, 640, 641, 642, 643,
        644, 645, 646, 647, 648, 649, 716, 717, 718, 719, 720, 721, 785, 786,
        787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800,
        801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814,
        815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828,
        829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842,
        843, 844, 845, 846, 847, 848, 849, 850, 883, 887, 888, 889, 984, 990,
        991, 992, 993, 994, 995, 1006, 1007,
      ],
    },
  },
  inicialesPokemon: {
    Kanto: [1, 4, 7],
    Johto: [152, 155, 158],
    Hoenn: [252, 255, 258],
    Sinnoh: [387, 390, 393],
    Teselia: [495, 498, 501],
    Kalos: [650, 653, 656],
    Alola: [722, 725, 728],
    Galar: [810, 813, 816],
    Paldea: [906, 909, 912],
  },
  baseStats: [
    "Heald",
    "Attack",
    "Deffense",
    "SpecialAttack",
    "SpecialDeffense",
    "Speed",
  ],
};

export const pokemonGet = {

  
  shiny: () => {
    const tolerance = valuesPokemon.toleranceShiny;
    const value = Math.random() * tolerance;
    if (value > tolerance - 0.1 && value <= tolerance) {
      console.log("SHINY", value);
      return 1;
    } else {
      //console.log(value);
      return 0;
    }
  },
  genre: () => {
    const value = Math.random();
    if (value > 0.5) {
      return 1;
    } else {
      return 0;
    }
  },
  noPokedex: (levelTrainer = 1, usethisNumber = 0) => {
    if (usethisNumber > 0) {
      return usethisNumber;
    }
    let noPokedex =
      Math.round(Math.random() * valuesPokemon.maxNumberPokedex) +
      valuesPokemon.minNumberPokedex;

    //console.log("nopokedex:", noPokedex, "levelTrainer", levelTrainer);

    if (valuesPokemon.listWarningPokemon.pokerfull.list.includes(noPokedex)) {
      if (
        levelTrainer >= valuesPokemon.listWarningPokemon.pokerfull.requireLevel
      ) {
        const randomValue = Math.random() * valuesPokemon.maxLevelTrainer;
        if (randomValue <= levelTrainer) {
          return noPokedex;
        } else {
          return pokemonGet.noPokedex(levelTrainer);
        }
      } else {
        return pokemonGet.noPokedex(levelTrainer);
      }
    } else if (
      valuesPokemon.listWarningPokemon.legendary.list.includes(noPokedex)
    ) {
      if (
        levelTrainer >= valuesPokemon.listWarningPokemon.legendary.requireLevel
      ) {
        const randomValue = Math.random() * valuesPokemon.maxLevelTrainer;
        if (randomValue <= levelTrainer) {
          return noPokedex;
        } else {
          return pokemonGet.noPokedex(levelTrainer);
        }
      } else {
        return pokemonGet.noPokedex(levelTrainer);
      }
    }
    return noPokedex;
  },
  levelRival: (trainer, general) => {
    let levelpokemon = trainer.level;

    if (general !== undefined) {
      const dificult = general?.dificult;
      const diferenceLevel =
        valuesPokemon.componentBattle.dificult[dificult].levelDifference;
      const levelDifferenceLeague =
        valuesPokemon.componentBattle.dificult[dificult].levelDifferenceLeague;

      console.log("in level pokemon", trainer);
      levelpokemon =
        levelpokemon +
        Math.round(Math.random() * (levelpokemon + diferenceLevel)) +
        levelDifferenceLeague * trainer.league;
    }
    return levelpokemon;
  },
  level: (levelTrainer = 1, difficult = 0) => {
    const probability = Math.random();
    let levelPokemon = levelTrainer;
    const keysProbability = Object.keys(valuesPokemon.probabilitiLevel);
    keysProbability.map((key) => {
      if (probability > valuesPokemon.probabilitiLevel[key].probability) {
        levelPokemon = Math.round(
          Math.random() *
            (levelPokemon * difficult +
              levelTrainer +
              valuesPokemon.probabilitiLevel[key].value)
        );
      }
      return levelPokemon;
    });
    return Math.round(
      Math.random() * (levelPokemon + levelPokemon * difficult)
    );
  },
  stackLevel: (levelPokemon) => {
    return (
      valuesPokemon.baseStackLevelPokemon +
      (levelPokemon * valuesPokemon.baseStackLevelPokemon) / 4
    );
  },
  type: (value, types) => {
    //console.log(types);

    if (types.length === 1) {
      return capitalizeFirstLetter(types[0].type.name);
    } else {
      return capitalizeFirstLetter(types[value].type.name);
    }
  },
  scale: (levelTrainer = 1) => {
    const probability = Math.random();
    let scalePokemon = 1;
    const keysProbability = Object.keys(valuesPokemon.probabilitiScale);
    keysProbability.map((key) => {
      if (probability > valuesPokemon.probabilitiScale[key].probability) {
        scalePokemon = Math.round(
          Math.random() *
            (levelTrainer + valuesPokemon.probabilitiScale[key].value)
        );
      }
      return scalePokemon;
    });
    return scalePokemon;
  },
};

export const generate = {

  bioma: () => {
    const biomas = Object.keys(typesPokemon);
    let selectorBioma = Math.round(Math.random() * biomas.length);
    if (selectorBioma >= biomas.length || selectorBioma < 1) {
      return generate.bioma();
    }
    return biomas[selectorBioma];
  },

  gameOver: (state, stateBttle) => {
    const newState = { ...state };

    //! newState.battleField?.pokemonSelectedRival aparece como undefinded y no podemos hacer la validacion pa terminar el combate
    console.log("in validation game.........................A.");
    console.log("stateBattle  :", stateBttle);
    console.log("New State  :", newState.battlefield);
    console.log("battlefield  :", newState);
    console.log("in validation game.........................Z.");

    // if (
    //   stateBttle.pokemonRival.dataPokemon === undefined ||
    //   stateBttle.pokemonUser.dataPokemon === undefined
    // ) {
    //   stateBttle.pokemonRival === "GameOver!!!"
    //     ? (newState.phase = "user-win")
    //     : null;
    //   stateBttle.pokemonUser === "GameOver!!!"
    //     ? (newState.phase = "rival-win")
    //     : null;
    //   if (
    //     stateBttle.pokemonRival === "GameOver!!!" &&
    //     stateBttle.pokemonUser === "GameOver!!!"
    //   ) {
    //     newState.phase = "draw";
    //   }
    // }

    newState.battlefield?.pokemonSelectedRival === "GameOver!!!"
      ? (newState.phase = "user-win")
      : null;
    newState.battlefield?.pokemonSelectedUser === "GameOver!!!"
      ? (newState.phase = "rival-win")
      : null;

    newState.battlefield?.pokemonSelectedRival === "GameOver!!!" &&
    newState.battlefield?.pokemonSelectedUser === "GameOver!!!"
      ? (newState.phase = "draw")
      : null;

    return newState;
  },
  SelectorPokemonTeamRival: (team, count = 0) => {
    if (count === 50) {
      return "GameOver!!!";
    }
    let index = Math.round(Math.random() * team.length);
    if (index >= team.length || index < 0) {
      index = 0;
    }
    //console.log("index  :", index, team[index]);
    if (team[index].alive) {
      console.log("Selector _________", team[index]);
      return team[index];
    } else {
      return generate.SelectorPokemonTeamRival(team, count + 1);
    }
  },
  rivalLevel: (user, addLevel = 0) => {
    const porbability = Math.random();
    let levelRival = user.level;
    //levelRival=60;
    let dificult = "";
    Object.keys(valuesPokemon.levelsTrainers).map((level) => {
      //console.log('level', level )
      if (valuesPokemon.levelsTrainers[level].probability <= porbability) {
        dificult = level;
        levelRival = Math.round(
          levelRival * valuesPokemon.levelsTrainers[level].baseLevel +
            (levelRival / 1.5) *
              (Math.random() *
                valuesPokemon.levelsTrainers[level].addFractionLevel)
        );
      }
    });

    //console.log('prob',porbability, '...  level', levelRival ,user.level )
    return { levelRival: levelRival + addLevel, dificult };
  },
  getSizePokemon:(pokemon)=>{
    let size = pokemon.height* battleVariables.size.pokemon.scale.base
    if(size<battleVariables.size.pokemon.scale.min){
      size = battleVariables.size.pokemon.scale.min
    }
    if(size>battleVariables.size.pokemon.scale.max){
      size= battleVariables.size.pokemon.scale.max
    }
    return size;
  },
  getStat: (pokemon, typeStack) => {
    //console.log("in generate", pokemon, typeStack);
    if (pokemon !== undefined) {
      let nivel = pokemon.level;
      let statBase = pokemon[`base${typeStack}`];
      let iv = pokemon[`scale${typeStack}`];
      //iv = 30;
      //iv = 1;

      let pe = pokemon[`effort${typeStack}`];
      let naturaleza = 1;

      //console.log("nivel:", nivel);
      //console.log("statBase:", statBase);
      //console.log("pe:", pe);
      //console.log("iv:", iv);

      if (typeStack === "Heald") {
        // Cálculo de HP
        const stat =
          5 * ((nivel / 10) * ((statBase + iv) * 2 + iv + pe)) + nivel;

        return Math.round(stat);
      } else {
        // Cálculo de otras estadísticas (como ataque y defensa)
        let stat = 5 + (nivel / 100) * (statBase * iv * 2 + iv + pe) + nivel;

        if (
          typeStack === "Speed" &&
          stat > valuesPokemon.componentBattle.limitSpeedL.max
        ) {
          stat = valuesPokemon.componentBattle.limitSpeedL.max;
        }
        if (
          typeStack === "Speed" &&
          stat < valuesPokemon.componentBattle.limitSpeedL.min
        ) {
          stat = valuesPokemon.componentBattle.limitSpeedL.min;
        }

        return Math.round(stat);
      }
    }
  },
  getStackReference: (pokemon, typeStack) => {
    //console.log(pokemon, typeStack);

    let nivel = pokemon.level;
    let statBase = pokemon[`base${typeStack}`];
    let iv = 30;
    //iv = 30;
    //iv = 1;
    let pe = pokemon[`effort${typeStack}`];
    let naturaleza = 1;

    // console.log("nivel:", nivel);
    // console.log("statBase:", statBase);
    // console.log("pe:", pe);
    // console.log("iv:", iv);

    if (typeStack === "Heald") {
      // Cálculo de HP
      const stat = 5 * ((nivel / 10) * ((statBase + iv) * 2 + iv + pe)) + nivel;
      return Math.round(stat);
    } else {
      // Cálculo de otras estadísticas (como ataque y defensa)
      const stat = 5 + (nivel / 100) * (statBase * iv * 2 + iv + pe) + nivel;

      //console.log(stat , typeStack)
      return Math.round(stat);
    }
  },

  newPokemon: (dataPokemon, trainer, general) => {
    let height = Math.round();

    //console.log("Trainer in generate.newPokemon", dataPokemon,trainer)
    const levelPokemon = pokemonGet.level(trainer.level);
    const newPokemon = { ...pokemonFormat };
    newPokemon.shiny = pokemonGet.shiny();
    newPokemon.noPokedex = pokemonGet.noPokedex(trainer.level, dataPokemon.id);
    newPokemon.name = dataPokemon.name;
    newPokemon.trainer = trainer._id; //la data que llego del registro del nuevo usuario
    newPokemon.favorite = false;
    newPokemon.maxStack4level = pokemonGet.stackLevel(levelPokemon);
    newPokemon.experience = pokemonGet.stackLevel(levelPokemon);
    newPokemon.actualStack = 0;
    //newPokemon.level = pokemonGet.levelRival(trainer, general) || pokemonGet.level(trainer.level) + 1;
    newPokemon.level = pokemonGet.level(trainer.level) + 1;
    newPokemon.weight = (dataPokemon.weight * 0.1).toFixed(3);
    newPokemon.height = (dataPokemon.height * 0.1).toFixed(3);
    newPokemon.type1 = pokemonGet.type(0, dataPokemon.types);
    newPokemon.type2 = pokemonGet.type(1, dataPokemon.types);
    //*scale
    newPokemon.scaleHeald = pokemonGet.scale(trainer.level);
    newPokemon.scaleAttack = pokemonGet.scale(trainer.level);
    newPokemon.scaleDeffense = pokemonGet.scale(trainer.level);
    newPokemon.scaleSpecialAttack = pokemonGet.scale(trainer.level);
    newPokemon.scaleSpecialDeffense = pokemonGet.scale(trainer.level);
    newPokemon.scaleSpeed = pokemonGet.scale(trainer.level);
    trainer.level;
    //*effort
    newPokemon.effortHeald = dataPokemon.stats[0].effort;
    newPokemon.effortAttack = dataPokemon.stats[1].effort;
    newPokemon.effortDeffense = dataPokemon.stats[2].effort;
    newPokemon.effortSpecialAttack = dataPokemon.stats[3].effort;
    newPokemon.effortSpecialDeffense = dataPokemon.stats[4].effort;
    newPokemon.effortSpeed = dataPokemon.stats[5].effort;
    //*base
    newPokemon.baseHeald = dataPokemon.stats[0].base_stat;
    newPokemon.baseAttack = dataPokemon.stats[1].base_stat;
    newPokemon.baseDeffense = dataPokemon.stats[2].base_stat;
    newPokemon.baseSpecialAttack = dataPokemon.stats[3].base_stat;
    newPokemon.baseSpecialDeffense = dataPokemon.stats[4].base_stat;
    newPokemon.baseSpeed = dataPokemon.stats[5].base_stat;

    if (newPokemon.shiny === 1) {
      console.log("No Pokedex", newPokemon.noPokedex);
    }
    return newPokemon;
  },
};

export const imagesPokemon = {
  official: (noPokedex = 1, shiny = false) => {
    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/754.png
    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/555.png
    const noPokedexOfficial = "";
    console.log();
    return shiny
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${noPokedex}.png`
      : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${noPokedex}.png` ||
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${noPokedex}.png`;
  },

  pixel: (noPokedex = 1, shiny = 0) => {
    return shiny
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${noPokedex}`
      : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${noPokedex}.png`;
  },
};

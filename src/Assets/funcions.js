import pokemon from "../../models/pokemon";
import { pokemonFormat } from "./globalStateFormat";

export const valuesPokemon = {
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
        214, 625, 530, 141, 139, 142,
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
        843, 844, 845, 846, 847, 848, 849, 850,
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
};

export const pokemonGet = {
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

    console.log("nopokedex:", noPokedex, "levelTrainer", levelTrainer);

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
  level: (levelTrainer = 1) => {
    const probability = Math.random();
    let levelPokemon = levelTrainer;
    const keysProbability = Object.keys(valuesPokemon.probabilitiLevel);
    keysProbability.map((key) => {
      if (probability > valuesPokemon.probabilitiLevel[key].probability) {
        levelPokemon = Math.round(
          Math.random() *
            (levelTrainer + valuesPokemon.probabilitiLevel[key].value)
        );
      }
      return levelPokemon;
    });
    return Math.round(Math.random() * levelPokemon);
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
      return types[0].type.name;
    } else {
      return types[value].type.name;
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
  newPokemon: (dataPokemon, trainer) => {
    //console.log("Trainer in generate.newPokemon", trainer.level)
    const levelPokemon = pokemonGet.level(trainer.level);
    const newPokemon = pokemonFormat;
    newPokemon.shiny = pokemonGet.genre();
    newPokemon.noPokedex = pokemonGet.noPokedex(trainer.level, dataPokemon.id);
    newPokemon.name = dataPokemon.name;
    newPokemon.trainer = trainer._id; //la data que llego del regiustro del nuevo usuario
    newPokemon.favorite = true;
    newPokemon.maxStack4level = pokemonGet.stackLevel(levelPokemon);
    newPokemon.actualStack = 0;
    newPokemon.level = pokemonGet.level(trainer.level);
    newPokemon.weight = dataPokemon.weight;
    newPokemon.height = dataPokemon.height;
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

    return newPokemon;
  },
};

export const imagesPokemon = {
  official: (noPokedex = 1, shiny = false) => {
    return shiny
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny${noPokedex}.png`
      : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${noPokedex}.png`;
  },

  pixel: (noPokedex = 1, shiny = 0) => {
    return shiny
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${noPokedex}`
      : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${noPokedex}.png`;
  },
};

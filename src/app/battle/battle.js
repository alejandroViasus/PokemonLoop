import { valuesPokemon, pokemonGet } from "@/Assets/funcions";
import { trainers } from "@/Assets/trainers";
import { typesPokemon } from "@/Assets/typesPokemon";
import { generate as generateFunction } from "@/Assets/funcions";

//! ---------------------------------------GET CARDS----------------------
export const getCards = {
  direction: (setAxis, setDirection) => {
    if (setDirection) {
      return setDirection;
    } else {
      const axis = valuesPokemon.componentBattle.directions[setAxis];
      const selector = Math.round();
      if (selector < 0.5) {
        return axis[0];
      } else {
        return axis[1];
      }
    }
  },
  group: () => {
    const sizeGroup = valuesPokemon.componentBattle.size.cardsDirection;
    const groupCards = [];
    for (let i = 0; i < sizeGroup; i++) {
      const cardDirection = forms.cardDirection();
      groupCards.push(cardDirection);
    }
    return groupCards;
  },
};
//! ---------------------------------------GENERATE----------------------
export const generate = {
  stats: (team) => {
    const stats = [];
    const keysStats=valuesPokemon.baseStats
    team?.map((pokemon)=>{
      const valueStats={}
      keysStats.map((stat)=>{
        valueStats[stat]=generateFunction.getStackReference(pokemon,stat)
      })
      valueStats.HealdReference=generateFunction.getStackReference(pokemon,'Heald')
      valueStats.HealdPercentage=pokemon.heald
      stats.push({...valueStats})
    })
    //console.log('stats....',stats )
    return stats
  },
  selecRandomAlivePokemon: (team, count = []) => {
    let selectorId = 0;
    if (team !== undefined) {
      const id = Math.round(Math.random() * team.length - 1);
      if (team[id]?.heald <= 0) {
        count.push(id);
        console.log(count);
        return count.length >= 5 ? -1 : generate.selecPokemon(team, count);
      } else {
        return id;
      }
    }

    return selectorId;
  },
  fetchDataTeam: async (state) => {
    const newState = { ...state };

    return newState;
  },

  teamRival: (state, trainer) => {
    //console.log(state, trainer);
    const dataTrainer = state[trainer].dataTrainer;
    const noPokedexTeamPokemon = [];
    const sizeTeam = valuesPokemon.componentBattle.size.team;
    for (let i = 0; i < sizeTeam; i++) {
      const noPokedex = pokemonGet.noPokedex(dataTrainer.level);
      noPokedexTeamPokemon.push(noPokedex);
    }
    //console.log(dataTrainer.level, noPokedexTeamPokemon);
    return noPokedexTeamPokemon;
  },

  theme: () => {
    const typesKeys = Object.keys(typesPokemon);
    let randomType = Math.round(Math.random() * typesKeys.length);
    return randomType === 0 ? generate.theme() : typesKeys[randomType];
  },
  imageTrainer: (image) => {
    if (image) {
      return image;
    } else {
      const keysTrainers = Object.keys(trainers);
      let randomImage = Math.round(Math.random() * (keysTrainers.length - 1));
      //console.log(randomImage);
      return randomImage === 0
        ? generate.imageTrainer()
        : keysTrainers[randomImage];
    }
  },

  level: (state, oponent = "user") => {
    let level = 5;
    if (state && state[oponent].dataTrainer._id !== 0) {
      const dataDificult =
        valuesPokemon.componentBattle.dificult[
          state?.general?.dificult || "medium"
        ];
      //console.log('level..............................: ', dataDificult);
      const baseLevel = state[oponent].dataTrainer.level;
      const baseLeague = state[oponent].dataTrainer.league;
      //console.log("in level", state[oponent]);
      if (state[oponent] !== undefined) {
        level =
          baseLevel +
          Math.ceil(Math.random() * dataDificult.levelDifference) +
          baseLeague * dataDificult.levelDifferenceLeague;
      }
      return level < 0 ? 5 : level;
    }
  },

  getUser: (dataTrainer, trainer) => {
    // aqui se crean los parametros de cada entrenador [usuario , y rival] ;para la data del rival se toma como base los datos del usuario y dependiendo de la dificultad establecida anteriormente se cambian parametros como nivel del [nivel del rival]
    const newRival = { ...dataTrainer };
    if (trainer === "rival") {
      newRival._id = `rival_${newRival._id}`;
      newRival.gametag = `rival_${newRival.gametag}`;
      newRival.email = `rival_${newRival.email}`;
      newRival.email = `rival_${newRival.email}`;
    }
    return newRival;
  },
  dificult: () => {
    const dificultKeys = Object.keys(valuesPokemon.componentBattle.dificult);
    let dificult = "";
    const probability = Math.random();
    dificultKeys.map((dificultItem) => {
      valuesPokemon.componentBattle.dificult[dificultItem].minProbability <=
      probability
        ? (dificult = dificultItem)
        : null;
    });
    //console.log(dificultKeys,'a',probability,dificult)
    return dificult;
  },
};

//! ---------------------------------------FORMS----------------------

export const forms = {
  cardDirection: (directionX, directionY) => {
    const power = valuesPokemon.componentBattle.poverMove.max;
    return {
      typeAttack: valuesPokemon.componentBattle.typeAttack(),
      powerMove: Math.round(power / 4 + Math.random() * ((3 * power) / 4)), //25 a 100
      x: {
        direction: getCards.direction("x", directionX ? directionX : null), // Left or rigth
        aceleration: Math.random(), // 0.1 to 1
      },
      y: {
        direction: getCards.direction("y", directionY ? directionY : null), // up or down
        aceleration: Math.random(), // 0.1 to 1
      },
    };
  },
};

//! ------------------------------------------- INITIAL STATE
export const initialStateBattle = (state) => {
  console.log("initialState");
  const oponents = valuesPokemon.componentBattle.oponents.trainers;
  const phases = valuesPokemon.componentBattle.phases.values;
  const initialState = {
    phase: {},

    general: {
      dificult: generate.dificult(),
      bioma:generateFunction.bioma(),
      time:{
        timerPhaseSelector:valuesPokemon.componentBattle.time.PhaseSelectionCardMove,
        delay: valuesPokemon.componentBattle.time.fractionMove
      }
    },
    game:{
      turn: Math.round(Math.random() * 2.4),
      user:{
        cardSelect:0,
        idpokemonSelect:0,
      },
      rival:{
        cardSelect:0,
        idpokemonSelect:0,
      },
      
    }
  };

  phases.map((phase) => {
    initialState.phase[phase] = "";
    if (phase === valuesPokemon.componentBattle.phases.values[1]) {
      if (state.teamUser.length === 5) {
        initialState.phase[phase] = "Yes";
      }
    }
  });

  oponents.map((trainer) => {
    initialState[trainer] = {
      dataTrainer: generate.getUser(state.user, trainer),
      cardsDirection: getCards.group(), //? con las cardsDirection generaremos los posibles movimientos que podra hacer el pokemon del usuario NOTA : estas cartas cambiaran con cada turno
      teamPokemon: state.teamUser,
    };
    if (trainer === "rival") {
      initialState[trainer].dataTrainer.pictureTrainer =
        generate.imageTrainer();

      initialState[trainer].dataTrainer.theme = generate.theme();
      initialState[trainer].dataTrainer.level = generate.level(initialState);
      initialState[trainer].noPokedexTeamPokemon = generate.teamRival(
        initialState,
        trainer
      );
    }
  });

  return initialState;
};
import { valuesPokemon, pokemonGet } from "@/Assets/funcions";
import { trainers } from "@/Assets/trainers";
import { typesPokemon } from "@/Assets/typesPokemon";
import { generate as generateFunction } from "@/Assets/funcions";

export const battle = {
  locomotion:{
    stepVectorDirection:(state)=>{
      const newState={...state}
      const add=valuesPokemon.componentBattle.limitSpeedL.min
      newState.position.left+=(add*state.vector.components.x)
      newState.position.rigth+=(add*state.vector.components.x+state.sizePokemon)
      newState.position.top+=(add*state.vector.components.y)
      newState.position.botton+=(add*state.vector.components.y+state.sizePokemon)

      if(newState.position.left<=newState.dimensionBatteField.left){
        newState.position.left=newState.dimensionBatteField.left
        //newState.vector.components.x= Math.abs(newState.vector.components.x)
      }
      if((newState.position.left+newState.sizePokemon)>=newState.dimensionBatteField.rigth){
        newState.position.left=newState.dimensionBatteField.rigth-newState.sizePokemon
        //newState.vector.components.x=Math.abs(newState.vector.components.x)*-1
      }
      
      if(newState.position.top<=newState.dimensionBatteField.top){
        newState.position.top=newState.dimensionBatteField.top
        //newState.vector.components.y=Math.abs(newState.vector.components.y)
      }
      if(newState.position.top+newState.sizePokemon>=newState.dimensionBatteField.bottom){
        newState.position.top=newState.dimensionBatteField.bottom-newState.sizePokemon
        //newState.vector.components.y=Math.abs(newState.vector.components.y)*-1
      }
      newState.vector.powerActual-=1;
      if(newState.vector.powerActual<=0){
        newState.vector.powerActual=0
      }

     
      
      // newState.position.left+=(state.speed*state.vector.components.x)
      // newState.position.rigth+=(state.speed*state.vector.components.x)+state.sizepokemon
      // newState.position.top+=(state.speed*state.vector.components.y)
      // newState.position.botton+=(state.speed*state.vector.components.y)+state.sizepokemon
      return newState
    }
  },
  get: {
    sizepokemon:(pokemon)=>{
       return valuesPokemon.componentBattle.size.pokemonBaseSize*pokemon.height
    },
    initialPositionPokemon:(user)=>{
      const position={
        pokemon:valuesPokemon.componentBattle.initialPosition[user]
      }
      
      for(let i=0; i<valuesPokemon.componentBattle.size.tailInGame; i++){
        let tail = `tail${i}`
        position[tail]=valuesPokemon.componentBattle.initialPosition[user]
      }
      return position
    },
    randomIndexPokemonSelector:(teamPokemon,countPokemon=[])=>{
      const selectorPokemon=Math.round(Math.random()*(teamPokemon.length-1))
      return selectorPokemon
    },
    randomSelectorCardVector: (index) => {
      if (index) {
        return index;
      } else {
        return Math.round(
          Math.random() * (valuesPokemon.componentBattle.groupCards.size - 1)
        );
      }
    },
    cardVector: () => {
      const powerValue= valuesPokemon.componentBattle.groupCards.minPower +
      Math.round(
        Math.random() * valuesPokemon.componentBattle.groupCards.maxPower
      )
      const card = {
        power:powerValue,
        powerActual:powerValue, 
        typeAttack: Math.random() > 0.5 ? "Special" : "Normal",
        type: Math.random() > 0.5 ? 1 : 2,
        angle: Math.round(360 * Math.random()),
        angleInRadians: 0,
        components: {
          x: 0,
          y: 0,
        },
      };

      card.angleInRadians = (card.angle * Math.PI) / 180;
      card.components.x = Math.cos(card.angleInRadians);
      card.components.y = Math.sin(card.angleInRadians);

      return card;
    },
    randomGroupCardsVector: () => {
      let groupCard = [];
      for (let i = 0; i < valuesPokemon.componentBattle.groupCards.size; i++) {
        const cardVector = battle.get.cardVector();
        groupCard.push({ ...cardVector });
      }
      return groupCard;
    },
    pokeRivaldex: (level, listOfPokedex) => {
      if (listOfPokedex) {
        return listOfPokedex;
      } else {
        const teamPokemon = [];
        for (let i = 0; i < valuesPokemon.componentBattle.size.team; i++) {
          const pokedex = pokemonGet.noPokedex(level);
          teamPokemon.push(pokedex);
        }
        return teamPokemon;
      }
    },
    createRival: (user, dificult) => {
      //console.log("User", user);
      const rival = { ...user };
      rival._id = `_rival${rival._id}`;
      rival.level = battle.get.level(user, dificult);
      rival.pictureTrainer = battle.get.pictureTrainer();
      rival.gametag = `${rival.pictureTrainer} (${dificult})`; // nombre de imagen + dificultad
      rival.theme = trainers[rival.pictureTrainer].typePreference;
      return rival;
    },
    pictureTrainer: () => {
      const keysTrainers = Object.keys(trainers);
      let randomNumber = Math.round(Math.random() * (keysTrainers.length - 1));
      if (randomNumber > 0) {
        return keysTrainers[randomNumber];
      } else {
        return battle.get.pictureTrainer();
      }
    },
    level: (user, dificult) => {
      let baseLevel =
        //console.log('levl  :',dificult, user)
        user?.level * valuesPokemon.levelsTrainers[dificult].baseLevel;
      let addFraction =
        user.level * valuesPokemon.levelsTrainers[dificult].addFractionLevel;
      //console.log('levl  :',baseLevel, addFraction,user.level,valuesPokemon.levelsTrainers[dificult].addFractionLevel)
      const levelRival =
        Math.random() > 0.3
          ? Math.round(baseLevel + addFraction)
          : Math.round(baseLevel - addFraction);
      return levelRival;
    },
    dificult: () => {
      const selector = Math.random();
      const keysLevelTrainers = Object.keys(valuesPokemon.levelsTrainers);
      let dificult = keysLevelTrainers[0];
      keysLevelTrainers.map((level, index) => {
        if (valuesPokemon.levelsTrainers[level].probability <= selector) {
          dificult = keysLevelTrainers[index];
        }
      });
      //console.log("level", selector, dificult);
      return dificult;
    },
  },

  teamPokemon: {},

  phases: ["checkInTeam", "selectPokemon"],
  inGame: ["selectionMode", "selectionCard", "inBattle"],
  keyValidations: ["team", "mode"],
  initialState: (globalState) => {
    const initialState = {
      general: {},
      validation: {},
      trainers: {},
      game: {
        orderPositionTurnPokemon: [], //Orden de los pokemon por velocidad stats final
      },
      team: {
        rival: [],
        user: globalState.teamUser,
      },
      cardsVector: {},
      selectorPokemon: {
        rival: 0,
        user: 0,
      },
      selectorCardVector: {
        rival: battle.get.randomSelectorCardVector(),
        user: battle.get.randomSelectorCardVector(),
      },
      position:{
        user:battle.get.initialPositionPokemon('user'),
        rival:battle.get.initialPositionPokemon('rival'),
      }
    };
    initialState.phase = battle.phases[0];
    initialState.inGame = battle.inGame[0];

    battle.keyValidations.map((validation) => {
      if (validation === battle.keyValidations[0]) {
        initialState.validation[validation] = globalState.teamUser.length;
      } else {
        initialState.validation[validation] = "";
      }
    });


    console.log("globalState :", globalState);

    initialState.trainers.user = globalState.user;
    initialState.general.dificult = battle.get.dificult();
    initialState.trainers.rival = battle.get.createRival(
      initialState.trainers.user,
      initialState.general.dificult
    );
    initialState.pokeRivaldex = battle.get.pokeRivaldex(
      initialState.trainers.rival.level
    );
    initialState.cardsVector.user = battle.get.randomGroupCardsVector();
    initialState.cardsVector.rival = battle.get.randomGroupCardsVector();

    //const noPokemdex=pokemonGet.noPokedex

    return initialState;
  },
};

//?--------------------------------------------------------------------------------

// //! ---------------------------------------GET CARDS----------------------

// export const getCards = {
//   direction: (setAxis, setDirection) => {
//     if (setDirection !== null) {
//       return setDirection;
//     } else {
//       const axis = valuesPokemon.componentBattle.directions[setAxis];
//       const selector = Math.round(Math.random() * 1);
//       //console.log(selector , axis[selector])
//       return axis[selector];
//     }
//   },
//   group: () => {
//     const sizeGroup = valuesPokemon.componentBattle.size.cardsDirection;
//     const groupCards = [];
//     for (let i = 0; i < sizeGroup; i++) {
//       const cardDirection = forms.cardDirection();
//       groupCards.push(cardDirection);
//     }
//     return groupCards;
//   },
// };
// //! ---------------------------------------GENERATE----------------------
// export const generate = {
//   vectorMove: (deg) => {
//     const degRad = (deg * Math.PI) / 180;

//     const vectorMove = {
//       x: Math.cos(degRad),
//       y: Math.sin(degRad),
//     };

//     //console.log(vectorMove)
//     return vectorMove;
//   },
//   degDirection: (card) => {
//     //! hallamos el angulo del vector para (forms.cardDirection)
//     const directionX = card.x.direction;
//     const directionY = card.y.direction;
//     //console.log(directionX,directionY)
//     let additionalDeg =
//       directionX === "left" && directionY === "up"
//         ? 90
//         : directionX === "left" && directionY === "down"
//         ? 180
//         : directionX === "right" && directionY === "down"
//         ? 270
//         : directionX === "right" && directionY === "up"
//         ? 0
//         : 0;

//     const y2 = card.y.aceleration;
//     const x2 = card.x.aceleration;
//     const theta = Math.atan2(y2, x2);
//     const thetaDeg = (theta * 180) / Math.PI + additionalDeg;
//     const deg = thetaDeg.toFixed(2);

//     return deg;
//   },
//   stats: (team) => {
//     const stats = [];
//     const keysStats = valuesPokemon.baseStats;
//     team?.map((pokemon) => {
//       const valueStats = {};
//       keysStats.map((stat) => {
//         valueStats[stat] = generateFunction.getStackReference(pokemon, stat);
//       });
//       valueStats.HealdReference = generateFunction.getStackReference(
//         pokemon,
//         "Heald"
//       );
//       valueStats.HealdPercentage = pokemon.heald;
//       stats.push({ ...valueStats });
//     });
//     //console.log('stats....',stats )
//     return stats;
//   },
//   selecRandomAlivePokemon: (team, count = []) => {
//     let selectorId = 0;
//     if (team !== undefined && team.length > 0) {
//       const id = Math.round(Math.random() * team.length - 1);

//       if (team[id]?.heald <= 0) {
//         count.push(id);
//         count = [...new Set(count)];
//         console.log("COUNT ", count);
//         return count.length >= 5 ? -1 : generate.selecPokemon(team, count);
//       } else {
//         return id;
//       }
//     }

//     return selectorId;
//   },
//   fetchDataTeam: async (state) => {
//     const newState = { ...state };

//     return newState;
//   },

//   teamRival: (state, trainer) => {
//     //console.log(state, trainer);
//     const dataTrainer = state[trainer].dataTrainer;
//     const noPokedexTeamPokemon = [];
//     const sizeTeam = valuesPokemon.componentBattle.size.team;
//     for (let i = 0; i < sizeTeam; i++) {
//       const noPokedex = pokemonGet.noPokedex(dataTrainer.level);
//       noPokedexTeamPokemon.push(noPokedex);
//     }
//     //console.log(dataTrainer.level, noPokedexTeamPokemon);
//     return noPokedexTeamPokemon;
//   },

//   theme: () => {
//     const typesKeys = Object.keys(typesPokemon);
//     let randomType = Math.round(Math.random() * typesKeys.length);
//     return randomType === 0 ? generate.theme() : typesKeys[randomType];
//   },
//   imageTrainer: (image) => {
//     if (image) {
//       return image;
//     } else {
//       const keysTrainers = Object.keys(trainers);
//       let randomImage = Math.round(Math.random() * (keysTrainers.length - 1));
//       //console.log(randomImage);
//       return randomImage === 0
//         ? generate.imageTrainer()
//         : keysTrainers[randomImage];
//     }
//   },

//   level: (state, oponent = "user") => {
//     let level = 5;
//     if (state && state[oponent].dataTrainer._id !== 0) {
//       const dataDificult =
//         valuesPokemon.componentBattle.dificult[
//           state?.general?.dificult || "medium"
//         ];
//       //console.log('level..............................: ', dataDificult);
//       const baseLevel = state[oponent].dataTrainer.level;
//       const baseLeague = state[oponent].dataTrainer.league;
//       //console.log("in level", state[oponent]);
//       if (state[oponent] !== undefined) {
//         level =
//           baseLevel +
//           Math.ceil(Math.random() * dataDificult.levelDifference) +
//           baseLeague * dataDificult.levelDifferenceLeague;
//       }
//       return level < 0 ? 5 : level;
//     }
//   },

//   getUser: (dataTrainer, trainer) => {
//     // aqui se crean los parametros de cada entrenador [usuario , y rival] ;para la data del rival se toma como base los datos del usuario y dependiendo de la dificultad establecida anteriormente se cambian parametros como nivel del [nivel del rival]
//     const newRival = { ...dataTrainer };
//     if (trainer === "rival") {
//       newRival._id = `rival_${newRival._id}`;
//       newRival.gametag = `rival_${newRival.gametag}`;
//       newRival.email = `rival_${newRival.email}`;
//       newRival.email = `rival_${newRival.email}`;
//     }
//     return newRival;
//   },
//   dificult: () => {
//     const dificultKeys = Object.keys(valuesPokemon.componentBattle.dificult);
//     let dificult = "";
//     const probability = Math.random();
//     dificultKeys.map((dificultItem) => {
//       valuesPokemon.componentBattle.dificult[dificultItem].minProbability <=
//       probability
//         ? (dificult = dificultItem)
//         : null;
//     });
//     //console.log(dificultKeys,'a',probability,dificult)
//     return dificult;
//   },
// };

// //! ---------------------------------------FORMS----------------------

// export const forms = {
//   userDefault: (user) => {
//     const formatUser = {
//       position: {
//         x: 0,
//         y: 0,
//       },
//       cardSelect: 0,
//       idpokemonSelect: 0,
//     };
//     return formatUser;
//   },
//   cardDirection: (directionX, directionY) => {
//     const power = valuesPokemon.componentBattle.poverMove.max;
//     const valueDirection = {
//       typeAttack: valuesPokemon.componentBattle.typeAttack(),
//       powerMove: Math.round(power / 4 + Math.random() * ((3 * power) / 4)), //25 a 100
//       x: {
//         direction: getCards.direction("x", directionX ? directionX : null), // Left or rigth
//         aceleration: Math.random(), // 0.1 to 1
//       },
//       y: {
//         direction: getCards.direction("y", directionY ? directionY : null), // up or down
//         aceleration: Math.random(), // 0.1 to 1
//       },
//     };

//     valueDirection.deg = generate.degDirection(valueDirection);
//     valueDirection.vectorMove = generate.vectorMove(valueDirection.deg);
//     return valueDirection;
//   },
// };

// //! ------------------------------------------- INITIAL STATE
// export const initialStateBattle = (state) => {
//   console.log("initialState");
//   const oponents = valuesPokemon.componentBattle.oponents.trainers;
//   const phases = valuesPokemon.componentBattle.phases.values;
//   const initialState = {
//     phase: {},

//     general: {
//       dificult: generate.dificult(),
//       bioma: generateFunction.bioma(),
//       time: {
//         turn: valuesPokemon.componentBattle.time.turn,
//         delay: valuesPokemon.componentBattle.time.delay,
//       },
//     },
//     game: {
//       phases: ["wait", "selectDirection", "timeDelay", "movePokemon"],
//       actualPhase: 0,
//       turn: Math.random() > 0.5 ? "user" : "rival",
//       turn: "user",
//       user: forms.userDefault("user"),
//       rival: forms.userDefault("rival"),
//     },
//   };

//   phases.map((phase) => {
//     initialState.phase[phase] = "";
//     if (phase === valuesPokemon.componentBattle.phases.values[1]) {
//       if (state.teamUser.length === 5) {
//         initialState.phase[phase] = "Yes";
//       }
//     }
//   });

//   oponents.map((trainer) => {
//     initialState[trainer] = {
//       dataTrainer: generate.getUser(state.user, trainer),
//       cardsDirection: getCards.group(), //? con las cardsDirection generaremos los posibles movimientos que podra hacer el pokemon del usuario NOTA : estas cartas cambiaran con cada turno
//       teamPokemon: state.teamUser,
//     };
//     if (trainer === "rival") {
//       initialState[trainer].dataTrainer.pictureTrainer =
//         generate.imageTrainer();

//       initialState[trainer].dataTrainer.theme = generate.theme();
//       initialState[trainer].dataTrainer.level = generate.level(initialState);
//       initialState[trainer].noPokedexTeamPokemon = generate.teamRival(
//         initialState,
//         trainer
//       );
//     }
//   });

//   return initialState;
// };

import { valuesPokemon, pokemonGet } from "@/Assets/funcions";
import { trainers } from "@/Assets/trainers";
import { typesPokemon } from "@/Assets/typesPokemon";
import { generate as generateFunction } from "@/Assets/funcions";




// export const battle = {
//   locomotion: {
//     stepVectorDirection: (state) => {
//       const newState = { ...state };
//       const add = valuesPokemon.componentBattle.limitSpeedL.min;
//       newState.position.left += add * state.vector.components.x;
//       newState.position.rigth +=
//         add * state.vector.components.x + state.sizePokemon;
//       newState.position.top += add * state.vector.components.y;
//       newState.position.botton +=
//         add * state.vector.components.y + state.sizePokemon;

//       if (newState.position.left <= newState.dimensionBatteField.left) {
//         newState.position.left = newState.dimensionBatteField.left;
//         //newState.vector.components.x= Math.abs(newState.vector.components.x)
//       }
//       if (
//         newState.position.left + newState.sizePokemon >=
//         newState.dimensionBatteField.rigth
//       ) {
//         newState.position.left =
//           newState.dimensionBatteField.rigth - newState.sizePokemon;
//         //newState.vector.components.x=Math.abs(newState.vector.components.x)*-1
//       }

//       if (newState.position.top <= newState.dimensionBatteField.top) {
//         newState.position.top = newState.dimensionBatteField.top;
//         //newState.vector.components.y=Math.abs(newState.vector.components.y)
//       }
//       if (
//         newState.position.top + newState.sizePokemon >=
//         newState.dimensionBatteField.bottom
//       ) {
//         newState.position.top =
//           newState.dimensionBatteField.bottom - newState.sizePokemon;
//         //newState.vector.components.y=Math.abs(newState.vector.components.y)*-1
//       }
//       newState.vector.powerActual -= 1;
//       if (newState.vector.powerActual <= 0) {
//         newState.vector.powerActual = 0;
//       }

//       // newState.position.left+=(state.speed*state.vector.components.x)
//       // newState.position.rigth+=(state.speed*state.vector.components.x)+state.sizepokemon
//       // newState.position.top+=(state.speed*state.vector.components.y)
//       // newState.position.botton+=(state.speed*state.vector.components.y)+state.sizepokemon
//       return newState;
//     },
//   },
//   get: {
//     sizepokemon: (pokemon) => {
//       return (
//         valuesPokemon.componentBattle.size.pokemonBaseSize * pokemon.height
//       );
//     },
//     initialPositionPokemon: (user) => {
//       const position = {
//         pokemon: valuesPokemon.componentBattle.initialPosition[user],
//       };

//       for (let i = 0; i < valuesPokemon.componentBattle.size.tailInGame; i++) {
//         let tail = `tail${i}`;
//         position[tail] = valuesPokemon.componentBattle.initialPosition[user];
//       }
//       return position;
//     },
//     randomIndexPokemonSelector: (teamPokemon, countPokemon = []) => {
//       const selectorPokemon = Math.round(
//         Math.random() * (teamPokemon.length - 1)
//       );
//       return selectorPokemon;
//     },
//     randomSelectorCardVector: (index) => {
//       if (index) {
//         return index;
//       } else {
//         return Math.round(
//           Math.random() * (valuesPokemon.componentBattle.groupCards.size - 1)
//         );
//       }
//     },
//     cardVector: () => {
//       const powerValue =
//         valuesPokemon.componentBattle.groupCards.minPower +
//         Math.round(
//           Math.random() * valuesPokemon.componentBattle.groupCards.maxPower
//         );
//       const card = {
//         power: powerValue,
//         powerActual: powerValue,
//         typeAttack: Math.random() > 0.5 ? "Special" : "Normal",
//         type: Math.random() > 0.5 ? 1 : 2,
//         angle: Math.round(360 * Math.random()),
//         angleInRadians: 0,
//         components: {
//           x: 0,
//           y: 0,
//         },
//       };

//       card.angleInRadians = (card.angle * Math.PI) / 180;
//       card.components.x = Math.cos(card.angleInRadians);
//       card.components.y = Math.sin(card.angleInRadians);

//       return card;
//     },
//     randomGroupCardsVector: () => {
//       let groupCard = [];
//       for (let i = 0; i < valuesPokemon.componentBattle.groupCards.size; i++) {
//         const cardVector = battle.get.cardVector();
//         groupCard.push({ ...cardVector });
//       }
//       return groupCard;
//     },
//     pokeRivaldex: (level, listOfPokedex) => {
//       if (listOfPokedex) {
//         return listOfPokedex;
//       } else {
//         const teamPokemon = [];
//         for (let i = 0; i < valuesPokemon.componentBattle.size.team; i++) {
//           const pokedex = pokemonGet.noPokedex(level);
//           teamPokemon.push(pokedex);
//         }
//         return teamPokemon;
//       }
//     },
//     createRival: (user, dificult) => {
//       //console.log("User", user);
//       const rival = { ...user };
//       rival._id = `_rival${rival._id}`;
//       rival.level = battle.get.level(user, dificult);
//       rival.pictureTrainer = battle.get.pictureTrainer();
//       rival.gametag = `${rival.pictureTrainer} (${dificult})`; // nombre de imagen + dificultad
//       rival.theme = trainers[rival.pictureTrainer].typePreference;
//       return rival;
//     },
//     pictureTrainer: () => {
//       const keysTrainers = Object.keys(trainers);
//       let randomNumber = Math.round(Math.random() * (keysTrainers.length - 1));
//       if (randomNumber > 0) {
//         return keysTrainers[randomNumber];
//       } else {
//         return battle.get.pictureTrainer();
//       }
//     },
//     level: (user, dificult) => {
//       let baseLevel =
//         //console.log('levl  :',dificult, user)
//         user?.level * valuesPokemon.levelsTrainers[dificult].baseLevel;
//       let addFraction =
//         user.level * valuesPokemon.levelsTrainers[dificult].addFractionLevel;
//       //console.log('levl  :',baseLevel, addFraction,user.level,valuesPokemon.levelsTrainers[dificult].addFractionLevel)
//       const levelRival =
//         Math.random() > 0.3
//           ? Math.round(baseLevel + addFraction)
//           : Math.round(baseLevel - addFraction);
//       return levelRival;
//     },
//     dificult: () => {
//       const selector = Math.random();
//       const keysLevelTrainers = Object.keys(valuesPokemon.levelsTrainers);
//       let dificult = keysLevelTrainers[0];
//       keysLevelTrainers.map((level, index) => {
//         if (valuesPokemon.levelsTrainers[level].probability <= selector) {
//           dificult = keysLevelTrainers[index];
//         }
//       });
//       //console.log("level", selector, dificult);
//       return dificult;
//     },
//   },

//   teamPokemon: {},

//   phases: ["checkInTeam", "selectPokemon",'inGame'],
//   inGame: ["selectionMode", "selectionCard", "inBattle"],
//   turn: ["user", "rival"],
//   keyValidations: ["team", "mode"],
//   initialState: (globalState) => {
//     const initialState = {
      
//       general: {},
//       validation: {},
//       trainers: {},
//       game: {
//         orderPositionTurnPokemon: [], //Orden de los pokemon por velocidad stats final
//       },
//       team: {
//         rival: [],
//         user: globalState.teamUser,
//       },
//       cardsVector: {},
//       selectorPokemon: {
//         rival: 0,
//         user: 0,
//       },
//       selectorCardVector: {
//         rival: battle.get.randomSelectorCardVector(),
//         user: battle.get.randomSelectorCardVector(),
//       },
//       position: {
//         user: battle.get.initialPositionPokemon("user"),
//         rival: battle.get.initialPositionPokemon("rival"),
//       },
//     };
//     initialState.phase = battle.phases[0];
//     initialState.inGame = battle.inGame[0];
//     initialState.turn = battle.turn[0];

//     battle.keyValidations.map((validation) => {
//       if (validation === battle.keyValidations[0]) {
//         initialState.validation[validation] = globalState.teamUser.length;
//       } else {
//         initialState.validation[validation] = "";
//       }
//     });
//     console.log("globalState initialState :", globalState);

//     initialState.trainers.user = globalState.user;
//     initialState.general.dificult = battle.get.dificult();
//     initialState.trainers.rival = battle.get.createRival(
//       initialState.trainers.user,
//       initialState.general.dificult
//     );
//     initialState.pokeRivaldex = battle.get.pokeRivaldex(
//       initialState.trainers.rival.level
//     );
//     initialState.cardsVector.user = battle.get.randomGroupCardsVector();
//     initialState.cardsVector.rival = battle.get.randomGroupCardsVector();

//     //const noPokemdex=pokemonGet.noPokedex

//     return initialState;
//   },
// };

// //?--------------------------------------------------------------------------------


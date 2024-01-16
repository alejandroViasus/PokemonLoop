import { trainers } from "@/Assets/trainers";
import { typesPokemon } from "@/Assets/typesPokemon";
import { generate, pokemonGet, valuesPokemon } from "@/Assets/funcions";
import { valuesPokemon as vp } from "@/Assets/funcions";
import e from "cors";



export const handlerState = {
  addTimmerTurn: (state, reset = false) => {
    let newState = { ...state };
    if (reset) {
      newState.turn.timmer = 0;
    } else {
      if (newState.turn.user) {
        newState.turn.timmer += battleVariables.timmer.turn.delay;
        //console.log(`add ${newState.turn.timmer}`);
        if (newState.turn.timmer >= battleVariables.timmer.turn.user) {
          newState.turn.timmer = 0;
          newState.phase.actual += 1;
        }
      } else {
        newState.turn.timmer += battleVariables.timmer.turn.delay;
        //console.log(`add ${newState.turn.timmer}`);
        if (newState.turn.timmer >= battleVariables.timmer.turn.rival) {
          newState.turn.timmer = 0;
          newState.phase.actual += 1;
        }
      }
    }
    return newState;
  },
  pokemonInMove: (state, collide = false) => {
    //console.log("inMove");
    let newState = { ...state };

    let trainerTurn = newState.turn.user ? "user" : "rival";
    let rival = newState.turn.user ? "rival" : "user";
    const cardSelectedTrainer =
      newState.vectorCards[trainerTurn][
      newState.select.cardVector[trainerTurn]
      ];
    const cardSelectedRival = newState.reactionColision[rival];
    assetBattle;
    const decrementPowerTrainer = assetBattle.get.decrementPower(
      state,
      trainerTurn
    );
    const decrementPowerRival = assetBattle.get.decrementPower(state, rival);

    //console.log("decrement !", trainerTurn, decrementPowerTrainer);
    //console.log("decrement !", rival, decrementPowerRival);

    if (
      cardSelectedTrainer.powerActual > 0 ||
      cardSelectedRival.powerActual > 0
    ) {
      //* defino si alguno de los pokemon tienen energia para moverse

      newState = assetBattle.get.nextStep({ ...newState }, trainerTurn, rival);

      cardSelectedTrainer.powerActual =
        cardSelectedTrainer.powerActual - decrementPowerTrainer > 0
          ? (cardSelectedTrainer.powerActual -= decrementPowerTrainer)
          : 0;

      cardSelectedRival.powerActual =
        cardSelectedRival.powerActual - decrementPowerRival > 0
          ? (cardSelectedRival.powerActual -= decrementPowerRival)
          : 0;
    }
    return newState;
  },
};

export const battleVariables = {
  powerVariables: {
    decrement: {
      base: 1,
      bonus: 0.1,
    },
  },
  timmer: {
    turn: {
      rival: 1000, //tiempo en la fase de seleccion de carta
      user: 30000, //tiempo en la fase de seleccion de carta
      delay: 1000,
    },
    inMove: {
      delay: 16,
    },
  },
  phases: [
    "endGame",
    "validation",
    "selectMode",
    "selectPokemon",
    "selectCard",
    "pokemonMove",
  ],
  size: {
    pokemon: {
      tail: 28,
      scale: {
        base: 30, // valor Unico de escala que se multiplicara por el tamanio de la data
        min: 50, //valor en pixeles
        max: 100, //valor en pixeles
      },
    },
    structure: {
      stadium: {
        heigth: 600,
        width: 1153,
      },
    },
    team: 4,
    pokemonsInBattle: {
      individual: 2,
      doubles: 4,
    },
  },
  dificult: {
    easy: { rate: 0, value: "easy", difflevel: 2 },
    medium: { rate: 0.7, value: "medium", difflevel: 4 },
    hard: { rate: 0.9, value: "hard", difflevel: 8 },
    master: { rate: 0.95, value: " master", difflevel: 12 },
    legend: { rate: 0.99, value: "legend", difflevel: 16 },
  },
  baseExperience: {
    winner: {
      easy: {
        experiencePokemon: 25,
        experienceTrainer: 50,
        pokeballs: 5,
        box: 0,
        coins: 20,
      },
      medium: {
        experiencePokemon: 35,
        experienceTrainer: 70,
        pokeballs: 8,
        box: 0,
        coins: 30,
      },
      hard: {
        experiencePokemon: 65,
        experienceTrainer: 100,
        pokeballs: 8,
        box: 0,
        coins: 80,
      },
      master: {
        experiencePokemon: 150,
        experienceTrainer: 200,
        pokeballs: 10,
        box: 0,
        coins: 100,
      },
      legend: {
        experiencePokemon: 300,
        experienceTrainer: 200,
        pokeballs: 15,
        box: 0,
        coins: 130,
      },
    },
    loser: {
      easy: {
        experiencePokemon: 10,
        experienceTrainer: 15,
        pokeballs: 2,
        box: 0,
        coins: 5,
      },
      medium: {
        experiencePokemon: 15,
        experienceTrainer: 20,
        pokeballs: 3,
        box: 0,
        coins: 10,
      },
      hard: {
        experiencePokemon: 20,
        experienceTrainer: 25,
        pokeballs: 8,
        box: 0,
        coins: 15,
      },
      master: {
        experiencePokemon: 50,
        experienceTrainer: 50,
        pokeballs: 10,
        box: 0,
        coins: 25,
      },
      legend: {
        experiencePokemon: 100,
        experienceTrainer: 80,
        pokeballs: 15,
        box: 0,
        coins: 50,
      },
    },
  },
};

export const assetBattle = {
  get: {
    nextStep: (state, trainerTurn, rival) => {
      let newState = { ...state };

      //? Selectores
      const select = {
        pokemon: newState.select.pokemon,
        vectorCard: newState.select.cardVector,
      };

      //?pokemon Select
      const pokemonSelect = {
        trainer: newState.team[trainerTurn][select.pokemon[trainerTurn]],
        rival: newState.team[rival][select.pokemon[rival]],
      };

      //?card Select
      const cardSelect = {
        trainer:
          newState.vectorCards[trainerTurn][select.vectorCard[trainerTurn]],
        rival: newState.reactionColision[rival],
      };

      const heald = {
        rival:
          newState.team[newState.turn.user ? "user" : "rival"][
          newState.select.pokemon[newState.turn.user ? "user" : "rival"]
          ],
      };

      //?position
      const position = {
        trainer: state.position[trainerTurn],
        rival: state.position[rival],
      };

      //?speed
      const speed = {
        trainer: generate.getStat(pokemonSelect.trainer, "Speed"),
        rival: generate.getStat(pokemonSelect.rival, "Speed"),
      };
      //?size
      const size = {
        trainer: generate.getSizePokemon(pokemonSelect.trainer),
        rival: generate.getSizePokemon(pokemonSelect.rival),
        stadium: {
          heigth: battleVariables.size.structure.stadium.heigth,
          width: battleVariables.size.structure.stadium.width,
        },
      };
      //?Magnitude
      const magnitude = {
        trainer:
          cardSelect.trainer.powerActual /
          valuesPokemon.componentBattle.groupCards.maxPower +
          0.1,
        rival:
          cardSelect.rival.powerActual /
          valuesPokemon.componentBattle.groupCards.maxPower /
          (size.rival / 3),
      };
      //?NextStept

      const nextStep = {
        trainer: {
          x:
            position.trainer.pokemon.x +
            speed.trainer * cardSelect.trainer.components.x * magnitude.trainer,
          y:
            position.trainer.pokemon.y +
            speed.trainer * cardSelect.trainer.components.y * magnitude.trainer,
        },

        rival: {
          x:
            position.rival.pokemon.x +
            speed.rival * cardSelect.rival.components.x * magnitude.rival,
          y:
            position.rival.pokemon.y +
            speed.rival * cardSelect.rival.components.y * magnitude.rival,
        },
      };

      //?Types
      const types = {
        trainer: pokemonSelect.trainer[`type${cardSelect.trainer.type}`],
        rival: {
          type1: pokemonSelect.rival.type1,
          type2: pokemonSelect.rival.type2,
        },
      };

      //console.log(`Last Position_${trainerTurn} :`, position.trainer.pokemon);
      if (cardSelect.trainer.powerActual > 0) {
        //!condicional para que el movimiento del pokemon no supere la dimension del estadio
        //!para esto se tomo en cuenta del tamanio del pokemon en turno

        // console.log(`Position_${trainerTurn} :`, position.trainer.pokemon.x);
        // console.log(
        //   `Position_${trainerTurn} : `,
        //   position.trainer.pokemon.x,
        //   "sizePokemon",
        //   size.trainer
        // );

        //?Types
        const types = {
          trainer: pokemonSelect.trainer[`type${cardSelect.trainer.type}`],
          rival: {
            type1: pokemonSelect.rival.type1,
            type2: pokemonSelect.rival.type2,
          },
        };

        //?NextStept

        position.trainer.pokemon.x +=
          speed.trainer * cardSelect.trainer.components.x * magnitude.trainer;

        position.trainer.pokemon.y +=
          speed.trainer * cardSelect.trainer.components.y * magnitude.trainer;

        //! Collide Rival
        const elementPokemonTrainer = document.getElementById(
          `pokemon_${trainerTurn}_in_battle`
        );

        const points = (trainer) => {
          return {
            a: {
              x: position[trainer].pokemon.x,
              y: position[trainer].pokemon.y,
            },
            b: {
              x: position[trainer].pokemon.x + size.trainer,
              y: position[trainer].pokemon.y,
            },
            c: {
              x: position[trainer].pokemon.x + size.trainer,
              y: position[trainer].pokemon.y + size.trainer,
            },
            d: {
              x: position[trainer].pokemon.x,
              y: position[trainer].pokemon.y,
            },
          };
        };
        const pointsPosition = {
          rival: points("rival"),
          trainer: points("trainer"),
        };

        // console.log(
        //   "!!!!!!!!!!!!!!!!!!!!!!!!!!!4!! pointsPosition : ",
        //   pointsPosition
        // );
        elementPokemonTrainer.style.backgroundColor = `rgba(180,180,180,1)`;
        if (
          //collide rigth-botton
          (position.trainer.pokemon.x + size.trainer >=
            position.rival.pokemon.x &&
            position.trainer.pokemon.x + size.trainer <=
            position.rival.pokemon.x + size.rival &&
            position.trainer.pokemon.y + size.trainer >=
            position.rival.pokemon.y &&
            position.trainer.pokemon.y + size.trainer <=
            position.rival.pokemon.y + size.rival) ||
          // collide left-botton
          (position.trainer.pokemon.x >= position.rival.pokemon.x &&
            position.trainer.pokemon.x <=
            position.rival.pokemon.x + size.rival &&
            position.trainer.pokemon.y + size.trainer >=
            position.rival.pokemon.y &&
            position.trainer.pokemon.y + size.trainer <=
            position.rival.pokemon.y + size.rival) ||
          //collide left-top
          (position.trainer.pokemon.x >= position.rival.pokemon.x &&
            position.trainer.pokemon.x <=
            position.rival.pokemon.x + size.rival &&
            position.trainer.pokemon.y >= position.rival.pokemon.y &&
            position.trainer.pokemon.y <=
            position.rival.pokemon.y + size.rival) ||
          (position.trainer.pokemon.x + size.trainer >=
            position.rival.pokemon.x &&
            position.trainer.pokemon.x + size.trainer <=
            position.rival.pokemon.x + size.rival &&
            position.trainer.pokemon.y >= position.rival.pokemon.y &&
            position.trainer.pokemon.y <= position.rival.pokemon.y + size.rival)
        ) {
          // TODO: se pretende hacer una comparacion de que tan desfasado esta de los limites de los limites del rival para poder definir qque direccion o que valor en las coordenadas cambiar (cordenas de la card que dan la direccion de rumbo al pokemon en partida)

          elementPokemonTrainer.style.backgroundColor = `rgba(80,180,255,1)`;
          const XaxisOffset =
            pointsPosition.trainer.a.x +
            size.trainer / 2 -
            (pointsPosition.rival.a.x + size.rival / 2);
          const YaxisOffset =
            pointsPosition.trainer.a.y +
            size.trainer / 2 -
            (pointsPosition.rival.a.y + size.rival / 2);

          const cardColision = {
            angle: 0,
            angleInRadians: 0,
            components: {
              x: cardSelect.trainer.components.x,
              y: cardSelect.trainer.components.y,
            },
            power: cardSelect.trainer.power,
            powerActual: cardSelect.trainer.powerActual,
            type: 0,
            typeAttack: "",
          };

          newState.reactionColision[rival] = cardColision;

          console.log(`offset :-------------`);
          console.log(`oX: ${XaxisOffset}, oY: ${YaxisOffset}`);
          if (Math.abs(YaxisOffset) < Math.abs(XaxisOffset)) {
            if (XaxisOffset >= 0) {
              position.trainer.pokemon.x =
                position.rival.pokemon.x + size.rival;

              cardSelect.trainer.components.x =
                1 * Math.abs(cardSelect.trainer.components.x);
            } else {
              position.trainer.pokemon.x =
                position.rival.pokemon.x - size.trainer;

              cardSelect.trainer.components.x =
                -1 * Math.abs(cardSelect.trainer.components.x);
            }
          } else {
            if (YaxisOffset >= 0) {
              position.trainer.pokemon.y =
                position.rival.pokemon.y + size.rival;

              cardSelect.trainer.components.y =
                1 * Math.abs(cardSelect.trainer.components.y);
            } else {
              position.trainer.pokemon.y =
                position.rival.pokemon.y - size.trainer;

              cardSelect.trainer.components.y =
                -1 * Math.abs(cardSelect.trainer.components.y);
            }
          }

          //! conditional shotHit -------------------------------------------------------------

          const scaleDamage4Types =
            3 *
            typesPokemon[types.trainer].effectiveness[types.rival.type1] *
            typesPokemon[types.trainer].effectiveness[types.rival.type2];

          const scaleDamage4CardEnergy =
            (3 * cardSelect.trainer.powerActual) /
            valuesPokemon.componentBattle.groupCards.maxPower;

          const typeOfDeffense = cardSelect.typeAttack === "Normal"
            ? 'Deffense'
            : 'SpecialDeffense'; //! 1.0 version Nueva

          const typeOfAttack = cardSelect.typeAttack === "Normal"
            ? 'Attack'
            : 'SpecialAttack'; //! 1.1 version Nueva

          const defenseRival = generate.getStat(
            pokemonSelect.rival,
            typeOfDeffense //! 1.0 version Nueva
            //"Deffense" //! 1.0 version Anterior
          );



          const damage =
            generate.getStat(pokemonSelect.trainer,
              typeOfAttack //! 1.1 version Nueva
              // "Attack"  //! 1.1 version Anterior
            ) *
            scaleDamage4CardEnergy *
            scaleDamage4Types;

          let damageTotal = damage - defenseRival;

          if (damageTotal < 3) {
            damageTotal = 3;
          }

          const healdReduction =
            (damageTotal / generate.getStat(pokemonSelect.trainer, "Heald")) *
            100;

          const newStateTeamRival = [...newState.team[rival]];
          const selectedPokemon = newState.select.pokemon[rival];

          newStateTeamRival[selectedPokemon] = {
            ...newStateTeamRival[selectedPokemon],
            heald:
              newStateTeamRival[selectedPokemon].heald - healdReduction >= 0
                ? newStateTeamRival[selectedPokemon].heald - healdReduction
                : 0,
          };

          newState.team[rival] = newStateTeamRival;

          console.log(
            "Collide !!!Collide !!!",
            rival,
            newState.team[rival][selectedPokemon].heald,
            pokemonSelect
          );
          const showDamage = document.getElementById("show_last_damage");
          const showDefence = document.getElementById("show_last_defense");
          const showTotal = document.getElementById("show_last_total");
          // showDamage.innerHTML = `${trainerTurn} : ${damageTotal}`;
          showDefence.innerHTML = `${pokemonSelect.trainer.name} : ${damage}=> ${pokemonSelect.rival.name} ${defenseRival} `;
          showTotal.innerHTML = `Damage : ${damageTotal} => reduxHeald ${healdReduction}% heald => ${newStateTeamRival[selectedPokemon].heald}%`;
        }
        //!Collide limit Stadium
        if (position.trainer.pokemon.x >= size.stadium.width - size.trainer) {
          position.trainer.pokemon.x = size.stadium.width - size.trainer;
          cardSelect.trainer.components.x =
            -1 * Math.abs(cardSelect.trainer.components.x);
        }
        if (position.trainer.pokemon.x < 0) {
          position.trainer.pokemon.x = 0;
          cardSelect.trainer.components.x =
            1 * Math.abs(cardSelect.trainer.components.x);
        }
        if (position.trainer.pokemon.y > size.stadium.heigth - size.trainer) {
          position.trainer.pokemon.y = size.stadium.heigth - size.trainer;
          cardSelect.trainer.components.y =
            -1 * Math.abs(cardSelect.trainer.components.y);
        }
        if (position.trainer.pokemon.y < 0) {
          position.trainer.y = 0;
          cardSelect.trainer.components.y =
            1 * Math.abs(cardSelect.trainer.components.y);
        }
      }

      //console.log(` RIVALpOSITION `, position.rival);
      //console.log(` RivalPosition____ `, cardSelect.rival.components);
      if (cardSelect.rival.powerActual > 0) {
        position.rival.pokemon.x +=
          speed.rival * cardSelect.rival.components.x * magnitude.rival;

        position.rival.pokemon.y +=
          speed.rival * cardSelect.rival.components.y * magnitude.rival;

        if (position.rival.pokemon.x >= size.stadium.width - size.rival) {
          position.rival.pokemon.x = size.stadium.width - size.rival;
          cardSelect.rival.components.x =
            -1 * Math.abs(cardSelect.rival.components.x);
        }
        if (position.rival.pokemon.x < 0) {
          position.rival.pokemon.x = 0;
          cardSelect.rival.components.x =
            1 * Math.abs(cardSelect.rival.components.x);
        }
        if (position.rival.pokemon.y > size.stadium.heigth - size.rival) {
          position.rival.pokemon.y = size.stadium.heigth - size.rival;
          cardSelect.rival.components.y =
            -1 * Math.abs(cardSelect.rival.components.y);
        }
        if (position.rival.pokemon.y < 0) {
          position.rival.y = 0;
          cardSelect.rival.components.y =
            1 * Math.abs(cardSelect.rival.components.y);
        }
      }

      //?----------------------------------------------------------------------------------
      // console.log(
      //   "---------Collide !!!!!!!!!!!!!!!!!!!!!!!!",
      //   rival,
      //   cardSelect.trainer
      // );

      // const showDamage = document.getElementById("show_last_damage");
      // showDamage.innerHTML = `${trainerTurn} : ${typesPokemon[types.trainer].effectiveness[types.rival.type1]*typesPokemon[types.trainer].effectiveness[types.rival.type2]}`;

      return newState;
    },
    decrementPower: (state, trainerTurn) => {
      // si el pokemon tiene el uno de los tipos del bioma el decremento sera se le restara 0.05 ,si tiene los dos tiempo , el decremento se le restara  0.1
      // si el pokemon tiene un tipo debil con el bioma se le sumara al decremento 0.05 , si el pokemon tiene dos tipos debiles contra el bioma , se le sumara al decremento 0.1
      // de lo contrario el decremento sera de 1
      let decrement = 1;

      const bioma = state.game.bioma;
      const bonus = battleVariables.powerVariables.decrement.bonus;
      const indexPokemon = state?.select?.pokemon[trainerTurn];
      const indexCard = state.select.cardVector[trainerTurn];
      const cardSelect = state.vectorCards[trainerTurn][indexCard];
      const pokemonSelect = state.team[trainerTurn][indexPokemon];
      const type = pokemonSelect[`type${cardSelect.type}`];
      // console.log(
      //   "!!DecreasePokemon",
      //   "type:",
      //   type,
      //   "Bioma",
      //   bioma,
      //   typesPokemon[bioma].effectiveness[type]
      // );

      if (typesPokemon[bioma].effectiveness[type] > 1) {
        decrement = decrement + bonus;
      }

      if (type === bioma) {
        decrement = decrement - bonus;
      }
      return decrement;
    },
    bioma: () => {
      const keysType = Object.keys(typesPokemon);
      const selector = Math.round(Math.random() * keysType.length);
      if (keysType[selector] === "None" || keysType[selector] === undefined) {
        return assetBattle.get.bioma();
      } else {
        return keysType[selector];
      }
    },
    initalPosition: (trainerPosition = "user") => {
      let positionY =
        trainerPosition === "user"
          ? (2 * battleVariables.size.structure.stadium.heigth) / 8
          : (6 * battleVariables.size.structure.stadium.heigth) / 8;
      let positionX =
        trainerPosition === "user"
          ? (1 * battleVariables.size.structure.stadium.width) / 8
          : (6 * battleVariables.size.structure.stadium.width) / 8;

      let initialPosition = {
        pokemon: { x: positionX, y: positionY },
      };

      for (let i = 0; i < battleVariables.size.pokemon.tail; i++) {
        const tail = `tail_${i}`;
        initialPosition[tail] = { x: positionX, y: positionY };
      }
      return initialPosition;
    },
    noPokedex: (level = 1) => {
      //console.log(level)
      const noPokedex =
        Math.round(Math.random() * valuesPokemon.maxNumberPokedex) +
        valuesPokemon.minNumberPokedex;
      const warningPokemon = Object.keys(valuesPokemon.listWarningPokemon);
      warningPokemon.map((warning) => {
        if (
          valuesPokemon.listWarningPokemon[warning].list.includes(noPokedex) &&
          level < valuesPokemon.listWarningPokemon[warning].requireLevel
        ) {
          assetBattle.get.noPokedex(level);
        }
      });
      return noPokedex;
    },
    pokeRivaldex: (level, listOfPokedex) => {
      if (listOfPokedex) {
        return listOfPokedex;
      } else {
        const teamPokemon = [];
        for (let i = 0; i < battleVariables.size.team; i++) {
          const pokedex = assetBattle.get.noPokedex(level);
          teamPokemon.push(pokedex);
        }
        return teamPokemon;
      }
    },
    dificult: () => {
      const keysDificult = Object.keys(battleVariables.dificult);
      const rate = Math.random();
      let valueDificult = "";
      keysDificult.map((dificult) => {
        if (rate >= battleVariables.dificult[dificult].rate) {
          valueDificult = dificult;
        }
      });
      return valueDificult;
    },
    level: (user, dificult) => {
      let level = user.level;
      //console.log('in: ',level)
      level =
        level +
        Math.round(
          Math.random() * battleVariables.dificult[dificult].difflevel
        );
      //console.log('end: ',level)
      return level;
    },
    pictureTrainer: () => {
      const keyTrainers = Object.keys(trainers);
      const selector =
        keyTrainers[Math.round(Math.random() * (keyTrainers.length - 1))];

      if (selector === "None") {
        return assetBattle.get.pictureTrainer();
      } else {
        return selector;
      }
    },
    theme: () => {
      const keysTypes = Object.keys(typesPokemon);
      const selector =
        keysTypes[Math.round(Math.random() * (keysTypes.length - 1))];
      if (selector === "None") {
        return assetBattle.get.pictureTrainer();
      } else {
        return selector;
      }
    },
  },
  create: {
    rival: (user, dificult) => {
      const rival = { ...user };
      rival._id = `_rival${rival._id}`;
      rival.level = assetBattle.get.level(user, dificult);
      rival.pictureTrainer = assetBattle.get.pictureTrainer();
      rival.gametag = `Trainer ${rival.pictureTrainer} (${dificult})`;
      rival.theme = assetBattle.get.theme();
      return rival;
    },
    cardVector: (random = true) => {
      if (random) {
        const powerValue =
          valuesPokemon.componentBattle.groupCards.minPower +
          Math.round(
            Math.random() * valuesPokemon.componentBattle.groupCards.maxPower
          );
        const card = {
          power: powerValue,
          powerActual: powerValue,
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
      } else {
        const powerValue = 0;
        const card = {
          power: 0,
          powerActual: 0,
          typeAttack: "",
          type: 0,
          angle: 0,
          angleInRadians: 0,
          components: {
            x: 0,
            y: 0,
          },
        };
        return card;
      }
    },
    randomGroupCardsVector: () => {
      let groupCard = [];
      for (let i = 0; i < valuesPokemon.componentBattle.groupCards.size; i++) {
        const cardVector = assetBattle.create.cardVector();
        groupCard.push({ ...cardVector });
      }
      return groupCard;
    },
  },
  //!--------------------------------------------------initialState
  initialState: (state) => {
    const newState = {
      reactionColision: {
        user: assetBattle.create.cardVector(false),
        rival: assetBattle.create.cardVector(false),
      },
      position: {
        user: assetBattle.get.initalPosition("user"),
        rival: assetBattle.get.initalPosition("rival"),
      },
      turn: {
        timmer: 0,
        user: false,
        loser: "",
      },
      phase: { time: 0, actual: 3, turn: 0, CountTurn: 0 },
      game: {
        bioma: assetBattle.get.bioma(),
      },
      trainer: {},
      team: {},
      vectorCards: {
        user: assetBattle.create.randomGroupCardsVector(),
        rival: assetBattle.create.randomGroupCardsVector(),
      },
      stats: {
        user: {},
        rival: {},
      },
      select: {
        pokemon: {
          user: 0,
          rival: 0,
        },
        cardVector: {
          user: 0,
          rival: 0,
        },
      },
    };
    newState.game.dificult = assetBattle.get.dificult();
    newState.trainer.user = state.user;
    newState.trainer.rival = assetBattle.create.rival(
      newState.trainer.user,
      newState.game.dificult
    );
    newState.team.user = state.teamUser;
    //console.log('sss',newState.trainer.rival.level)
    const teamRivalPokedex = assetBattle.get.pokeRivaldex(
      newState.trainer.rival.level
    );
    newState.game.teamRivalPokedex = teamRivalPokedex;

    return newState;
  },
};

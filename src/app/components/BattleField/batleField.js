import { typesPokemon } from "@/Assets/typesPokemon";
import { generate } from "@/Assets/funcions";
import { valuesPokemon } from "@/Assets/funcions";
import pokemon from "../../../../models/pokemon";

const keysStats = [
  "Heald",
  "Attack",
  "Deffense",
  "SpecialAttack",
  "SpecialDeffense",
  "Speed",
];

export const get = {
  porcentajeHeald:(pokemon)=>{
    const totalHeald=pokemon.stats.Heald
    const actualHeald=pokemon.stats.HealdActual
    let heald = (actualHeald/totalHeald)*100
    heald=heald<=0?0:heald   
    return heald
  },
  phaseFigth: (state) => {
    const newState = { ...state };
    const healdPokemon = state.pokemonUser.stats.HealdActual;
    const healdRival = state.pokemonRival.stats.HealdActual;
    //console.log("phaseFigth", newState, healdPokemon);
    if (healdPokemon < 1 || healdRival < 1) {
      newState.general.figth.move = false;
    }
    return newState;
  },
  colision: (state) => {
    let newState = { ...state };
    const pokemonUser = get.dimension(valuesPokemon.componentBattle.id.pokemon);
    const pokemonRival = get.dimension(valuesPokemon.componentBattle.id.rival);
    //console.log('colision',newState.pokemonUser.position.x.direction.value)
    if (
      pokemonUser.right > pokemonRival.left &&
      pokemonUser.right < pokemonRival.right &&
      ((pokemonUser.top > pokemonRival.top &&
        pokemonUser.top < pokemonRival.bottom) ||
        (pokemonUser.bottom > pokemonRival.top &&
          pokemonUser.bottom < pokemonRival.bottom))
    ) {
      newState.pokemonUser.position.x.direction.value = "Left";
      newState.pokemonRival.position.x.direction.value = "Rigth";
      battle.figth(newState);
      //console.log("Colision");
    }
    if (
      pokemonUser.left < pokemonRival.right &&
      pokemonUser.left > pokemonRival.left &&
      ((pokemonUser.top > pokemonRival.top &&
        pokemonUser.top < pokemonRival.bottom) ||
        (pokemonUser.bottom > pokemonRival.top &&
          pokemonUser.bottom < pokemonRival.bottom))
    ) {
      newState.pokemonUser.position.x.direction.value = "Rigth";
      newState.pokemonRival.position.x.direction.value = "Left";
      battle.figth(newState);
      //console.log("Colision");
    }

    return newState;
  },
  isRival: (id = "a") => {
    // Convertir la cadena a minúsculas para hacer la comparación insensible a mayúsculas
    const lowerCaseStr = id.toLowerCase();
    // Verificar si la cadena contiene la palabra "rival"
    return lowerCaseStr.includes("rival");
  },
  size: (pokemon) => {
    return get.positionSize(pokemon);
  },
  positionSize: (pokemon) => {
    return pokemon.height * valuesPokemon.componentBattle.size.scale > 30
      ? pokemon.height * valuesPokemon.componentBattle.size.scale > 250
        ? 100
        : pokemon.height * valuesPokemon.componentBattle.size.scale
      : 30;
  },
  initialPosition: () => {},
  initialDirection: (axis) => {
    const value = Math.random();
    if (axis === "x") {
      return value > 0.5 ? "Left" : "Rigth";
    } else {
      return value > 0.5 ? "Up" : "Down";
    }
  },
  stats: (pokemon) => {
    const stats = {};
    keysStats.map((stat) => {
      stats[stat] = generate.getStat(pokemon, stat);
    });
    stats.HealdActual = generate.getStat(pokemon, "Heald");
    return stats;
  },
  bioma: () => {
    const keysBiomas = Object.keys(typesPokemon);
    let numberBioma = Math.round((keysBiomas.length - 1) * Math.random());
    const newBioma = typesPokemon[keysBiomas[numberBioma]];
    if (numberBioma > 0) {
      return {
        value: keysBiomas[numberBioma],
        icon: newBioma.icon,
        effectiveness: newBioma.effectiveness,
      };
    } else {
      return get.bioma();
    }
  },
  tail: (pokemon, longTail, axis = "x") => {
    const isRival = get.isRival(pokemon?._id);
    const size = get.positionSize(pokemon);
    let initialPosition = 0;
    const margin = valuesPokemon.componentBattle.size.battleField.margin;

    if (axis == "y") {
      initialPosition =
        valuesPokemon.componentBattle.size.battleField.height / 2 - size / 2;
    } else {
      isRival
        ? (initialPosition = 0 + margin)
        : (initialPosition =
            valuesPokemon.componentBattle.size.battleField.width -
            size -
            margin);
    }
    //console.log('initialPosition', isRival?'rival':null,axis,initialPosition)
    const tailPokemon = {
      pokemon: initialPosition,
    };
    for (let i = 0; i < longTail; i++) {
      tailPokemon[`tail_${i}`] = initialPosition;
    }
    return tailPokemon;
  },
  dimension: (id) => {
    if (id !== undefined) {
      const battlefield = document.getElementById(id);
      //console.log('........................ dimension ',id,battlefield?.getBoundingClientRect())
      return battlefield?.getBoundingClientRect();
    } else {
      return {
        top: 2,
        left: 2,
        rigth: 2,
        bottom: 2,
        width: 2,
        height: 2,
      };
    }
  },
};

export const format = {
  battleFieldGeneral: (state) => {
    const general = {
      time: {
        phase: 1000, //delay entre la trancicion de comenzar la batalla y empezar a moverse los pokemon
        step: 1, //incremeto de pasos por turno
        count: 0, //conteo de pasos en la talla pokemon
        delay: 5, //tiempo que demora de delay para generar el siguiente paso o posicion del pokemon
      },
      figth: {
        state: false, // identificador de estado para saber si se esta en la batalla o no
        pause: false,
        move: true,
        stepsSpeed: [
          // posibles opciones de velocidad
          { value: 0.5, title: "", icon: "" },
          { value: 0.75, title: "", icon: "" },
          { value: 1, title: "", icon: "" },
          { value: 1.5, title: "", icon: "" },
          { value: 1.75, title: "", icon: "" },
          { value: 2, title: "", icon: "" },
        ],

        actualSpeed: { value: 1, title: "", icon: "" }, // le da la velocidad al cpmbate
      },
      battlefield: {
        bioma: {
          value: get.bioma(),
          difficult: state.battlefield?.difficult||'equal',
        },
        width: 1000, //ancho de el campo pokemon (px)
        height: 550, //alto de el campo pokemon (px)
        dimension: get.dimension(valuesPokemon.componentBattle.id.battleField),
      },
    };

    return general;
  },
};

export const axis = (pokemon, axis) => {
  const initialaxis = {
    direction: {
      value: get.initialDirection(axis),
      variable: 0.5, //esta variable cambiara al realizar un cambio de direccion el pokemon
      increment: 1 / pokemon.weight, // incremento para la aceleracion
      aceleration: {
        actual: 0, //aceleracion maxiuma del pokemon medida en pixeles
        max: 1,
        min: 0.01,
      },
    },
    position: get.tail(pokemon, valuesPokemon.componentBattle.size.tail, axis),
  };
  return initialaxis;
};

const position = (pokemon) => {
  const position = {
    size: pokemon.height || 1, // la lectura sera en pixeles

    x: axis(pokemon, "x"),
    y: axis(pokemon, "y"),
    rotation: 0,
  };
  return position;
};

export const initialStateBattle = (localState, trainers) => {
  const state = {};
  state.general = format.battleFieldGeneral(localState);
  //console.log(localState)
  trainers.map((trainer) => {
    const pokemon = { ...localState.battlefield[`pokemonSelected${trainer}`] };
    state[`pokemon${trainer}`] = {
      dataPokemon: { ...pokemon },
      stats: get.stats(pokemon),
      position: position(pokemon),
    };
  });

  return state;
};

export const set = {
  aceleration: (state, user, axis) => {
    const selector = `pokemon${user}`;
    const increment = state[selector].position[axis].direction.increment;
    const speed = state[selector].stats.Speed;
    let focus = state[selector].position[axis].direction.aceleration.actual;
    const aceletation = (speed * increment) / 1000;
    focus = focus + aceletation;
    //console.log("aceleration: ", user, aceletation, focus);
    if (focus > valuesPokemon.componentBattle.limitSpeed) {
      return valuesPokemon.componentBattle.limitSpeed;
    } else {
      return focus;
    }
  },
  pause: (state) => {
    const pause = {
      ...state,
      general: {
        ...state.general,
        figth: {
          ...state.general.figth,
          pause: !state.general.figth.pause,
        },
        time: {
          ...state.general.time,
          count: state.general.time.count + state.general.time.step,
        },
      },
    };
    return pause;
  },
};

export const battle = {
  pokemonAlive:(pokemon,team)=>{
    let newTeam = JSON.parse(JSON.stringify(team));
    team.map((pokemonInTeam,index)=>{
      if(pokemonInTeam._id===pokemon.dataPokemon._id){
         console.log('pokemon',newTeam[index].alive)
        //console.log(pokemon.stats.HealdActual)
        newTeam[index].alive=pokemon.stats.HealdActual>0?true:false;
        newTeam[index].heald=get.porcentajeHeald(pokemon);
        
      }
    })
    console.log('pokemonAlive:...',newTeam)
    return newTeam
  },
  figth: (state) => {
    const newState = { ...state };
    const pokemons = ["pokemonUser", "pokemonRival"];

    const formatpokemon = (pokemon) => {
      return {
        id: pokemon,
        alive: newState[pokemon].dataPokemon.alive,
        heald: newState[pokemon].stats.Heald,
        actualHeald: newState[pokemon].stats.HealdActual,
        selectorAttack: Math.random(),
        attack: newState[pokemon].stats.Attack,
        deffense: newState[pokemon].stats.Deffense,
        specialAttack: newState[pokemon].stats.SpecialAttack,
        specialDeffense: newState[pokemon].stats.SpecialDeffense,
        typesPokemon: [
          newState[pokemon].dataPokemon.type1,
          newState[pokemon].dataPokemon.type2,
        ],
      };
    };
    const pokemonUser = formatpokemon("pokemonUser");
    const pokemonRival = formatpokemon("pokemonRival");

    newState.pokemonUser = battle.phase.figth(
      newState,
      pokemonUser,
      pokemonRival
    );
    newState.pokemonRival = battle.phase.figth(
      newState,
      pokemonRival,
      pokemonUser
    );

    return newState;
  },
  phase: {
    figth: (state, pokemon, rival) => {
      const newState = state[pokemon.id];
      const heald = newState.stats.HealdActual;
      const rangeBlock = heald > 100 ? 0.9 : 0.4;
      const blockattack = Math.random();
      let scaleDmg = 0;
      rival.typesPokemon.map((type) => {
        const scale4Type = typesPokemon[type].effectiveness;
        pokemon.typesPokemon.map((typeU) => {
          //console.log(rival.id, type,'->',typeU, scale4Type[typeU])
          scaleDmg =
            scale4Type[typeU] > scaleDmg ? scale4Type[typeU] : scaleDmg;
        });
      });

      //console.log('SCALE DMG .....',scaleDmg,heald);

      if (blockattack > rangeBlock) {
        if (newState.stats.HealdActual > 0) {
          if (pokemon.selectorAttack < 0.5) {
            //! si el selector de ataque es mayor a 0.5 el pokemon recibira danio especial , si es menor recibira danio normal
            let punch = rival.attack * scaleDmg - pokemon.defense;
            punch = punch > 5 ? punch : 5;
            let newHeald = newState.stats.HealdActual - punch;
            newState.stats.HealdActual = newHeald;
          } else {
            let punch = rival.specialAttack - pokemon.specialDeffense;
            punch = punch > 5 ? punch : 5;
            let newHeald = newState.stats.HealdActual - punch;
            newState.stats.HealdActual = newHeald;
          }
        } else {
          newState.stats.HealdActual = 0;
        }
      } else {
        newState.stats.HealdActual = newState.stats.HealdActual - 1;
      }
      //console.log("Colision", rival.id, rival.typesPokemon);
      //console.log("Colision",pokemon.typesPokemon);

      return newState;
    },
    timeCount: (state) => {
      let newState = { ...state };
      newState.general.time.count += newState.general.time.step;
      newState.pokemonRival = battle.phase.nextStep(state, "Rival");
      newState.pokemonUser = battle.phase.nextStep(state, "User");
      newState = get.colision(newState);
      newState = get.phaseFigth(newState);

      //battle.phase.nextStep(state, "User");
      return newState;
    }, //battle.phase.timeCount
    nextStep: (state, user) => {
      const selector = `pokemon${user}`;
      const focus = { ...state[selector] };
      focus.position = battle.phase.step(state, user);

      return focus;
    }, //battle.phase.NextStep
    step: (state, user) => {
      const selector = `pokemon${user}`;
      const focus = { ...state[selector].position };
      focus.x = battle.move.nextStep(state, user, "x");
      focus.y = battle.move.nextStep(state, user, "y");

      return focus;
    }, //battle.phase.step
  },
  direction: {
    setDirection: (state, user, axis) => {
      //! aqui podremos detecta colisiones en el campo de batalla y las colociones con el rival
      const selector = `pokemon${user}`;
      const idCamp = valuesPokemon.componentBattle.id.battleField;
      const focus = state[selector].position[axis].direction;

      const dimensionPokemonRival =
        user === "User"
          ? get.dimension(valuesPokemon.componentBattle.id.rival)
          : get.dimension(valuesPokemon.componentBattle.id.user);

      const focusValues = {
        pokemon: {
          direction: state[selector].position[axis].direction.value,
          position: state[selector].position[axis].position.pokemon,
          dimension: get.dimension(
            user === "User"
              ? valuesPokemon.componentBattle.id.pokemon
              : valuesPokemon.componentBattle.id.rival
          ),
        },
        battleField: {
          dimension: get.dimension(idCamp),
        },
      };
      //console.log(user, focusValues.pokemon.dimension);

      if (axis === "x") {
        if (focusValues.pokemon.position <= 0) {
          focus.value = "Rigth";
        }
        if (
          focusValues.pokemon.position >=
          focusValues.battleField.dimension.width -
            focusValues.pokemon.dimension.width
        ) {
          focus.value = "Left";
          focus.variable = Math.random();
        }
      }
      if (axis === "y") {
        if (focusValues.pokemon.position <= 0) {
          focus.value = "Down";
          focus.variable = Math.random();
        }
        if (
          focusValues.pokemon.position >=
          focusValues.battleField.dimension.height -
            focusValues.pokemon.dimension.height
        ) {
          focus.value = "Up";
        }
      }

      focus.aceleration.actual = set.aceleration(state, user, axis);
      //console.log("focus:...", focus);

      return focus;
    },
  },
  move: {
    nextStep: (state, user, axis) => {
      const selector = `pokemon${user}`;
      const focus = { ...state[selector].position[axis] };
      focus.position = battle.move.nextPosition(state, user, axis);
      focus.direction = battle.direction.setDirection(state, user, axis);

      const size = get.size({ ...state[selector] });
      if (focus.position.pokemon < 0) {
        focus.position.pokemon = 0;
      }
      if (axis === "x") {
        if (
          focus.position.pokemon >
          state.general.battlefield.dimension.width - size
        ) {
          focus.position.pokemon =
            state.general.battlefield.dimension.width - size;
        }
      }
      if (axis === "y") {
        if (
          focus.position.pokemon >
          state.general.battlefield.dimension.height - size
        ) {
          focus.position.pokemon =
            state.general.battlefield.dimension.height - size;
        }
      }

      return focus;
    }, //move
    nextPosition: (state, user, axis) => {
      const selector = `pokemon${user}`;
      const focus = { ...state[selector].position[axis].position };
      const keysFocus = Object.keys(focus);
      //console.log("...keys :", keysFocus);
      keysFocus.map((tail) => {
        focus[tail] = battle.move.tail(state, user, axis, tail);
      });
      return focus;
    }, //nextPosition
    tail: (state, user, axis, tail) => {
      const selector = `pokemon${user}`;
      switch (tail) {
        case "pokemon": {
          if (state.general.figth.move) {
            const focus = battle.move.step(state, user, axis);
            //console.log("...inFocus :", tail, focus);
            return focus;
          }
        }
        case "tail_0": {
          const focus = state[selector].position[axis].position.pokemon;
          //console.log("...inFocus :", tail, focus);
          return focus;
        }
        default: {
          const beforeNumber = tail.split("_")[1];
          const lessTail = `tail_${beforeNumber - 1}`;
          const focus = state[selector].position[axis].position[lessTail];
          //console.log("...inFocus :", tail, lessTail, focus);
          return focus;
        }
      }
    }, //battle.move.tail
    step: (state, user, axis) => {
      const selector = `pokemon${user}`;
      let speed =
        state[selector].stats.Speed > 30 ? 30 : state[selector].stats.Speed;

        let focus = state[selector].position[axis].position.pokemon;
        const referencePosition = state[selector].position[axis];
      const focusValues = {
        // se maneja un objeto para guardar temporalmente el valor de la posicion y la direccion
        direction: referencePosition.direction.value,
        increment: referencePosition.direction.increment,
        aceleration:
          referencePosition.direction.aceleration.actual + 1+((speed/200) * 0.5),
          speed,
        variable: state[selector].position[axis].direction.variable * 0.5,
      };

      //console.log("focus value", user, state);
      //console.log(focusValues.variable)
      
      const increment =
        3 + (3*focusValues.variable)+
        ((focusValues.increment * focusValues.aceleration * focusValues.speed) /
          (10 /
          focusValues.variable)/4);

      //console.log(focus, focusValues.direction);
      if (
        focusValues.direction === "Rigth" ||
        focusValues.direction === "Down"
      ) {
        focus += increment;
      } else {
        focus = focus - increment;
      }

      return focus;
    }, //battle.move.step
  }, //battle.move
}; //batle

import pokemon from "../../models/pokemon";
import { generate, valuesPokemon } from "./funcions";
import { typesPokemon } from "./typesPokemon";

//!-------------------------------------------------------------------------

//?---------------------------------------------

export const battle = {
  phase: {
    timeCount: (state) => {
      const newState = { ...state };
      //       //console.log(newState)
      newState.general.time.count += newState.general.time.step;
      newState.pokemonUser = battle.phase.nextStep(state, "User");
      newState.pokemonRival = battle.phase.nextStep(state, "Rival");
      //battle.phase.nextStep(state, "User");
      return newState;
    },
    nextStep: (state, user) => {
      let selector = `pokemon${user}`;
      let id = `id_${selector}`;
      let focus = { ...state[selector] };
      focus.position = battle.phase.nextPosition(state, user);
      focus.dimension = battle.get.dimension(id);

      //console.log("focus, in battle", focus);
      return focus;
    },
    nextPosition: (state, user) => {
      let selector = `pokemon${user}`;
      let focus = { ...state[selector].position };
      focus.x = battle.move.nextStep(state, user, "x");
      focus.y = battle.move.nextStep(state, user, "y");
      //console.log("focus, in battle-", focus);
      return focus;
    },
  },
  move: {
    nextStep: (state, user, axis) => {
      let selector = `pokemon${user}`;
      let focus = { ...state[selector].position[axis] };
      //console.log("focus, in battle-_-", focus);
      focus.direction = battle.move.nextDirection(state, user, axis);
      focus.position = battle.move.nextPosition(state, user, axis);
      return focus;
    },
    nextDirection: (state, user, axis) => {
      let selector = `pokemon${user}`;
      let focus = { ...state[selector].position[axis].direction };
      focus.value = battle.get.direction(state, user, axis);
      if (focus.value !== state[selector].position[axis].direction.value) {
        focus.variable = Math.random() * 1.5;
        //console.log("Cambio variable -_-_-" ,axis, focus.variable);
      }
      focus.aceleration = battle.get.aceleration(state, user, axis);

      //console.log("Direction -_-_-", focus);
      return focus;
    },
    nextPosition: (state, user, axis) => {
      let selector = `pokemon${user}`;
      let focus = { ...state[selector].position[axis].position };
      // console.log("focus, in battle-_-_-", focus);
      focus.pokemon = battle.move.tail(state, user, axis, "pokemon");
      focus.tail_0 = battle.move.tail(state, user, axis, 0);
      focus.tail_1 = battle.move.tail(state, user, axis, 1);
      focus.tail_2 = battle.move.tail(state, user, axis, 2);
      focus.tail_3 = battle.move.tail(state, user, axis, 3);
      focus.tail_4 = battle.move.tail(state, user, axis, 4);
      focus.tail_5 = battle.move.tail(state, user, axis, 5);
      focus.tail_6 = battle.move.tail(state, user, axis, 6);
      focus.tail_7 = battle.move.tail(state, user, axis, 7);
      focus.tail_8 = battle.move.tail(state, user, axis, 8);
      focus.tail_9 = battle.move.tail(state, user, axis, 9);
      focus.tail_10 = battle.move.tail(state, user, axis, 10);
      focus.tail_11 = battle.move.tail(state, user, axis, 11);
      focus.tail_12 = battle.move.tail(state, user, axis, 12);
      return focus;
    },
    tail: (state, user, axis, tail) => {
      let selector = `pokemon${user}`;
      switch (tail) {
        case "pokemon":
          {
            if(axis==='x'){
              console.log( 'newPosition',axis , battle.move.next(state, user, axis) )
            }
            return battle.move.next(state, user, axis);
          }
          break;
        case 0: {
          return state[selector].position[axis].position.pokemon;
        }

        default: {
          let afterTail = `tail_${tail - 1}`;
          return state[selector].position[axis].position[afterTail];
        }
      }
    },
    next: (state, user, axis) => {
      let selector = `pokemon${user}`;
      let limitArea = { ...state.general.battlefield.dimension };
      let limitPokemon = { ...state[selector].dimension };
      //console.log(limitPokemon, "LIMIT???????????????????????");
      let direccion = { ...state[selector].position[axis].direction };
      let focus = state[selector].position[axis].position.pokemon;
      let speed = state[selector].stats.speed;
      let divisor = 0.05;
      let step =
        (speed * direccion.variable + speed * direccion.aceleration.actual) *
        (0.5 * divisor * state.general.figth.actualSpeed.value);
        let desfase =valuesPokemon.componentBattle.size.desfase 
      if (direccion.value === "Rigth" || direccion.value === "Down") {
        focus = focus + step;
        focus > 100? (focus = 100) : null;
        console.log("Limit -----------", direccion.value, focus, limitArea);
      }
      if (direccion.value === "Left" || direccion.value === "Up") {
        focus = focus - step;
        focus < 0 ? (focus = 0) : null;
      }
      // console.log('focus, in battle-_-_-______',state[selector].stats,direccion);
       console.log(`focus, in battle-_-_-___${axis}___`, focus, step);
      return focus;
    },
  },

  get: {
    sizePokemon: (state, user) => {
      const pokemon =
      user === "User"
      ? {...state.battlefield.pokemonSelectedUser}
      : {...state.battlefield.pokemonSelectedRival};
      
      if(pokemon?.height>=valuesPokemon.componentBattle.size.max){
        pokemon.height=valuesPokemon.componentBattle.size.max;
      }
      //console.log("InSizePokemon", pokemon?.height,(pokemon?.height)*valuesPokemon.componentBattle.size.scale);
      return (pokemon?.height)*valuesPokemon.componentBattle.size.scale
     
    },
    aceleration: (state, user, axis) => {
      let selector = `pokemon${user}`;
      let focus = { ...state[selector].position[axis].direction.aceleration };
      const speed = state[selector].stats.speed / 100;
      console.log("aceleration -_-_-", focus);
      if (focus.actual < focus.max) {
        focus.actual = focus.actual + speed;
      }
      if (focus.actual >= focus.max) {
        focus.actual = focus.max;
      }

      return focus;
    },

    initialPosition: (user, axis,state) => {
      let size =battle.get.sizePokemon(state,user)
      //console.log('-------------------------- size Data', size)

let desfase=1.2*size

      if (axis === "x") {
        return user === "User" ? 0 : 100-desfase ;
      } else {
        return 50-(size);
      }
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
        return battle.get.bioma();
      }
    },
    dimension: (id) => {
      if (id !== undefined) {
        const battlefield = document.getElementById(id);
        return {
          top: battlefield?.offsetTop || 0,
          left: battlefield?.offsetLeft || 0,
          width: battlefield?.offsetWidth || 0,
          height: battlefield?.offsetHeight || 0,
        };
      } else {
        return {
          top: 0,
          left: 0,
          width: 0,
          height: 0,
        };
      }
    },
    initialDirection: (axis) => {
      const value = Math.random();
      if (axis === "x") {
        return value > 0.5 ? "Left" : "Rigth";
      } else {
        return value > 0.5 ? "Up" : "Down";
      }
    },
    direction: (state, user, axis) => {
      let selector = `pokemon${user}`;
      let focus = state[selector].position[axis].direction.value;
      let positionPokemon = state[selector].dimension;
      const dimensionBattlefield = battle.get.dimension('id_battlefield');
      
      let focusAxis = "a";
      let limitPokemon = 0;
      if (axis === "x") {
        focusAxis = "left";
      } else {
        focusAxis = "top";
      }
      if (focus === "Rigth") {
        limitPokemon = positionPokemon[focusAxis] +positionPokemon.width;

        if (limitPokemon >= dimensionBattlefield.width) {
          console.log(
            "LEFT...............",
            limitPokemon,
            limitPokemon >= dimensionBattlefield.width
          );
          return "Left";
        }
      }
      if (focus === "Left") {
        limitPokemon = positionPokemon[focusAxis];
        if (limitPokemon <= 0) {
          console.log("RIGTH...............", limitPokemon, limitPokemon <= 0);
          return "Rigth";
        }
      }
      if (focus === "Up") {
        limitPokemon = positionPokemon[focusAxis];
        if (limitPokemon <= 0) {
          console.log(
            "Down...............",
            limitPokemon,
            limitPokemon >= dimensionBattlefield.width
          );
          return "Down";
        }
      }
      if (focus === "Down") {
        limitPokemon = positionPokemon[focusAxis] + positionPokemon.height;
        if (limitPokemon >= dimensionBattlefield.height) {
          console.log(
            "Up...............",
            limitPokemon,
            limitPokemon >= dimensionBattlefield.width
          );
          return "Up";
        }
      }

      //console.log("Direction -_-_-'''''''" ,dimensionBattlefield,positionPokemon,focus);

      return focus;
    },
  },
};

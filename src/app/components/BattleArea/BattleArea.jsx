import React, { useState, useEffect } from "react";
import PokemonInBattle from "../PokemonInBattle/PokemonInBattle";
import { battle } from "@/Assets/battle";
import { generate } from "@/Assets/funcions";
import next from "next";
import { typesPokemon } from "@/Assets/typesPokemon";

function BattleArea({ localState }) {
  const axis = {
    direction: {
      value: "",
      variable: 0.5,
      aceleration: {
        actual: 0,
        max: 1,
        min: 0.25,
      },
    },
    position: {
      pokemon: 0,
      tail_0: 0,
      tail_1: 0,
      tail_2: 0,
      tail_3: 0,
      tail_4: 0,
      tail_5: 0,
      tail_6: 0,
    },
  };
  const position = {
    size: 5,
    x: { ...axis },
    y: { ...axis },
    rotation: 0,
  };

  const formatinitialState = (user) => {
    const pokemonSelectedUser = `pokemonSelected${user}`;
    return {
      stats: {
        heald: generate.getStat(
          localState.battlefield[pokemonSelectedUser],
          "Heald"
        ),
        attack: generate.getStat(
          localState.battlefield[pokemonSelectedUser],
          "Attack"
        ),
        deffense: generate.getStat(
          localState.battlefield[pokemonSelectedUser],
          "Deffense"
        ),
        specialAttack: generate.getStat(
          localState.battlefield[pokemonSelectedUser],
          "SpecialAttack"
        ),
        specialDeffense: generate.getStat(
          localState.battlefield[pokemonSelectedUser],
          "SpecialDeffense"
        ),
        speed: generate.getStat(
          localState.battlefield[pokemonSelectedUser],
          "Speed"
        ),
      },
      data: { ...localState.battlefield[pokemonSelectedUser] },
      position: {
        ...position,
        size:battle.get.sizePokemon(localState,user),
          // localState.battlefield[pokemonSelectedUser]?.height <2.5
          //   ? position.size *
          //     localState.battlefield[pokemonSelectedUser]?.height
          //   : position.size * 2.5,

        x: {
          ...axis,
          direction: {
            ...axis.direction,
            value: battle.get.initialDirection("x"),
          },
          position: {
            ...axis.position,
            pokemon: battle.get.initialPosition(user, "x", localState),
            tail_0: battle.get.initialPosition(user, "x", localState),
            tail_1: battle.get.initialPosition(user, "x", localState),
            tail_2: battle.get.initialPosition(user, "x", localState),
            tail_3: battle.get.initialPosition(user, "x", localState),
            tail_4: battle.get.initialPosition(user, "x", localState),
            tail_5: battle.get.initialPosition(user, "x", localState),
            tail_6: battle.get.initialPosition(user, "x", localState),
            tail_7: battle.get.initialPosition(user, "x", localState),
            tail_8: battle.get.initialPosition(user, "x", localState),
            tail_9: battle.get.initialPosition(user, "x", localState),
            tail_10: battle.get.initialPosition(user, "x", localState),
            tail_11: battle.get.initialPosition(user, "x", localState),
            tail_12: battle.get.initialPosition(user, "x", localState),
          },
        },
        y: {
          ...axis,
          direction: {
            ...axis.direction,
            value: battle.get.initialDirection("y"),
          },
          position: {
            ...axis.position,
            pokemon: battle.get.initialPosition(user, "y", localState),
            tail_0: battle.get.initialPosition(user, "y", localState),
            tail_1: battle.get.initialPosition(user, "y", localState),
            tail_2: battle.get.initialPosition(user, "y", localState),
            tail_3: battle.get.initialPosition(user, "y", localState),
            tail_4: battle.get.initialPosition(user, "y", localState),
            tail_5: battle.get.initialPosition(user, "y", localState),
            tail_6: battle.get.initialPosition(user, "y", localState),
            tail_7: battle.get.initialPosition(user, "y", localState),
            tail_8: battle.get.initialPosition(user, "y", localState),
            tail_9: battle.get.initialPosition(user, "y", localState),
            tail_10: battle.get.initialPosition(user, "y", localState),
            tail_11: battle.get.initialPosition(user, "y", localState),
            tail_12: battle.get.initialPosition(user, "y", localState),
          },
        },
      },
      dimension: battle.get.dimension(`id_pokemon${user}`),
    };
  };

  const formatGeneral = {
    time: {
      phase: 1000, //delay entre la trancicion de comenzar la batalla y empezar a moverse los pokemon
      step: 1, //incremeto de pasos por turno
      count: 0, //conteo de pasos en la talla pokemon
      delay: 5, //tiempo que demora de delay para generar el siguiente paso o posicion del pokemon
    },

    figth: {
      state: false, // identificador de estado para saber si se esta en la batalla o no
      pause: false,
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
        value: battle.get.bioma(),
        difficult: localState.battlefield.difficult || "equal",
      },
      width: 600, //ancho de el campo pokemon (px)
      height: 400, //alto de el campo pokemon (px)
      dimension: battle.get.dimension(`id_battlefield`),
    },
  };

  const initialState = {
    pokemonRival: formatinitialState("Rival"),
    pokemonUser: formatinitialState("User"),
    general: formatGeneral,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({ ...initialState });
  }, [localState]);

  useEffect(() => {
    if (localState.phase === "fight") {
      console.log("TIMER .....");
      const stepTimer = setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          general: {
            ...prevState.general,
            figth: {
              ...prevState.general.figth,
              state: true,
            },
          },
        }));
      }, state.general.time.phase);
      return () => clearTimeout(stepTimer); // Limpiar el temporizador al desmontar el componente
    }
  }, [localState.phase === "fight"]);

  useEffect(() => {
    let battleTimer = setTimeout(() => {
      if (state.general.figth.state && !state.general.figth.pause) {
        console.log("Go to Fight .....", state.general.time.count);
        setState(battle.phase.timeCount(state));
      }
    }, state.general.time.delay / state.general.figth.actualSpeed.value);
    return () => clearTimeout(battleTimer);
  }, [state.general.figth.state, state.general.time.count]);


  useEffect(() => {
    
       console.log('change !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
     
  }, [state.pokemonUser.position.size]);


  const handlerPause = () => {
    const newState = {
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
    //console.log(newState)
    setState(newState);
  };
  //?-------------------------------------------------------------------------------------------------
  //console.log("in Area", state.pokemonUser.position.x.position);
  return (
    <>
      <div
        className="battlefield"
        id={`id_battlefield`}
        style={{
          position: "relative",
          width: `${state.general.battlefield.width}vw`,
          height: `${state.general.battlefield.height}vh`,
          display: "flex",
          //alignItems: "center",
          //justifyContent: "space-between",
          backgroundColor: "rgba(70,82,222,1)",
          color: "rgba(2,2,2,1)",
          margin:'0px',
          padding:'0px',
        
        }}
        >
        {/* {localState.phase === "fight" && state.general.figth.state === false ? (
          <h1
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
            }}
          >
            {localState.phase} !!!
          </h1>
        ) : null} */}

        <div
          style={{
            position: "absolute",
            top: `${state.pokemonUser.position.y.position.tail_12}%`,
            left: `${state.pokemonUser.position.x.position.tail_12}%`,
            width: `${state.pokemonUser.position.size}vw`,
            height: `${state.pokemonUser.position.size}vw`,
            backgroundColor: "rgba(22,22,22,0.01)",
            opacity:'1',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          }}
        >
          <div
          style={{
            width: `${state.pokemonUser.position.size/1.5}vw`,
            height: `${state.pokemonUser.position.size/1.5}vw`,
            backgroundColor: "rgba(22,22,22,0.3)",
            opacity:'1',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:'25%'
          }}>

          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: `${state.pokemonUser.position.y.position.tail_6}%`,
            left: `${state.pokemonUser.position.x.position.tail_6}%`,
            width: `${state.pokemonUser.position.size}vw`,
            height: `${state.pokemonUser.position.size}vw`,
            backgroundColor: "rgba(22,22,22,0.01)",
            opacity:'1',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          }}
        >
          <div
          style={{
            
            
            width: `${state.pokemonUser.position.size/1.2}vw`,
            height: `${state.pokemonUser.position.size/1.2}vw`,
            backgroundColor: "rgba(22,22,22,0.5)",
            opacity:'1',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          }}>

          </div>
        </div>
       

        <div
          id={`id_pokemonUser`}
          style={{
            position: "absolute",
            top: `${state.pokemonUser.position.y.position.pokemon}%`,
            left: `${state.pokemonUser.position.x.position.pokemon}%`,
            width: `${state.pokemonUser.position.size}vw`,
            height: `${state.pokemonUser.position.size}vw`,
            backgroundColor: "rgba(22,22,22,0.01)",
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          }}
        >
          <PokemonInBattle pokemon={state.pokemonUser} />
        </div>


        <div
          id={`id_pokemonUser`}
          style={{
            position: "absolute",
            top: `${state.pokemonRival.position.y.position.pokemon}%`,
            left: `${state.pokemonRival.position.x.position.pokemon}%`,
            width: `${state.pokemonRival.position.size}vw`,
            height: `${state.pokemonRival.position.size}vw`,
            backgroundColor: "rgba(22,22,22,0.01)",
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          }}
        >
          <PokemonInBattle pokemon={state.pokemonRival} />
        </div>


      </div>

      <button onClick={handlerPause}>
        {" "}
        {!state.general.figth.pause ? "Pause" : "Play"}
      </button>
    </>
  );
}
export default BattleArea;

// function BattleArea({ localState }) {
//   const axis = {
//     direction: {value:'',variable:0.5 },
//     position: 0,
//     aceleration: {
//       actual: 0,
//       max: 1,
//       min: 0.25,
//     },
//   };
//   const position = {
//     size: 5 * 1,
//     x: { ...axis },
//     y: { ...axis },
//     rotation: 0,
//   };

//   const formatinitialState = (user) => {
//     const pokemonSelectedUser = `pokemonSelected${user}`;
//     //console.log('CONT......', pokemonSelectedUser,localState.battlefield[pokemonSelectedUser])

//     return {
//       stats: {
//         heald: generate.getStat(
//           localState.battlefield[pokemonSelectedUser],
//           "Heald"
//         ),
//         attack: generate.getStat(
//           localState.battlefield[pokemonSelectedUser],
//           "Attack"
//         ),
//         deffense: generate.getStat(
//           localState.battlefield[pokemonSelectedUser],
//           "Deffense"
//         ),
//         specialAttack: generate.getStat(
//           localState.battlefield[pokemonSelectedUser],
//           "SpecialAttack"
//         ),
//         specialDeffense: generate.getStat(
//           localState.battlefield[pokemonSelectedUser],
//           "SpecialDeffense"
//         ),
//         speed: generate.getStat(
//           localState.battlefield[pokemonSelectedUser],
//           "Speed"
//         ),
//       },
//       data: { ...localState.battlefield[pokemonSelectedUser] },
//       position: {
//         ...position,
//         size:
//           localState.battlefield[pokemonSelectedUser]?.height < 2.5
//             ? position.size *
//               localState.battlefield[pokemonSelectedUser]?.height
//             : position.size * 2.5,

//         x: {
//           ...axis,
//           direction: battle.get.initialDirection("x"),
//           position: user === "User" ? 0 : 0,
//         },
//         y: {
//           ...axis,
//           direction: battle.get.initialDirection("y"),
//           position: 50 - position.size,
//         },
//       },
//       dimension:battle.get.dimension(`id_pokemon${user}`)
//     };
//   };

//   const formatGeneral = {
//     step: 1,
//     timeCount: 0,
//     timmer: 16,
//     timmerChangePhase: 1000,
//     bioma: localState.battlefield.bioma,
//     difficult: localState.battlefield.difficult,
//     inFight: false,
//     pause: false,
//     stepsSpeed: [0.1, 0.5, 0.75, 1, 1.5, 1.75, 2],
//     actualSpeed: 1,
//     battlefield: {
//       width: 80,
//       height: 70,
//       dimension:battle.get.dimension(`id_battlefield`)
//     },
//   };

//   const initialState = {
//     pokemonRival: formatinitialState("Rival"),
//     pokemonUser: formatinitialState("User"),
//     general: formatGeneral,
//   };

//   const [state, setState] = useState(initialState);

//   useEffect(() => {
//     setState({ ...initialState });
//   }, [localState]);

//   useEffect(() => {
//     if (localState.phase === "fight") {
//       console.log("TIMER .....");
//       const stepTimer = setTimeout(() => {
//         setState((prevState) => ({
//           ...prevState,
//           general: {
//             ...prevState.general,
//             inFight: true,
//           },
//         }));
//       }, state.general.timmerChangePhase);

//       return () => clearTimeout(stepTimer); // Limpiar el temporizador al desmontar el componente
//     }
//   }, [localState.phase === "fight"]);

//   useEffect(() => {
//     let battleTimer = setTimeout(() => {
//       if (state.general.inFight && !state.general.pause) {
//         console.log("Go to Fight .....", state.general.timeCount);
//         setState(battle.phase.timeCount(state));
//       }
//     }, state.general.timmer);
//     return () => clearTimeout(battleTimer);
//   }, [state.general.inFight, state.general.timeCount]);

//   const handlerPause = () => {
//     console.log(state.general.timeCount + 1);
//     setState({
//       ...state,
//       general: {
//         ...state.general,
//         pause: !state.general.pause,
//         timeCount: state.general.timeCount + 1,
//       },
//     });
//   };
//   //console.log(state);
//   return (
//         <>
//           <div
//             className="battlefield"
//             id={`id_battlefield`}
//             style={{
//               position: "relative",
//               width: `${state.general.battlefield.width}%`,
//               height: `${state.general.battlefield.height}%`,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               backgroundColor: "rgba(122,82,122,1)",
//               color: "rgba(2,2,2,1)",
//             }}
//           >
//             {localState.phase === "fight" && state.general.inFight === false ? (
//               <h1
//                 style={{
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                 }}
//               >
//                 {localState.phase} !!!
//               </h1>
//             ) : null}
//             <div
//               id={`id_pokemonUser`}
//               style={{
//                 position: "absolute",
//                 top: `${
//                   state.pokemonUser.position.y.position -
//                   state.pokemonUser.position.size / 2
//                 }%`,
//                 left: `${state.pokemonUser.position.x.position}%`,
//                 width: `${state.pokemonUser.position.size}vw`,
//                 height: `${state.pokemonUser.position.size}vw`,
//                 backgroundColor:'red'
//               }}
//             >
//               <PokemonInBattle pokemon={state.pokemonUser} />
//             </div>
//             <div
//               id={`id_pokemonRival`}
//               style={{
//                 position: "absolute",
//                 top: `${state.pokemonRival.position.y.position}%`,
//                 left: `${state.pokemonRival.position.x.position}%`,
//                 width: `${state.pokemonRival.position.size}vw`,
//                 height: `${state.pokemonRival.position.size}vw`,
//               }}
//             >
//               <PokemonInBattle pokemon={state.pokemonRival} />
//             </div>
//           </div>
//           <div>positionX: {state.pokemonUser.position.x.aceleration.actual}</div>
//           <button onClick={handlerPause}>
//             {" "}
//             {!state.general.pause ? "Pause" : "Play"}
//           </button>
//         </>
//       );
// }

// export default BattleArea;

//   const getDimension = (id) => {
//     if (id !== undefined) {
//       const battlefield = document.getElementById(id);

//       return {
//         top: battlefield.offsetTop,
//         left: battlefield.offsetLeft,
//         width: battlefield.offsetWidth,
//         height: battlefield.offsetHeight,
//       };
//     } else {
//       return {
//         top: 0,
//         left: 0,
//         width: 0,
//         height: 0,
//       };
//     }
//   };

//   const initialDirection = (axis = "X") => {
//     const value = Math.random();
//     if (axis === "X") {
//       return value > 0.5 ? "Up" : "Down";
//     } else {
//       return value > 0.5 ? "Left" : "Rigth";
//     }
//   };
//   const handlerPause = () => {
//     console.log(state.general.timeCount + 1);
//     setState({
//       ...state,
//       general: {
//         ...state.general,
//         pause: !state.general.pause,
//         timeCount: state.general.timeCount + 1,
//       },
//     });
//   };
//   const axis = {
//     direction: "",
//     position: 0,
//     aceleration: {
//       actual: 0,
//       max: 1,
//       min: 0.25,
//       variable: 0.5,
//     },
//   };
//   const position = {
//     size: 5 * 1,
//     x: { ...axis },
//     y: { ...axis },
//     rotation: 0,
//   };

//   const formatinitialState = (user) => {
//     const pokemonSelectedUser = `pokemonSelected${user}`;
//     //console.log('CONT......', pokemonSelectedUser,localState.battlefield[pokemonSelectedUser])

//     return {
//       stats: {
//         heald: generate.getStat(
//           localState.battlefield[pokemonSelectedUser],
//           "Heald"
//         ),
//         attack: generate.getStat(
//           localState.battlefield[pokemonSelectedUser],
//           "Attack"
//         ),
//         deffense: generate.getStat(
//           localState.battlefield[pokemonSelectedUser],
//           "Deffense"
//         ),
//         specialAttack: generate.getStat(
//           localState.battlefield[pokemonSelectedUser],
//           "SpecialAttack"
//         ),
//         specialDeffense: generate.getStat(
//           localState.battlefield[pokemonSelectedUser],
//           "SpecialDeffense"
//         ),
//         speed: generate.getStat(
//           localState.battlefield[pokemonSelectedUser],
//           "Speed"
//         ),
//       },
//       data: { ...localState.battlefield[pokemonSelectedUser] },
//       position: {
//         ...position,
//         size:
//           localState.battlefield[pokemonSelectedUser]?.height < 2.5
//             ? position.size *
//               localState.battlefield[pokemonSelectedUser]?.height
//             : position.size * 2.5,

//         x: {
//           ...axis,
//           direction: initialDirection("X"),
//           position: user === "User" ? 5 : 90,
//         },
//         y: {
//           ...axis,
//           direction: initialDirection("Y"),
//           position: 50 - position.size,
//         },
//       },
//     };
//   };

//   const formatGeneral = {
//     step: 1,
//     timeCount: 0,
//     timmer: 16,
//     timmerChangePhase: 1000,
//     bioma: localState.battlefield.bioma,
//     difficult: localState.battlefield.difficult,
//     inFight: false,
//     pause: false,
//     stepsSpeed: [0.1, 0.5, 0.75, 1, 1.5, 1.75, 2],
//     actualSpeed: 1,
//     battlefield: {
//       width: 80,
//       height: 70,
//     },
//   };

//   const initialState = {
//     pokemonRival: formatinitialState("Rival"),
//     pokemonUser: formatinitialState("User"),
//     general: formatGeneral,
//   };

//   const [state, setState] = useState(initialState);

//   useEffect(() => {
//     setState({ ...initialState });
//   }, [localState]);

//   useEffect(() => {
//     if (localState.phase === "fight") {
//       console.log("TIMER .....");
//       const stepTimer = setTimeout(() => {
//         setState((prevState) => ({
//           ...prevState,
//           general: {
//             ...prevState.general,
//             inFight: true,
//           },
//         }));
//       }, state.general.timmerChangePhase);

//       return () => clearTimeout(stepTimer); // Limpiar el temporizador al desmontar el componente
//     }
//   }, [localState.phase === "fight"]);

//   useEffect(() => {
//     let battleTimer = setTimeout(() => {
//       if (state.general.inFight && !state.general.pause) {
//         console.log("Go to Fight .....", state.general.timeCount);
//         setState(battle.nextStep(state));
//       }
//     }, state.general.timmer);
//     return () => clearTimeout(battleTimer);
//   }, [state.general.inFight, state.general.timeCount]);

//   console.log(state);

//   return (
//     <>
//       <div
//         className="battlefield"
//         id={`id_battlefield`}
//         style={{
//           position: "relative",
//           width: `${state.general.battlefield.width}%`,
//           height: `${state.general.battlefield.height}%`,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           backgroundColor: "rgba(122,82,122,1)",
//           color: "rgba(2,2,2,1)",
//         }}
//       >
//         {localState.phase === "fight" && state.general.inFight === false ? (
//           <h1
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//             }}
//           >
//             {localState.phase} !!!
//           </h1>
//         ) : null}
//         <div
//           id={`id_pokemonUser`}
//           style={{
//             position: "absolute",
//             top: `${
//               state.pokemonUser.position.y.position -
//               state.pokemonUser.position.size / 2
//             }%`,
//             left: `${state.pokemonUser.position.x.position}%`,
//             width: `${state.pokemonUser.position.size}vw`,
//             height: `${state.pokemonUser.position.size}vw`,
//           }}
//         >
//           <PokemonInBattle pokemon={state.pokemonUser} />
//         </div>
//         <div
//           id={`id_pokemonRival`}
//           style={{
//             position: "absolute",
//             top: `${state.pokemonRival.position.y.position}%`,
//             left: `${state.pokemonRival.position.x.position}%`,
//             width: `${state.pokemonRival.position.size}vw`,
//             height: `${state.pokemonRival.position.size}vw`,
//           }}
//         >
//           <PokemonInBattle pokemon={state.pokemonRival} />
//         </div>
//       </div>
//       <div>positionX: {state.pokemonUser.position.x.position}</div>
//       <button onClick={handlerPause}>
//         {" "}
//         {!state.general.pause ? "Pause" : "Play"}
//       </button>
//     </>
//   );

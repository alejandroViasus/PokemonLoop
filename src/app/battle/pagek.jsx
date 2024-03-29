"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { battle } from "./battlek";
import { useSearchParams, useRouter } from "next/navigation";

import { valuesPokemon } from "@/Assets/funcions";
import { generate as generateFunction } from "@/Assets/funcions";

//Components
import CheckInTeam from "../components/BattleComponents/CheckInTeam/CheckInTeam";
import SelectMode from "../components/BattleComponents/SelectMode/SelectMode";
import RedirectionTeam from "../components/BattleComponents/RedirectionTeam/RedirectionTeam";
import SelectPokemonTeam from "../components/BattleComponents/SelectPokemonTeam/SelectPokemonTeam";
import BattleField from "../components/BattleComponents/BattleField/BattleField";
import TeasterTurn from "../components/BattleComponents/TeasterTurn/TeasterTurn";
function page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const globalState = useSelector((state) => state.valueState);
  const [state, setState] = useState(battle.initialState(globalState));
  const urlHome = "/";
  //console.log(state);

  useEffect(() => {
    //valido si el globalState tiene datos validos, de lo contrario re dirije a "/"
    if (globalState.user._id == 0) {
      router.push(`${urlHome}`);
    }
  }, []);

  useEffect(() => {
    if (
      (state.validation.team === 5 || state.validation.team === "continue") &&
      state.validation.mode !== "" &&
      state.phase !== battle.phases[1]
    ) {
      const newState = { ...state };

      newState.phase = battle.phases[1];
      setState(newState);
    }
  }, [state]);

  useEffect(async() => {
    if (state.pokeRivaldex.length === 5) {
      //console.log("Ready To Create Team Rival");

      //!-------------------------------
      const fetchArray = await state.pokeRivaldex?.map((noPokedex) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${noPokedex}`)
      );
      if (fetchArray !== undefined) {
        const newState = { ...state };
        Promise.all(fetchArray)
          .then((responses) =>
            Promise.all(responses.map((response) => response.json()))
          )
          .then((data) => {
            const createTeam = [];
            data.map((pokemon) => {
              let referencePokemon = generateFunction.newPokemon(
                pokemon,
                newState.trainers.rival,
                newState.general
              );
              referencePokemon._id = `rival${
                Math.random() * (referencePokemon.id || 1)
              }${referencePokemon.name}${
                Math.random() * (referencePokemon.id || 1)
              }`;
              createTeam.push(referencePokemon);
            });

            //console.log('TEAM POKEMON =' ,createTeam)
            newState.team.rival = createTeam;
            setState({ ...newState });
          });
      }

      //!-------------------------------
    }
  }, [state.pokeRivaldex]);

  useEffect(() => {
    if (state.team?.rival?.length === valuesPokemon.componentBattle.size.team) {
      const newState = { ...state };
      newState.selectorPokemon.user = battle.get.randomIndexPokemonSelector(
        state.team?.user
      );
      newState.selectorPokemon.rival = battle.get.randomIndexPokemonSelector(
        state.team?.rival
      );
      setState({ ...newState });
    }
  }, [state.team.rival]);

  const methods = {
    handlerPosition:(position,user)=>{
      const newState={...state}
    },
    handlerSetTurn:()=>{
      const newState = { ...state };
      newState.turn=newState.turn===battle.turn[0]?battle.turn[1]:battle.turn[0]
      setState(newState);

    },
    selector: {
      pokemon: (value, user = "rival") => {
        if (user === "user") {
          //console.log("SELECT", user, ":", value);
          const newState = { ...state };
          newState.selectorPokemon[user] = value;
          setState(newState);
          
        }
      },
      cardVector: (value, user = "rival") => {
        const newState = { ...state };
        newState.selectorCardVector[user] = value;
        setState(newState);
        //console.log('NewState' , newState.selectorCardVector[user])
      },
    },
    changePhaseAndInGame:(valuePhase,valueInGame)=>{
      const newState = { ...state };
      newState.phase= valuePhase;
      newState.inGame = valueInGame;
      return setState(newState);
    },
    changeInGame: (value,turn='user') => {
      const newState = { ...state };
      newState.turn=turn
      newState.inGame = value;
      return setState(newState);
    },
    changePhase: (value) => {
      const newState = { ...state };
      newState.phase = value;
      console.log("newState:", newState);
      return setState(newState);
    },
    changeValidation: (value, property) => {
      const newState = { ...state };
      newState.validation[property] = value;
      //console.log("newState-validation :", newState);
      return setState(newState);
    },
  };

 

  return (
    <div className="content-battle">
      {/*"//? esta es la fase de validaciones en esta fase se validara :

      // verifica si el equipo pokemon esta completo , si, ( si ) lo esta dejara pasar a la siguiente validacion , si (no) , permitira redireccionaar a Home o a login o continuar 
      // selecciona el modo de juego
      //! seleccion de pokemon
      */}

      {/*//! validation si el equipo pokemon es muy pequenio y el usuario no quiere continuar */}
      {state.validation.team === "no" ? (
        <RedirectionTeam globalState={globalState} methods={methods} />
      ) : null}

      {/*//! validation del tamanio del equipo pokemon */}
      {state.validation.team < 5 &&
      state.validation.team !== "continue" &&
      state.validation.team !== "no" ? (
        <CheckInTeam globalState={globalState} methods={methods} />
      ) : null}

      {/*//! validation ModeGame */}
      {state.validation.mode === "" ? (
        <SelectMode globalState={globalState} methods={methods} />
      ) : null}

      {/*//! selection pokemon */}
      {state.phase === battle.phases[1] && state.inGame === battle.inGame[0] ? (
        <SelectPokemonTeam battleState={state} methods={methods} />
      ) : null}
      {/*//! componente BattleField */}
      {state.phase === battle.phases[1] ? (
        // <BattleField battleState={state} methods={methods} />
        <TeasterTurn battleState={state} methods={methods}/>
      ) : null}
    </div>
  );
}

export default page;

// "use client";

// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useRouter, useSearchParams } from "next/navigation";

// import { generate, initialStateBattle } from "./battle";
// import { generate as generateFunction } from "@/Assets/funcions";
// import { valuesPokemon } from "@/Assets/funcions";

// //! import component

// import SelectorAlert from "../components/battle/SelectorAlert/SelectorAlert";
// import SelectorMode from "../components/battle/SelectorMode/SelectorMode";
// import SelectPokemon from "../components/battle/SelectPokemon/SelectPokemon";
// import BattleField from "../components/battle/BattleField/BattleField";

// function page() {
//   const globalState = useSelector((state) => state.valueState);
//   const searchParams = useSearchParams();
//   const userId = searchParams.get("id");
//   const router = useRouter();
//   // vamos a crear unas cartas de movimiento aleatoria con posiciones y aceleraciones aleatoria
//   const [state, setState] = useState(initialStateBattle(globalState));

//   useEffect(() => {
//     //console.log("state", state);
//     //console.log("globalState", globalState);
//     //console.log(".................battle");
//     if (globalState.user._id == 0) {
//       router.push(`${valuesPokemon.componentBattle.redirection.urlHome.url}`);
//     }
//   }, []);

//   useEffect(() => {
//     //! usamos este UseEffect para crear el Equipo Pokemon riva , asignandole propiuedades unicas como las baseStatEnffort level (segun level de entrenador)
//     const newState = { ...state };
//     //console.log("Ok", newState);
//     const teamRival = state.rival.noPokedexTeamPokemon;
//     const fetchArray = teamRival?.map((noPokedex) =>
//       fetch(`https://pokeapi.co/api/v2/pokemon/${noPokedex}`)
//     );
//     if (fetchArray !== undefined) {
//       Promise.all(fetchArray)
//         .then((responses) =>
//           Promise.all(responses.map((response) => response.json()))
//         )
//         .then((data) => {
//           const createTeam = [];
//           data.map((pokemon) => {
//             let referencePokemon = generateFunction.newPokemon(
//               pokemon,
//               newState.rival.dataTrainer,
//               newState.general
//             );
//             referencePokemon._id = `rival${
//               Math.random() * (referencePokemon.id || 1)
//             }${referencePokemon.name}${
//               Math.random() * (referencePokemon.id || 1)
//             }`;
//             createTeam.push(referencePokemon);
//           });

//           //console.log('TEAM POKEMON =' ,createTeam)
//           newState.rival.teamPokemon = createTeam;
//           //console.log("Ok___", newState);

//           //! se crean los stats de todos los pokemon de cada entrnador
//           newState.user.statsTeam = generate.stats(newState.user.teamPokemon);
//           newState.rival.statsTeam = generate.stats(newState.rival.teamPokemon);

//           setState({ ...newState });
//         });
//     }
//   }, [state.rival?.noPokedexTeamPokemon]);

//   // useEffect(() => {
//   //   const newState = { ...state };
//   //   //! se aparto esta sona para elejir un pokemon aleatorio para el usuario y el rival
//   //   newState.game.user.idpokemonSelect = generate.selecRandomAlivePokemon(
//   //     newState.user.teamPokemon
//   //   );
//   //   newState.game.rival.idpokemonSelect = generate.selecRandomAlivePokemon(
//   //     newState.rival.teamPokemon
//   //   );
//   //   console.log("ActualState", newState);
//   //   setState({ ...newState });
//   // }, [state.rival.teamPokemon]);

//   useEffect(() => {
//     const newState = { ...state };
//     newState.game.user.idpokemonSelect = generate.selecRandomAlivePokemon(
//       newState.user.teamPokemon
//     );
//     newState.game.rival.idpokemonSelect = generate.selecRandomAlivePokemon(
//       newState.rival.teamPokemon
//     );
//   }, [state.phase?.team === "Yes"]);

//   useEffect(() => {
//     if (state.phase.selectPokemon === "Complete") {
//       console.log("Comenzo La batalla ");
//     }
//   }, [state.phase.selectPokemon]);
//   useEffect(() => {
//     //! hago el Timmer por turno
//     if (state.game.actualPhase === 1) {
//       if (state.general.time.timeTurn > 0) {
//         const contadorTimeout = setTimeout(() => {
//           const newState = { ...state };
//           state.general.time.timeTurn -= state.general.time.delay;

//           console.log(`timmer:  ${newState.general.time.timeTurn}`);
//           setState(newState);
//         }, state.general.time.delay);
//         return () => clearTimeout(contadorTimeout);
//       } else {
//         const newState = { ...state };
//         newState.game.actualPhase = 2;
//         setState(newState);
//       }
//     }
//   }, [state.game.actualPhase === 1, state.general.time.timeTurn]);

//   const handlers = {
//     phaseGame: (value) => {
//       if (value !== undefined) {
//         const newState = { ...state };
//         newState.game.actualPhase = value;

//         setState(newState);
//       }
//     },
//     SelectCardVector: (user, value) => {
//       let newState = { ...state };
//       newState.game[user].cardSelect = value;
//       setState(newState);
//     },
//   };

//   const handlerPhase = (value, property) => {
//     if (property !== undefined) {
//       const newState = { ...state };
//       newState.phase[property] = value;
//       setState(newState);
//     }
//   };
//   const handlerSelect = (index, user) => {
//     if (user === "user") {
//       const newState = { ...state };
//       newState.game[user].idpokemonSelect = index;
//       setState(newState);
//     }
//   };

//   return (
//     <div
//       style={{
//         position: "realtive",
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       {
//         //!Validaciones de las fases
//       }

//       {state.phase?.team === "Yes" ? (
//         <BattleField state={state} handlers={handlers} />
//       ) : null}

//       {state.phase?.selectPokemon === "" && state.phase?.team === "Yes" ? (
//         <SelectPokemon
//           state={state}
//           handlers={handlers}
//           handler={handlerPhase}
//           handlerSelect={handlerSelect}
//         />
//       ) : null}
//       {state.phase?.selectorMode === "" ? (
//         <SelectorMode
//           handler={handlerPhase}
//           handlers={handlers}
//           phase={valuesPokemon.componentBattle.phases.values[0]}
//           title="Select Mode"
//         />
//       ) : null}

//       {state.phase?.team === "" ? (
//         <SelectorMode
//           handlers={handlers}
//           handler={handlerPhase}
//           phase={valuesPokemon.componentBattle.phases.values[1]}
//           title="Your Pokémon team is small, do you want to continue?"
//         />
//       ) : null}
//       {state.phase?.team === "No" ? (
//         <SelectorMode
//           handlers={handlers}
//           handler={handlerPhase}
//           phase={valuesPokemon.componentBattle.phases.values[1]}
//           title="What do u want"
//           redirection={valuesPokemon.componentBattle.redirection}
//           id={userId}
//         />
//       ) : null}
//     </div>
//   );
// }

// export default page;

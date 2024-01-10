"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { assetBattle, battleVariables, handlerState } from "./battle";
import { generate } from "@/Assets/funcions";

//!Components
import BattleField from "../components/Battle/BattleField/BattleField";
import BoxSelectPokemon from "../components/Battle/BoxSelectPokemon/BoxSelectPokemon";
import EndGame from "../components/Battle/EndGame/EndGame";
import ShowCardsVector from "../components/Battle/ShowCardsVector/ShowCardsVector";

function Page() {
  const globalState = useSelector((state) => state.valueState);
  const [state, setState] = useState(assetBattle.initialState(globalState));
  console.log(state);

  useEffect(() => {
    const fetchArray = state.game.teamRivalPokedex?.map((noPokedex) =>
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
            let referencePokemon = generate.newPokemon(
              pokemon,
              state.trainer.rival
            );
            referencePokemon._id = `rival${
              Math.random() * (referencePokemon.id || 1)
            }${referencePokemon.name}${
              Math.random() * (referencePokemon.id || 1)
            }`;
            createTeam.push(referencePokemon);
          });
          newState.team.rival = createTeam;
          setState({ ...newState });
        });
    }
  }, [state.game.teamRivalPokedex]);

  useEffect(() => {
    const newState = { ...state };
    if (state.team.rival) {
      const speedPokemonUser =
        generate.getStat(state.team.user[state.select.pokemon.user], "Speed") ||
        0;
      const speedPokemonRival =
        generate.getStat(
          state.team.rival[state.select.pokemon.rival],
          "Speed"
        ) || 0;
      console.log("Init SetPosition", speedPokemonUser, speedPokemonRival);
      if (speedPokemonUser >= speedPokemonRival) {
        newState.game.phase;
      }
    }
  }, [state.team.rival, state.select.pokemon]);

  useEffect(() => {
    if (state.phase.actual === battleVariables.phases.length - 2) {
      console.log(`TIME ${battleVariables.timmer.turn.delay}`);
      // Configurar el temporizador
      const setTimmer = setTimeout(() => {
        let newState = { ...state };
        newState = handlerState.addTimmerTurn(state);
        console.log("Timmer !!!!!!!!");
        setState(newState);
      }, battleVariables.timmer.turn.delay);

      // Limpiar el temporizador al desmontar el componente
      return () => clearTimeout(setTimmer);
    }
  }, [state.phase.actual, state.turn.timmer]);

  useEffect(() => {
    if (state.phase.actual === 5) {
      console.log("new Phase", battleVariables.phases[state.phase.actual]);
      setState(handlerState.pokemonInMove({ ...state }));
    }
  }, [state.phase.actual === 5]);

  useEffect(() => {
    if (
      state.phase.actual === 5 &&
      state.team.user[state.select.pokemon.user].heald > 0 &&
      state.team.rival[state.select.pokemon.rival].heald > 0
    ) {
      const trainerTurn = state.turn.user ? "user" : "rival";

      
      const cardSelected =
        state.vectorCards[trainerTurn][state.select.cardVector[trainerTurn]];

      if (cardSelected.powerActual > 0) {
        const timeoutId = setTimeout(() => {
          // console.log("change Position", cardSelected.powerActual);
          setState(handlerState.pokemonInMove({ ...state }));
        }, battleVariables.timmer.inMove.delay);
        return () => clearTimeout(timeoutId);
      } else {
        const newState = { ...state };
        newState.vectorCards.rival =
          assetBattle.create.randomGroupCardsVector();
        newState.vectorCards.user = assetBattle.create.randomGroupCardsVector();
        newState.turn.user = !newState.turn.user;
        newState.phase.actual = 4;
        console.log("Change Turn !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        console.log(newState, "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        setState(newState);
      }
    } else {
      const newState = { ...state };
      newState.phase.actual = 3;
      newState.turn.user = !newState.turn.user;
      (newState.position.user = assetBattle.get.initalPosition("user")),
        (newState.position.rival = assetBattle.get.initalPosition("rival")),
        setState(newState);
    }
  }, [
    state.position.rival.pokemon.x,
    state.position.rival.pokemon.y,
    state.position.user.pokemon.x,
    state.position.user.pokemon.y,
  ]);

  const methods = {
    selector: {
      pokemon: (index, trainer) => {
        const newState = { ...state };
        state.select.pokemon[trainer] = index;
        return setState(newState);
      },
      cardVector: (index, trainer = "user") => {
        const newState={...state}
        // const newState = {
        //   ...state,
        //   select: {
        //     ...state.select,
        //     cardVector: {
        //       ...state.select.cardVector,
        //       user: index,
        //     },
        //   },
        // };
        newState.select.cardVector[trainer] = index;
        return setState(newState);
      },
    },
    changeActualPhase: (value, trainer) => {
      const newState = { ...state };
      //console.log("TRAINER !!!!!!!!!!!!!!!!!", trainer);
      if (trainer !== undefined) {
        newState.turn.loser = trainer;
      }
      newState.phase.actual = value;
      return setState(newState);
    },
  };

  // console.log(
  //   state.vectorCards[state.turn.user ? "user" : "rival"][
  //     state.select.cardVector[state.turn.user ? "user" : "rival"]
  //   ].powerActual
  // );
  //assetBattle.get.nextStep(state,'rival','user')
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(20,200,200,1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>
        {" "}
        turn : {state.turn.user ? "user" : "rival"} power :{" "}
        {
          state.vectorCards[state.turn.user ? "user" : "rival"][
            state.select.cardVector[state.turn.user ? "user" : "rival"]
          ].powerActual
        }
      </h1>
      <button onClick={() => methods.changeActualPhase(0, "user")}>
        WinTrainer
      </button>

      <h1>
        {" "}
        collide {!state.turn.user ? "user" : "rival"}{" "}
        {
          state.reactionColision[!state.turn.user ? "user" : "rival"]
            .powerActual
        }
        {" X: "}{" "}
        {
          state.reactionColision[!state.turn.user ? "user" : "rival"].components
            .x
        }
        {" Y: "}{" "}
        {
          state.reactionColision[!state.turn.user ? "user" : "rival"].components
            .y
        }
      </h1>

      <button onClick={() => methods.changeActualPhase(state.phase.actual - 1)}>
        {" "}
        - Phase{" "}
      </button>
      <h1>
        {`phase ${battleVariables.phases[state.phase.actual]}  // timmer ${
          (battleVariables.timmer.turn[state.turn.user ? "user" : "rival"] -
            state.turn.timmer) /
          battleVariables.timmer.turn.delay
        }`}{" "}
      </h1>
      <button onClick={() => methods.changeActualPhase(state.phase.actual + 1)}>
        {" "}
        + Phase{" "}
      </button>

      <button
        onClick={() => {
          //const newState = { ...state };
          //console.log(newState.vectorCards.user[newState.select.cardVector.user])
          //newState.vectorCards.user[newState.select.cardVector.user].power = 0;
          return setState(handlerState.pokemonInMove(state));
        }}
      >
        {" "}
        reduce Move
      </button>

      {state.phase.actual === 0 ? <EndGame battleState={state} /> : null}

      <BattleField battleState={state} />

      {state.phase.actual === 3 ? (
        <BoxSelectPokemon battleState={state} methods={methods} />
      ) : null}
      {state.phase.actual === 4 && state.turn.user ? (
        <ShowCardsVector battleState={state} methods={methods} />
      ) : null}

      <div>
        <div>
          <h1>Damag:</h1>
          <h1 id={`show_last_damage`}>0</h1>
          <h1 id={`show_last_defense`}>0</h1>
          <h1 id={`show_last_total`}>0</h1>
        </div>

        {state.team.rival !== undefined ? (
          <div>
            <h1>
              {" "}
              User Heald:{" "}
              {`(${state.team.user[state.select.pokemon.user]?.name})`}{" "}
              {Math.round(
                generate.getStat(
                  state.team.user[state.select.pokemon.user],
                  "Heald"
                ) * state.team.user[state.select.pokemon.user]?.heald
              ) / 100}
            </h1>
            <h1>
              {" "}
              Rival Heald:{" "}
              {`(${state.team.rival[state.select.pokemon.rival]?.name})`}{" "}
              {Math.round(
                generate.getStat(
                  state.team.rival[state.select.pokemon.rival],
                  "Heald"
                ) * state.team.rival[state.select.pokemon.rival]?.heald
              ) / 100}
            </h1>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Page;

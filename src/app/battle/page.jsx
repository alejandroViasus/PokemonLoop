"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

import { globalStateFormat } from "@/Assets/globalStateFormat";
import { generate, valuesPokemon, pokemonGet } from "@/Assets/funcions";
import { trainers } from "@/Assets/trainers";

//? ---- components

import NavigationMenu from "../components/NavigationMenu/NavigationMenu";
import BattlePhaseSelection from "../components/BattlePhaseSelection/BattlePhaseSelection";
import BattlePhaseDelay from "../components/BattlePhaseDelay/BattlePhaseDelay";
import BattleArea from "../components/BattleArea/BattleArea";
import FilleAlertTeam from "../components/FileAlertTeam/FilleAlertTeam";
import FileAlertCeroTeam from "../components/FileAlertCeroTeam/FileAlertCeroTeam";
import CardBaseMini from "../components/CardBaseMini/CardBaseMini";
import BattleField from "../components/BattleField/BattleField";

function Page() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.valueState);
  const urlHome = "/";
  const urlCards = `/cards?id=${globalState.user._id}`;
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  const initialState = {
    phase: "login-phase",
    trainer: {
      user: globalState.user,
      team: globalState.teamUser,
    },
    rival: {
      user: {},
      team: [],
    },
    battlefield: {
      pokemonSelectedRival: {},
      pokemonSelectedUser: {},
    },
  };

  useEffect(() => {
    //*valido si el globalState tiene datos validos, de lo contrario re dirije a "/"
    if (globalState.user._id == 0) {
      router.push(`${urlHome}`); //si no hay un usuario logueado, redirijo al login
    } else {
      null;
    }
  }, []);

  const [state, setState] = useState(initialState); //? state - state

  const initialStatePhase = {
    ceroTeam: state.trainer?.team.length == "0",
    team:
      state.trainer?.team.length === valuesPokemon.componentBattle.sizeTeam
        ? "Yes"
        : "Validation",
  };
  const [phase, setPhase] = useState(initialStatePhase); //? state - phases

  useEffect(() => {
    //console.log("Ok");
    //*si hay un usuario creamos un rival aleatorio
    let levelRival = generate.rivalLevel(globalState.user);
    let generateRival = { ...globalState.user };
    generateRival.level = levelRival.levelRival;
    let dificult = levelRival.dificult;
    const keysImageTrainer = Object.keys(trainers);
    let picture = Math.round((keysImageTrainer.length - 1) * Math.random());
    if (picture <= 0) {
      console.log("a", picture);
      picture <= 0 ? (picture = 1) : null;
    }
    if (picture >= keysImageTrainer.length) {
      console.log("b", picture);
      picture >= keysImageTrainer.length
        ? (picture = keysImageTrainer.length - 1)
        : null;
    }
    generateRival.pictureTrainer = keysImageTrainer[picture];
    generateRival.theme = trainers[keysImageTrainer[picture]]?.typePreference;
    const teamRival = [];
    for (let i = 0; i < valuesPokemon.componentBattle.sizeTeam; i++) {
      teamRival.push(pokemonGet.noPokedex());
    }

    //!
    //*validar que los se genero un arreglo de noPokedex de los posibles pokemones para el equipo rival , para despues crear los pokemones
    const fetchArray = teamRival?.map((noPokedex) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${noPokedex}`)
    );
    if (fetchArray !== undefined) {
      Promise.all(fetchArray)
        .then((responses) =>
          Promise.all(responses.map((response) => response.json()))
        )
        .then((data) => {
          //console.log("Data", data);
          let createTeam = [];
          data.map((pokemon) => {
            let referencePokemon = generate.newPokemon(pokemon, generateRival);
            referencePokemon._id = `rival${
              Math.random() * (referencePokemon.id || 1)
            }${referencePokemon.name}${
              Math.random() * (referencePokemon.id || 1)
            }`;
            createTeam.push(referencePokemon);
          });
          setState({
            ...state,
            rival: {
              ...state.rival,
              user: generateRival,
              team: createTeam,
            },
            battlefield: {
              ...state.battlefield,
              dificult,
              bioma: generate.bioma(),
              pokemonSelectedRival:
                generate.SelectorPokemonTeamRival(createTeam),
              pokemonSelectedUser: globalState.teamUser[0],
            },
          });
        });
    }
    //console.log("fetchArray", fetchArray);
  }, [globalState.user._id == 0]);

  const handlerSelect = (pokemon) => {
    console.log(user);
    setState({
      ...state,
      battlefield: { ...state.battlefield, pokemonSelectedUser: pokemon },
    });
  };

  const handlerCeroTeam = (value) => {
    value === "home" ? router.push(`${urlHome}`) : null;
    value === "cards" ? router.push(`${urlCards}`) : null;
  };

  const handleAlertTeam = (value) => {
    setPhase({
      ...alert,
      team: value,
    });
  };
  const handlerPhase = (value) => {
    setState({ ...state, phase: value });
  };

  //console.log("ALERT ?????????????????", state);
  return (
    <div>
      {/* <section>
        <NavigationMenu />
      </section> */}

      <section>
        {phase.ceroTeam ? (
          <FileAlertCeroTeam handlerCeroTeam={handlerCeroTeam} />
        ) : null}
      </section>
      <section>
        {phase.team == "Validation" ? (
          <FilleAlertTeam handleAlertTeam={handleAlertTeam} />
        ) : null}
        {phase.team == "No" ? (
          <FileAlertCeroTeam
            handlerCeroTeam={handlerCeroTeam}
            description="What do you want"
          />
        ) : null}
      </section>
      <section>
        {phase.team == "Yes" &&
        phase.ceroTeam === false &&
        state.phase === "login-phase" ? (
          <div>
            {" "}
            <BattlePhaseSelection
              localState={state}
              handlerSelect={handlerSelect}
              handlerPhase={handlerPhase}
            />
          </div>
        ) : null}
      </section>

      <section
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(22,22,22,0.1)",
          color: "rgba(222,222,222,1)",
        }}
      >
        <BattleField localState={state} />
        {state.phase === "delay" ? (
          <BattlePhaseDelay handlerPhase={handlerPhase} />
          ) : null}


        <button onClick={() => handlerPhase("delay")}> again</button>
      </section>
    </div>
  );
}

export default Page;

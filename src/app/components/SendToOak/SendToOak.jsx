import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handlerRender } from "@/store/slice";
import { valuesPokemon } from "@/Assets/funcions";



function SendToOak({ pokemon }) {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.valueState);

  const getValorationTrade = () => {
    if (pokemon) {
      let totalPointsToBox =
        Math.round(pokemon.level * 0.5) +
        Math.round(
          (pokemon.scaleHeald +
            pokemon.scaleAttack +
            pokemon.scaleDeffense +
            pokemon.scaleSpecialAttack +
            pokemon.scaleSpecialDeffense +
            pokemon.scaleSpeed) *
            1
        );

      let values = {
        coins:
          valuesPokemon.componentSentToOak.baseValue.coins +
          Math.round(pokemon.level * 1.5) +
          Math.round(
            pokemon.scaleHeald +
              pokemon.scaleAttack +
              pokemon.scaleDeffense +
              pokemon.scaleSpecialAttack +
              pokemon.scaleSpecialDeffense +
              pokemon.scaleSpeed
          ),
        pokeballs:
          valuesPokemon.componentSentToOak.baseValue.pokeball +
          Math.round(pokemon.level * 0.5) +
          Math.round(
            (pokemon.scaleHeald +
              pokemon.scaleAttack +
              pokemon.scaleDeffense +
              pokemon.scaleSpecialAttack +
              pokemon.scaleSpecialDeffense +
              pokemon.scaleSpeed) *
              0.25
          ),
        box:
          valuesPokemon.componentSentToOak.baseValue.box +
          Math.floor(
            totalPointsToBox /
              valuesPokemon.componentSentToOak.baseValue.baseValuePointsToBox
          ),
        exp: valuesPokemon.componentSentToOak.baseValue.exp + totalPointsToBox,
      };

      // console.log("Values.....:", values);
      return values;
    }
  };

  const initialState = {
    pokemon: globalState.pokemonsUser[0] || {},
    value: getValorationTrade(),
    showTrade: false,
    team: false,
    favorite: false,
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    //console.log("Pokemon", pokemon);
    setState({ ...state, pokemon, value: getValorationTrade() });
  }, [pokemon]);

  useEffect(() => {
    if (pokemon._id !== undefined) {
      fetch(`/api/pokemon/get/getById?id=${pokemon._id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          //console.log("data", data.data.team);
          setState({
            ...state,
            pokemon: data.data,
            team: data.data.team,
            favorite: data.data.favorite,
            value: getValorationTrade(),
          });
        });
    }
  }, [globalState.version]);

  const handlerSendToOak = () => {
    let userUpdate = { ...globalState.user };
    userUpdate.coins = userUpdate.coins + state.value.coins;
    userUpdate.pokeballs = userUpdate.pokeballs + state.value.pokeballs;
    userUpdate.experience = userUpdate.experience + state.value.exp;
    userUpdate.box = userUpdate.box + state.value.box;

    console.log(userUpdate);

    fetch(`/api/user/put/userById?id=${userUpdate._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userUpdate),
    }).then((response) => {
      response.json();
      console.log(response);
    })
    fetch(`/api/pokemon/delete/deleteById`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: pokemon._id }),
    })
    .then((response) => {
      response.json();
      console.log(response)
      const render= `vDelete${pokemon._id}`
      dispatch(handlerRender({state:globalState,render}))
    })
    
  };

  const handlerTrade = () => {
    setState({ ...state, showTrade: !state.showTrade });
  };

  // console.log(state.pokemon, globalState);
  //console.log( 'STATE',state);
  // console.log(".....", pokemon);
  return (
    <div>
      <button
        // disabled={state.team || state.favorite}
        onClick={handlerTrade}
      >
        SendToOak
      </button>

      {state.showTrade ? (
        <div
          style={{
            position: "absolute",
            left: "0%",
            right: "0%",
            top: "0%",
            bottom: "0%",
            backgroundColor: "rgba(22,22,22,0.9)",
          }}
          onClick={handlerTrade}
        >
          <button onClick={handlerTrade}>Close</button>
          <div style={{ backgroundColor: "rgba(222,222,222,1)" }}>
            <h1>{pokemon?.name}</h1>
            <h3>coins: {state.value?.coins}</h3>
            <h3>pokeballs: {state.value?.pokeballs}</h3>
            {state.value?.box > 0 ? <h3>box: {state.value?.box}</h3> : null}
            <h3>exp: {state.value?.exp}</h3>

            {state.team ? (
              <h2> Your Pokémon cannot be in your Pokémon team.</h2>
            ) : null}
            {state.favorite ? (
              <h2> Your Pokémon cannot be set as favorites.</h2>
            ) : null}
            <button
              disabled={state.team || state.favorite}
              onClick={handlerSendToOak}
            >
              {" "}
              Send to Porffesor Oak{" "}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SendToOak;

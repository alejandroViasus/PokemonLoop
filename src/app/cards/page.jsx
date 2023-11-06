"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useSelector, useDispatch } from "react-redux";
import { setListPokemons } from "@/store/slice";

//? ---- components

import NavigationMenu from "../components/NavigationMenu/NavigationMenu";
import CardsRender from "../components/CardsRender/CardsRender"

function Page() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.valueState);
  const urlHome = "/";
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  const getTeamPokemonGlobal = () => {
    if (globalState?.pokemonsUser) {
      return globalState?.pokemonsUser?.filter(
        (pokemon) => pokemon.team === true
      );
    } else {
      return [];
    }
  };

  const initialState = {
    userId: searchParams.get("id"),
    userInfo: {},
    trade: false,
    listPokemons: globalState?.pokemonsUser,
    teamPokemon: getTeamPokemonGlobal(),
  };

  useEffect(() => {
    //valido si el globalState tiene datos validos, de lo contrario re dirije a "/"
    //console.log(globalState);
    if (globalState.user._id == 0) {
      router.push(`${urlHome}`);
    }
  }, []);

  const [state, setState] = useState(initialState);
  useEffect(() => {
    fetch(`/api/user/get/userById?id=${state.userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) =>
        setState({
          ...state,
          userInfo: data.data,
        })
      )
      .catch((err) => {
        console.log("ERRROR____", err);
        router.push(`${urlHome}`);
      });
  }, [state.userId]);

  useEffect(() => {
    if (globalState.user._id != 0) {
      //    console.log("cambio de ID", globalState.user._id);
      fetch(`http://localhost:3000/api/pokemon/all?id=${globalState.user._id}`)
        .then((response) => response.json())
        .then((data) => {
          //console.log(data.data);
          dispatch(
            setListPokemons({ state: globalState, listPokemons: data.data })
          );
        });
    }
  }, [state.userInfo,(globalState.pokemonsUser.length!==state.listPokemons.length)]);

  useEffect(() => {
    const teamPokemon = getTeamPokemon();
    setState({ ...state, teamPokemon });
  }, [state.listPokemons]);

  const getTeamPokemon = () => {
    return state.listPokemons?.filter((pokemon) => pokemon.team === true);
  };

  return (
    <div>
      <NavigationMenu />
      <div>Cards {state.listPokemons?.length}</div>
      <div>Team {state.teamPokemon?.length}</div>
      <CardsRender/>
    </div>
  );
}

export default Page;

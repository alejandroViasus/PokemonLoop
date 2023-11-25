"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { valuesPokemon } from "@/Assets/funcions";

//? ---- components
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";
import CardsRender from "../components/CardsRender/CardsRender";
import CardDetail from "../components/CardDetail/CardDetail";
function page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlHome = "/";
  const globalState = useSelector((state) => state.valueState);

  const [userId, setUserId] = useState(searchParams.get("id") || "0");
  const [userInfo, setUserInfo] = useState({});
  const [listPokemons, setListPokemons] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState({});

  useEffect(() => {
    //valido si el globalState tiene datos validos, de lo contrario re dirije a "/"
    if (globalState.user._id == "0") {
      router.push(`${urlHome}`);
    }
  }, []);

  useEffect(() => {
    fetch(`/api/user/get/userById?id=${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setUserInfo(data.data))
      .catch((err) => {
        console.log("ERRROR____", err);
        router.push(`${urlHome}`);
      });
  }, [userId, globalState.render]);

  useEffect(() => {
    fetch(`/api/pokemon/get/allPokemons?id=${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setListPokemons(data.data))
      .catch((err) => {
        console.log("ERRROR____", err);
        router.push(`${urlHome}`);
      });
  }, [userInfo]);

  useEffect(() => {
    //console.log(listPokemons)
    setPokemonSelected(listPokemons.slice().reverse()[0]);
  }, [listPokemons]);

  const changeselect = (pokemon) => {
    setPokemonSelected(pokemon);
  };

  return (
    <section>
      <div>
        <NavigationMenu />
      </div>
      <div> TEAM : {valuesPokemon.componentBattle.sizeTeam} / {globalState.teamUser.length}</div>

      <div>{pokemonSelected?.name}</div>
      <div style={{ display: "flex" }}>
        <CardsRender
          pokemons={listPokemons?.slice().reverse()}
          changeselect={changeselect}
        />
        <CardDetail pokemon={pokemonSelected} />
      </div>
    </section>
  );
}

export default page;

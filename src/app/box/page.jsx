"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useSelector, useDispatch } from "react-redux";
import { setListPokemons } from "@/store/slice";

//? ---- components
import BoxSelector from "../components/BoxSelector/BoxSelector";
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";


function Page() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.valueState);
  const urlHome = "/";
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  const initialState = {
    userId: searchParams.get("id"),
    tickets: 0,
    userInfo: {},
    trade: false,
    selected: false,
  };

  useEffect(() => {
    //valido si el globalState tiene datos validos, de lo contrario re dirije a "/"
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
    if (state.userInfo.box !== undefined && state.trade === true) {
      fetch(`/api/user/put/userById?id=${state.userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.userInfo),
      })
        .then((response) => response.json())
        .then((data) => setState({ ...state, userInfo: data.data }))
        .catch((error) => console.error("Error:", error));
    }
  }, [state.userInfo?.box]);

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
  }, [state.trade]);

  const handlerOpenBox = async () => {
    if (state.userInfo.box > 0) {
      setState({
        ...state,
        trade: true,

        userInfo: { ...state.userInfo, box: state.userInfo.box - 1 },
      });
    }
  };
  const handlerCloseBox = async () => {
    setState({
      ...state,
      trade: false,
      selected: false,
    });
  };
  const handlerDone = async () => {
    setState({
      ...state,
      selected: true,
    });
  };

  console.log(state.selected);
  // console.log(
  //   "bag :",
  //   globalState.user?.bagPokemons,
  //   "pokemons",
  //   globalState.pokemonsUser.length,
  //   "bag<pokemons",
  //   globalState.user?.bagPokemons < globalState.pokemonsUser.length
  // );
  return (
    <div>
      <NavigationMenu />
      <h1>
        bag:
        {globalState.pokemonsUser?.length
          ? globalState.pokemonsUser?.length
          : 0}
        /{globalState?.user.bagPokemons ? globalState?.user.bagPokemons : 0}{" "}
      </h1>

      {/* aqui se hace una validacion para comprobar que la maleta no este llena  */}
      {globalState.user?.bagPokemons <= globalState.pokemonsUser.length ? (
        <h1> mochila llena</h1>
      ) : (
        <div>
          <p>Box:{state.userInfo.box ? state.userInfo.box : 0}</p>

          <div>
            {state.trade ? (
              <BoxSelector handlerDone={handlerDone} />
            ) : (
              <h1>
                You caught a Pokémon’s attention and it started following you.
              </h1>
            )}
          </div>
          {state.selected && state.trade ? (
            <button onClick={handlerCloseBox}>
              <p>Done !!!</p>
            </button>
          ) : null}

          {!state.selected && !state.trade ? (
            <button onClick={handlerOpenBox}>
              <p>Find out which Pokémon it is {`(${state.userInfo.box})`}</p>
            </button>
          ) : null}
        </div>
      )}
     
    </div>
  );
}

export default Page;

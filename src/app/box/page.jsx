"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useSelector } from "react-redux/es/hooks/useSelector";

//? ---- components
import BoxSelector from "../components/BoxSelector/BoxSelector";
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";

function Page() {
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
  };

  useEffect(() => {
    //valido si el globalState tiene datos validos, de lo contrario re dirije a "/"
    console.log(globalState);
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
    });
  };
  ("");
  //console.log("coins : ", state.userInfo.coins);
  return (
    <div>
        <NavigationMenu/>
      {/* aqui se hace una validacion para comprobar que la maleta no este llena  */}
      {globalState.user?.bagPokemons < globalState.pokemonsUser.length ? (
        <h1> mochila llena</h1>
      ) : (
        <div>
          <p>Box:{state.userInfo.box ? state.userInfo.box : 0}</p>

          <div>
            {state.trade ? (
              <BoxSelector />
            ) : (
              <h1>
                You caught a Pokémon’s attention and it started following you.
              </h1>
            )}
          </div>
          {state.trade ? (
            <button onClick={handlerCloseBox}>
              <p>Done !!!</p>
            </button>
          ) : (
            <button onClick={handlerOpenBox}>
              <p>Find out which Pokémon it is {`(${state.userInfo.box})`}</p>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Page;

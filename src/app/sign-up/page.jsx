"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { updateUser } from "@/store/slice";
import { useDispatch, useSelector } from "react-redux";
import { generate } from "@/Assets/funcions";
import { pokemonFormat } from "@/Assets/globalStateFormat";
import { valuesPokemon } from "@/Assets/funcions";
import { colors } from "@/Assets/colors";

//? ---------------- COMPONENTSç
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";
import FilterType from "../components/FilterType/FilterType";
import FilterTrainer from "../components/FilterTrainer/FilterTrainer";
import SuccesLogin from "../components/Succes-login/SuccesLogin";
import CardMini from "../components/CardMini/CardMini";

import FilterInitialPokemon from "../components/FilterInitialPokemon/FilterInitialPokemon";
import FilterInitialPokemonCard from "../components/FilterInitialPokemonCard/FilterInitialPokemonCard";
import CardTrainerShow from "../components/CardTrainerShow/CardTrainerShow";

import { typesPokemon } from "@/Assets/typesPokemon";
import { trainers } from "@/Assets/trainers";

import Image from "next/image";

function Page() {
  const dispatch = useDispatch();
  const urlHome = "/";
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  const globalState = useSelector((state) => state.valueState);

  console.log(globalState, '.........................')

  const keyRegionPokemon = Object.keys(valuesPokemon.inicialesPokemon);

  const [initialP, setInitialP] = useState({
    region: keyRegionPokemon[0],
    indexPokemon: 1,
  });

  const initialState = {
    email: user?.email || ``,
    name: user?.name || `trainer${Math.round(Math.random() * 1000)}`,
    type: "None",
    trainer: "None",
    indexTrainer: 0,
    initialPokemon:
      valuesPokemon.inicialesPokemon[initialP.region][initialP.indexPokemon],
    login: false,
  };

  const [success, setSuccess] = useState(globalState.user);

  useEffect(() => {
    if (success._id !== "0") {
      console.log("USUARIO CREADO CON EXITO ", success);
      dispatch(updateUser({ state: globalState, newUser: success }));
      //handlerSucces()
    }
  }, [success._id]);

  useEffect(() => {
    setState({ ...state, initialPokemon: initialP.indexPokemon });
  }, [initialP.indexPokemon]);

  const [state, setState] = useState(initialState);

  const handlerSucces = () => {
    setState({ ...initialState, login: true });
  };

  const handlerBasicState = (e) => {
    if (e.target.name === "name") {
      if (e.target.value.length <= 20) {
        return setState({ ...state, [e.target.name]: e.target.value });
      }
    } else {
      return setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  const handlerType = (value) => {
    setState({ ...state, type: value });
  };
  const handlerTrainer = (value) => {
    setState({ ...state, trainer: value });
  };
  const handlerInitialRegion = (value) => {
    setInitialP({ ...initialP, region: value });
  };
  const handlerInitialIndexPokemon = (value) => {
    setInitialP({ ...initialP, indexPokemon: value });
  };

  const submit = async (event) => {
    event.preventDefault();

    if (
      state.name !== "" &&
      state.type !== "None" &&
      state.trainer !== "None" &&
      state.initialPokemon !== undefined
    ) {
      try {
        const newUser = {
          email: state.email,
          gametag: state.name,
          pictureTrainer: state.trainer === "None" ? "Campista" : state.trainer,
          theme: state.type === "None" ? "Normal" : state.type,
          experience: 0,
          level: 5,
          league: 0,
          fractionLevel: 0,
          coins: 200,
          pokeballs: 20,
          bagPokemons: 24,
          box: 7,
          wins: 0,
          loss: 0,
        };
        const response = await fetch("/api/user/create-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });

        if (response.ok) {
          const data = await response.json();

          if (data.success) {
            if (data.success) {
              console.log("Usuario creado exitosamente:", data.data);
              let newPokemon = pokemonFormat;
              const responsePokemonData = await fetch(
                `http://pokeapi.co/api/v2/pokemon/${state.initialPokemon}`
              );
              const dataPokemon = await responsePokemonData.json();
              newPokemon = generate.newPokemon(dataPokemon, data.data);
              newPokemon.team = true;
              newPokemon.favorite = true;
              newPokemon.scaleHeald = 16;
              newPokemon.scaleAttack = 16;
              newPokemon.scaleDeffense = 16;
              newPokemon.scaleSpecialAttack= 16;
              newPokemon.scaleSpecialDeffense = 16;
              newPokemon.scaleSpeed= 16;

              console.log("|||||||||||||", newPokemon);
              const responsePokemon = await fetch(
                "/api/pokemon/create-pokemon",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(newPokemon),
                }
              );
              if (responsePokemon.ok) {
                console.log(
                  "| NEW POKEMON ||||||||||||||||||||||||||||||||||||||||",
                  newPokemon
                );
                handlerSucces();
              }
            }
          } else {
            console.error("Hubo un error al crear el usuario:", data.error);
            // Aquí puedes mostrar un mensaje de error al usuario
          }
        } else {
          console.error("Hubo un error al hacer la petición:", response.status);
          // Aquí puedes mostrar un mensaje de error al usuario
        }
      } catch (error) {
        console.error("Hubo un error al hacer la petición:", error);
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    }
  };

  useEffect(() => {
    if (state.email === "") {
      router.push(`${urlHome}`);
    }
  }, [state.email]);

  //console.log("STATE SIGN IN ", state);

  const styleInput = {
    color: `${typesPokemon[state.type].colors.textDark}`,
    backgroundColor: `${typesPokemon[state.type].colors.secondary}`,
  };

  const styleSection = {
    backgroundColor: `${typesPokemon[state.type].colors.secondary}`,
  };

  const styleBoxSection = {
    width: "80%",
    height: "90%",
    //backgroundColor: `${typesPokemon[state.type].colors.background}`,
    marginBottom: `10%`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "",
    alingItem: "center",
    gap: "30px",
  };

  const styleContentBox = {
    width: "100%",

    display: "flex",
    alingItem: "center",
    justifyContent: "flex-start",
    gap: "1px",

    //backgroundColor: "blue",
  };

  const styleTitleText = {
    alignSelf: "center",
    gap: "16px",
    color: `${typesPokemon[state.type].colors.textWhite}`,
    fontWeight: 400,
    justifyContent: "space-between",
  };

  const styleSubmitSection = {
    width: "80%",
    height: "4%",
    //backgroundColor: `${typesPokemon[state.type].colors.background}`,
    marginBottom: `10%`,
  };

  const styleSubmitButton = {
    width: "100%",
    padding: "15px",
    backgroundColor: `${typesPokemon[state.type].colors.quaternary}`,
    color: `${typesPokemon[state.type].colors.textWhite}`,

    opacity:
      state.email === "" ||
        state.type === "None" ||
        state.trainer === "None" ||
        state.name.length < 4
        ? "0.3"
        : "1",
  };

  const styleImageTrainer = {
    //backgroundColor:'red',
  };

  return (
    <div className="content-sing-in vw100 vh100  flex-all-center">
      <NavigationMenu />

      {state.login ? (
        <SuccesLogin />
      ) : (
        <form
          style={{
            backgroundColor: `${typesPokemon[state.type].colors.background}`,
          }}
          className="content-form 
          segure-width 
          percentage-100-height
          flex-all-center "
          onSubmit={(e) => e.preventDefault()}
        >
          <h1
            className="font-button-in title font-quicksand"
            style={{
              color: `${typesPokemon[state.type].colors.primary}`,
              fontSize: "30px",
              margin: "0px",
              padding: "0px",
            }}
          >
            New Trainer
          </h1>

          <div className="content-inputs  flex-all-center gap-big">
            <section
              className="
            content-section-input
            border-radius-big
            flex-all-center 
            "
              style={{
                backgroundColor: `${typesPokemon[state.type].colors.primary}`,
              }}
            >
              <div className="input flex-all-center ">
                <h3
                  className="title-x  percentage-100-width font-quicksand"
                  style={styleTitleText}
                >
                  gameTag
                </h3>
                <input
                  style={styleInput}
                  className="
                  border-radius-big
                  input-form 
                  percentage-100-width 
                  font-quicksand
                  "
                  type="text"
                  value={state.name}
                  name="name"
                  onChange={handlerBasicState}
                />
              </div>
              <div className="input flex-all-center ">
                <h3
                  className="title-x percentage-100-width font-quicksand"
                  style={styleTitleText}
                >
                  e-mail
                </h3>

                {state.email !== "" ? (
                  <p
                    style={styleInput}
                    className="
                  border-radius-big
                  input-form 
                  percentage-100-width 
                  font-quicksand
                  overflow-hidden
                  "
                  >
                    {state.email}
                  </p>
                ) : (
                  <div
                    style={styleInput}
                    className="
                border-radius-big
                input-form 
                percentage-100-width 
                font-quicksand
                flex-all-center
                "
                  >
                    <p style={{ color: "red" }}>
                      validacion fallida , vuelve al{" "}
                      <button onClick={() => router.push(`${urlHome}`)}>
                        HOME
                      </button>{" "}
                    </p>
                  </div>
                )}
              </div>
              {/*//!----------------------------------------------------- boxSection */}
              <div style={styleBoxSection}>
                {/*//!----------------------------------------------------- contentBox */}
                <div style={styleContentBox}>
                  <h3
                    className="title-x percentage-100-width font-quicksand"
                    style={styleTitleText}
                  >
                    Theme
                  </h3>
                  <FilterType
                    type={state.type}
                    handlerType={handlerType}
                  ></FilterType>
                </div>
                <div
                  className="
                border-radius-big
                input-form 
                percentage-100-width 
                font-quicksand
                flex-all-center
                "
                  style={styleContentBox}
                >
                  <h3
                    className="title-x percentage-100-width font-quicksand"
                    style={styleTitleText}
                  >
                    Trainer
                  </h3>
                  <FilterTrainer
                    trainer={state.trainer}
                    handlerTrainer={handlerTrainer}
                    type={state.type}
                  />
                </div>
                <div
                  style={{
                    //backgroundColor: "green",
                    height: "100%",
                    width: "100%",
                    gap: "16px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    className="title-x percentage-100-width font-quicksand
                    flex-all-center
                    
                    "
                    style={styleTitleText}
                  >
                    Initial Pokemon
                    <FilterInitialPokemon
                      theme={state.type}
                      stateP={initialP}
                      handlerInitialRegion={handlerInitialRegion}
                      handlerInitialIndexPokemon={handlerInitialIndexPokemon}
                    />
                  </h3>

                  <div
                    className="
                    border-radius-big
                    flex-all-center
                    "
                    style={{
                      backgroundColor: `${typesPokemon[state.type].colors.secondary
                        }`,
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      gap: "32px",
                    }}
                  >
                    {valuesPokemon.inicialesPokemon[initialP.region].map(
                      (pokemon) => {
                        let exibition = true;
                        if (state.initialPokemon == pokemon) {
                          exibition = false;
                        }

                        return (
                          <CardMini
                            exibicion={exibition}
                            key={`pokedexPokemonNo${pokemon}`}
                            pokedex={pokemon}
                            handlerInitialIndexPokemon={
                              handlerInitialIndexPokemon
                            }
                            theme={state.type}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
              <div className="flex-all-center" style={styleSubmitSection}>
                <button
                  style={styleSubmitButton}
                  className="font-button-in border-radius-mid none-styles-button hover-scale"
                  disabled={
                    state.email === "" ||
                    state.trainer === "None" ||
                    state.name.length < 4
                  }
                  onClick={submit}
                >
                  Create Profile
                </button>
              </div>
            </section>
            <div
              className="content-section-input
            border-radius-big
            flex-all-center 
            overflow-hidden
            "
              style={{
                flexDirection: "column",
                backgroundColor: `${typesPokemon[state.type].colors.secondary}`,
              }}
            >
              <h1 className="font-button-in"> trainer Card</h1>

              <CardTrainerShow localState={state} />

              {/* <h1
              className="font-button-in"
              >
              {state.name}
              </h1>
              
                <Image style={styleImageTrainer} src={trainers[state.trainer].image} width={550} height={550} alt={`image Trainer ${state.trainer}`}/> */}
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Page;

{
  /* <div>
            <div
              style={{
                height: "80px",
                width: "80px",
                backgroundColor: `${typesPokemon[state.type].colors.primary}`,
              }}
            >
              primary
            </div>
            <div
              style={{
                height: "80px",
                width: "80px",
                backgroundColor: `${typesPokemon[state.type].colors.secondary}`,
              }}
            >
              secondary
            </div>
            <div
              style={{
                height: "80px",
                width: "80px",
                backgroundColor: `${typesPokemon[state.type].colors.tertiary}`,
              }}
            >
              tertiary
            </div>
            <div
              style={{
                height: "80px",
                width: "80px",
                backgroundColor: `${
                  typesPokemon[state.type].colors.quaternary
                }`,
              }}
            >
              quaternary
            </div>

            <div
              style={{
                height: "80px",
                width: "80px",
                backgroundColor: `${typesPokemon[state.type].colors.textDark}`,
              }}
            >
              textDark
            </div>
            <div
              style={{
                height: "80px",
                width: "80px",
                backgroundColor: `${typesPokemon[state.type].colors.textWhite}`,
              }}
            >
              textWhite
            </div>

            <div
              style={{
                height: "80px",
                width: "80px",
                backgroundColor: `${
                  typesPokemon[state.type].colors.background
                }`,
              }}
            >
              BG
            </div> 
          </div>
            */
}

{
  /* <div className="section percentage-100-height">
           
           
          
          <div className="item-form percentage-100-width">
            <h3 className="title font-quicksand">
              types {`( ${state.type} )`}
            </h3>
           
          </div>
          <dir>
            <h1>trainer {`( ${state.trainer} )`}</h1>
            <FilterTrainer
              trainer={state.trainer}
              handlerTrainer={handlerTrainer}
            />
          </dir>
          <dir>
            <h1>initial Pokemon {`( ${state.initialPokemon} )`}</h1>
            <FilterInitialPokemon
              stateP={initialP}
              handlerInitialRegion={handlerInitialRegion}
              handlerInitialIndexPokemon={handlerInitialIndexPokemon}
            />
            {valuesPokemon.inicialesPokemon[initialP.region].map((pokedex) => {
              return (
                <FilterInitialPokemonCard
                  key={`pokedexPokemonNo${pokedex}`}
                  pokedex={pokedex}
                  handlerInitialIndexPokemon={handlerInitialIndexPokemon}
                />
              );
            })}
          </dir>

         v
          <button
            disabled={
              state.email === "" ||
              state.type === "None" ||
              state.trainer === "None"
            }
            onClick={submit}
          >
            {" "}
            Create Profile{" "}
          </button> */
}

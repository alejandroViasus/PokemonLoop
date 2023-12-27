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
import FilterInitialPokemon from "../components/FilterInitialPokemon/FilterInitialPokemon";
import FilterInitialPokemonCard from "../components/FilterInitialPokemonCard/FilterInitialPokemonCard";
import { typesPokemon } from "@/Assets/typesPokemon";

function Page() {
  const dispatch = useDispatch();
  const urlHome = "/";
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  const globalState = useSelector((state) => state.valueState);

  const keyRegionPokemon = Object.keys(valuesPokemon.inicialesPokemon);

  const [initialP, setInitialP] = useState({
    region: keyRegionPokemon[0],
    indexPokemon: 2,
  });

  const initialState = {
    email: user?.email || ``,
    name: user?.name || `trainer${Math.round(Math.random() * 1000)}`,
    type: "None",
    trainer: "None",
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
    return setState({ ...state, [e.target.name]: e.target.value });
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
          className="content-form segure-width 
          percentage-100-height
          flex-all-center "
          onSubmit={(e) => e.preventDefault()}
        >
          <section className="section  percentage-100-height percentage-100-width">
            <div className="item-form percentage-100-width"
             style={{
              backgroundColor: `${typesPokemon[state.type].colors.primary}`,
            }}
            >
              <h3
                className="title percentage-100-width font-quicksand"
                style={{
                  color: `${typesPokemon[state.type].colors.textWhite}`,
                }}
              >
                {" "}
                gameTag
              </h3>
              <input
                style={{
                  color: `${typesPokemon[state.type].colors.textDark}`,
                }}
                className="input-form font-quicksand"
                type="text"
                value={state.name}
                name="name"
                onChange={handlerBasicState}
              />
              <div
                className="line percentage-100-width"
                style={{
                  backgroundColor: `${typesPokemon[state.type].colors.primary}`,
                }}
              ></div>
            </div>
            <div className="item-form percentage-100-width"
             style={{
              backgroundColor: `${typesPokemon[state.type].colors.secondary}`,
            }}
            >
              <h3
                className="title percentage-100-width font-quicksand"
                style={{
                  color: `${typesPokemon[state.type].colors.textWhite}`,
                }}
              >
                {" "}
                e-mail
              </h3>
              {state.email !== "" ? (
                <p
                  style={{
                    color: `${typesPokemon[state.type].colors.textDark}`,
                  }}
                  className="input-form font-quicksand"
                >
                  {" "}
                  {state.email}
                </p>
              ) : null}
              <div
                className="line percentage-100-width"
                style={{
                  backgroundColor: `${typesPokemon[state.type].colors.primary}`,
                }}
              ></div>
            </div>
          </section>

          <section className="section  percentage-100-height percentage-100-width">
            <div
              className="filter-type"
              style={{
                backgroundColor: `${typesPokemon[state.type].colors.secondary}`,
              }}
            >
              <h3
                className="title font-quicksand"
                style={{ color: `${typesPokemon[state.type].colors.quaternary}` }}
              >
                type {`( ${state.type} )`}
              </h3>
              <FilterType
                type={state.type}
                handlerType={handlerType}
              ></FilterType>
            </div>
            <div className="filter-type"
             style={{
              backgroundColor: `${typesPokemon[state.type].colors.primary}`,
            }}
            >
              <h1
                className="title font-quicksand"
                style={{
                  color: `${typesPokemon[state.type].colors.tertiary}`,
                }}
              >
                trainer {`( ${state.trainer} )`}
              </h1>
              <FilterTrainer
                trainer={state.trainer}
                handlerTrainer={handlerTrainer}
              />
            </div>
          </section>

          <div>
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

          {/* <div className="section percentage-100-height">
           
           
          
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

          {state.email === "" ? (
            <h3>correo invalido , vuelve al menu principal</h3>
          ) : null}
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
          </button> */}
        </form>
      )}
    </div>
  );
}

export default Page;

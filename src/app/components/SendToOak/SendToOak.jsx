import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handlerRender } from "@/store/slice";
import { pokemonGet, valuesPokemon } from "@/Assets/funcions";
import { typesPokemon } from "@/Assets/typesPokemon";

import ShowCardMiniTeam from "../ShowCardMiniTeam/ShowCardMiniTeam";
import IconBox from "@/app/Icons/IconBox";
import IconCoins from "@/app/Icons/IconCoins";
import IconExpedition from "@/app/Icons/IconExpedition";
import IconPokeballsL from "@/app/Icons/IconPokeballsL";

import CardButtonTeam from "../CardButtonTeam/CardButtonTeam";




function SendToOak({ pokemon, theme }) {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.valueState);

  // console.log(pokemon,']]]]]]]]]]]]]]]]]]]]]]]]]]]]]')

  const getValorationTrade = () => {
    if (pokemon) {
      let totalPointsToBox =
        Math.round(pokemonGet.calcularNivel(pokemon.experience) * 0.5) +
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
          Math.round(pokemonGet.calcularNivel(pokemon.experience) * 1.5) +
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
          Math.round(pokemonGet.calcularNivel(pokemon.experience) * 0.5) +
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
        const render = `vDelete${pokemon._id}`
        dispatch(handlerRender({ state: globalState, render }))
      })
      .then(() => {
        setState({ ...state, showTrade: false })
      })

  };

  const handlerTrade = () => {
    setState({ ...state, showTrade: !state.showTrade });
  };

  // console.log(state.pokemon, globalState);
  //console.log( 'STATE',state);
  // console.log(".....", pokemon);

  const styleAlert = {
    color: typesPokemon[theme].colors.textWhite,
    width: '85%',
    height: '30%',
    backgroundColor: typesPokemon[theme].colors.textDark,
    padding: '3% 4%',
    borderRadius: '25px',
    gap: '5%'

  }
  return (
    <div

    >
      <button

        // disabled={state.team || state.favorite}
        onClick={handlerTrade}
        className="flex-all-center none-styles-button "
        style={{ scale: 3 }}

      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={15}
          height={15}
          fill="green"

        >
          <path
            fill={typesPokemon[theme].colors.primary}
            d="M2.238 13.246a1.12 1.12 0 0 1-.773-.586l-.096-.183-.008-4.07-.008-4.07 3.716.002c3.338 0 3.724-.004 3.808-.047.05-.027.453-.204.892-.393l.8-.346h2.685l-.008 4.462-.008 4.462-.078.166a1.093 1.093 0 0 1-.776.6c-.192.041-9.94.043-10.145.003Zm4.173-1.392c.918-.156 1.769-.767 2.232-1.603.177-.32.31-.746.367-1.179l.019-.143h-.843c-.464 0-.926.008-1.026.019l-.183.02-.108.218c-.136.274-.303.448-.538.559-.23.109-.455.138-.697.09a1.043 1.043 0 0 1-.574-.297c-.137-.128-.323-.44-.323-.541 0-.03-.224-.038-1.016-.038H2.705l.021.159c.135 1.036.792 1.976 1.7 2.434a3.132 3.132 0 0 0 1.985.302Zm-.29-2.582a.594.594 0 0 0 .126-.989c-.436-.393-1.118.01-.994.587a.63.63 0 0 0 .588.481.716.716 0 0 0 .28-.079Zm-1.65-.706c.2 0 .24-.008.254-.052.13-.4.324-.645.64-.8.182-.09.226-.099.473-.099.235 0 .298.012.454.085.306.142.537.411.647.753l.037.113h1.008c.554 0 1.014-.01 1.022-.024.03-.048-.043-.48-.12-.715-.292-.89-.862-1.546-1.681-1.934a3.152 3.152 0 0 0-2.17-.193c-.83.226-1.624.889-2.006 1.674a3.62 3.62 0 0 0-.303 1.014l-.02.176.222.012c.123.007.467.008.764.002.298-.006.648-.012.779-.012Z"
          />
          <path
            fill={typesPokemon[theme].colors.primary}
            d="M1.357 3.106c0-.94.013-1.023.197-1.291.06-.087.18-.206.266-.265.318-.215-.07-.202 5.564-.193l5.072.008.166.08c.234.111.395.263.515.484l.104.191.01.521.01.52H10.46l-.908.394-.908.392H1.357v-.84Zm2.022.238a.446.446 0 0 0 .304-.542.509.509 0 0 0-.33-.32c-.315-.068-.601.242-.516.559.043.16.232.312.408.33a.603.603 0 0 0 .134-.027Zm1.908-.048c.314-.163.287-.62-.046-.771-.16-.072-.242-.072-.394.003-.297.148-.344.49-.1.719.139.128.35.148.54.049Zm1.505.01a.437.437 0 0 0-.12-.823c-.295-.055-.565.252-.484.552.048.18.233.325.425.336a.574.574 0 0 0 .18-.066Z"
          />
        </svg>
      </button>

      {state.showTrade ? (
        <div
          className="flex-all-center absolute"
          style={{
            flexDirection: 'column',
            left: "0%",
            right: "0%",
            top: "0%",
            bottom: "0%",
            width: '100%',
            height: '100%',
            backgroundColor: typesPokemon[theme].colors.primary,
            gap: '10%',
          }}
        // onClick={handlerTrade}
        >

          <div
            className="flex-all-center"
            style={{
              flexDirection: 'column',
              gap: '15px'
            }}
          >
            <h1
              style={{
                fontSize: '50px',
                fontWeight: '300',
                color: typesPokemon[theme].colors.background,
              }}
            >send pokemon</h1>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: '300',
                color: typesPokemon[theme].colors.background,
              }}
            >profesor OAK</h3>
          </div>

          <div
            className="flex-all-center"
            style={{
              flexDirection: 'column',
              height: '10%',
              width: '100%',
              gap: "10%"
              //backgroundColor: 'red'
            }}
          >
            {state.team ? (
              <p
                className="flex-all-center"
                style={styleAlert}
              >
                <CardButtonTeam pokemon={pokemon} />
                Your Pokémon cannot be in your Pokémon team.</p>
            ) : null}
            {state.favorite ? (
              <p
                className="flex-all-center"
                style={styleAlert}
              >
                <CardButtonTeam pokemon={pokemon} porperty={"favorite"} />
                Your Pokémon cannot be set as favorites.</p>
            ) : null}
          </div>

          <div
            className="flex-all-center border-radius-mid "
            style={{
              gap: '10px',
              backgroundColor:typesPokemon[theme].colors.background,
              padding:'15px 20px',
             
            }}
          >


            <div>
              <ShowCardMiniTeam pokemon={pokemon} format='gif' />
            </div>

            <div> icon Arrow trade</div>
            <div
              className="flex-all-center"
              style={{
                flexDirection: 'column',
                width: '200px',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                //backgroundColor:'red',

              }}
            >
              <h3
                className="flex-all-center"
                style={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  gap: '10%',
                  fontSize: '35px',
                  fontWeight: '300'
                }}
              >

                <IconCoins type={theme} subColor='secondary' />


                {state.value?.coins}</h3>
              <h3
                className="flex-all-center"
                style={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  gap: '10%',
                  fontSize: '35px',
                  fontWeight: '300'
                }}
              >

                <IconPokeballsL type={theme} subColor='secondary' />{state.value?.pokeballs}</h3>


              {state.value?.box > 0
                ? <h3
                  style={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    gap: '10%',
                    fontSize: '35px',
                    fontWeight: '300'
                  }}
                  className="flex-all-center"
                >
                  <IconBox
                    style={{
                      width: '100%',
                      justifyContent: 'flex-start',
                      gap: '10%',
                      fontSize: '35px',
                      fontWeight: '300'
                    }}
                    type={theme} subColor='secondary' /> {state.value?.box}</h3> : null}
              <h3
                className="flex-all-center"
                style={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  gap: '10%',
                  fontSize: '35px',
                  fontWeight: '300'
                }}
              >

                <IconExpedition type={theme} subColor='secondary' />{state.value?.exp}</h3>
            </div>

          </div>

         

          <div>
            <button onClick={handlerTrade}

              style={{

              }}
            >

              <h1>Cancel</h1>
              <h6>trade</h6>
            </button>

            <button
              disabled={state.team || state.favorite}
              onClick={handlerSendToOak}
            >
              <h1>
                Send
              </h1>
              <h6>
                to Porffesor Oak
              </h6>
            </button>
          </div>

          {/* <div
          className="flex-all-center"
         
          >

            <ShowCardMiniTeam  pokemon={pokemon} format="gif" scale = {1} />
          </div>

          <div
            className="flex-all-center"
            style={{
              flexDirection: 'column',
              backgroundColor: "rgba(222,222,222,1)",
              width: '100%',
              height: '40%',
            }}>
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
            <div>

              <button onClick={handlerTrade}

                style={{

                }}
              >

                <h1>Cancel</h1>
                <h6>trade</h6>
              </button>

              <button
                disabled={state.team || state.favorite}
                onClick={handlerSendToOak}
              >
                <h1>
                  Send
                </h1>
                <h6>
                  to Porffesor Oak
                </h6>
              </button>
            </div>
          </div>
        */}
        </div>
      ) : null}
    </div>
  );
}

export default SendToOak;

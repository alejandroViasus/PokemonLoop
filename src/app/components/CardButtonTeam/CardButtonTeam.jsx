import React, { useState, useEffect } from "react";
import { handlerVersion } from "@/store/slice";
import { useSelector, useDispatch } from "react-redux";
import { valuesPokemon } from "@/Assets/funcions";
import Like from "@/app/Icons/Like";
import Pokeball from "@/app/Icons/Pokeball";
import Image from "next/image";
import { typesPokemon } from "@/Assets/typesPokemon";
import { colorsStack } from "@/Assets/typesPokemon";

function CardButtonTeam({ pokemon, porperty = "team", subColor = 'primary', scale = 1, theme }) {

  if (theme === undefined) {
    theme = pokemon.type1
  }

  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.valueState);



  const initialState = {
    team: pokemon.team || false,
    favorite: pokemon.favorite || false,
  };

  const [state, setState] = useState(initialState);
  const [actualTeam, setActualTeam] = useState(globalState.teamUser);
  const [disabledButton, setDisabledButton] = useState(true);
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
          setState(data.data);
        });
    }
  }, [globalState.version, pokemon._id]);

  let disabsledButton = false;

  useEffect(() => {
    setActualTeam(globalState.teamUser);
  }, [globalState.teamUser]);

  useEffect(() => {
    setDisabledButton(
      (actualTeam.length >= valuesPokemon.componentBattle.sizeTeam &&
        pokemon.team === false &&
        porperty === "team") ||
      pokemon.team === false
    );
  }, [actualTeam]);

  const handleChange = () => {
    if (
      actualTeam.length < valuesPokemon.componentBattle.size.team ||
      state.team === true ||
      porperty === "favorite"
    ) {
      let updatePokemon = { ...state, [porperty]: !state[porperty] };
      fetch(`/api/pokemon/put/putById?id=${state._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatePokemon),
      })
        .then((response) => response.json())
        .then((data) => {
          //console.log("data", data.data);
          const version = `v${data.data._id}${porperty}${data.data[porperty] ? "true" : "false"
            }`;
          //console.log("version", version);
          dispatch(handlerVersion({ state: globalState, version }));
        });
    }
  };
  //console.log("buton Team", state.name,state.team);
  return (
    <div>
      {state === null ? null : (


        <button
          onClick={handleChange}
          disabled={
            !state?.team &&
            actualTeam.length >= valuesPokemon.componentBattle.size.team &&
            porperty === "team"
          }

          className="none-styles-button"
          style={{

            scale: state[porperty] ? 1.5 * scale : 1.3 * scale,
            opacity: state[porperty] ? '1' : '0.5',
            opacity: state[porperty] ? '1' : '0.7',
          }
          }
        >
          {/* {state[porperty] ? `${porperty}` : "...." || ""} */}
          {porperty === 'team'
            ?
            <Pokeball color={state[porperty] ? colorsStack.Heald : typesPokemon[theme].colors.primary} />
            :
            <Like color={state[porperty] ? colorsStack.Heald : typesPokemon[theme].colors.primary} />
          }
        </button>

      )}
    </div>
  );
}

export default CardButtonTeam;

// import React, { useState, useEffect } from "react";
// import { handlerVersion } from "@/store/slice";
// import { useSelector, useDispatch } from "react-redux";

// function CardButtonTeam({ pokemon,porperty='team' }) {
//   const dispatch = useDispatch();
//   const globalState = useSelector((state) => state.valueState);

//   const initialState = {
//     team: pokemon.team,
//   };

//   const [state, setState] = useState(initialState);
//   useEffect(() => {
//     fetch(`/api/pokemon/get/getById?id=${pokemon._id}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("data", data.data.team);
//         setState(data.data);
//       });
//   }, [globalState.version]);

//   useEffect(() => {}, []);

//   const handleChange = () => {
//     let updatePokemon = { ...state, team: !state.team };
//     fetch(`/api/pokemon/put/putById?id=${state._id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatePokemon),
//     })
//       .then((response) => response.json())
//       .then((data) => {

//         //console.log("data", data.data._id);
//         const version= `v${data.data._id}${data.data.team?"true":"false"}`
//         //console.log("version", version);
//         dispatch(handlerVersion({state:globalState,version}))
//       })
//   };

//   return (
//     <div>
//       <button onClick={handleChange}>{state.team ? "team" : "...."}</button>
//     </div>
//   );
// }

// export default CardButtonTeam;

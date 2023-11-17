import React, { useState, useEffect } from "react";
import { handlerVersion } from "@/store/slice";
import { useSelector, useDispatch } from "react-redux";
import { valuesPokemon } from "@/Assets/funcions";

function CardButtonTeam({ pokemon, porperty = "team" }) {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.valueState);

  const initialState = {
    team: pokemon.team,
  };

  const [state, setState] = useState(initialState);
  const [actualTeam, setActualTeam] = useState([]);
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

  // useEffect(() => {
  //   if (porperty === "team" && state.trainer!==undefined) {
  //     const teamUserPokemon = fetch(`/api/pokemon/get/team?id=${state.trainer}`)
  //     .then((res) => res.json())
  //     .then((data) => {console.log("buttonTeam", data.data); setActualTeam(data.data)})
  //     .catch((err) => console.log(err));
  //   }
  // }, [globalState.version,state]);
  
  const handleChange = () => {
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
        const version = `v${data.data._id}${porperty}${
          data.data[porperty] ? "true" : "false"
        }`;
        //console.log("version", version);
        dispatch(handlerVersion({ state: globalState, version }));
      });
    };
    //console.log(pokemon)

    let disabledButton =  pokemon.team===false||(actualTeam.length>=valuesPokemon.componentBattle.sizeTeam&&pokemon.team===false)

  return (
    <div>
      <div>{actualTeam.length}/{valuesPokemon.componentBattle.sizeTeam}</div>
      {pokemon.team || state ? (
        porperty==='team'?<button onClick={handleChange}
        disabled={disabledButton}
        >
        {state.team ? `${porperty}` : "...."}
        </button>:<button onClick={handleChange}
         
          >
          {state.favorite ? `${porperty}` : "...."}
          </button>
          
          ) : null}
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

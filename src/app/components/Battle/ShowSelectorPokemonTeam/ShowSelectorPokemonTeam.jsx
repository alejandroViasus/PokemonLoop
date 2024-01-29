import React, { useState, useEffect } from "react";
import ShowSelectorPokemonTeamItem from "../ShowSelectorPokemonTeamItem/ShowSelectorPokemonTeamItem";
import Image from "next/image";
import { trainers } from "@/Assets/trainers";


function ShowSelectorPokemonTeam({ team, methods, trainer, selector, theme }) {

  // console.log('SSelectorPokemon',trainer,team[selector])
  const [pokemonTeam, setPokemonTeam] = useState([]);

  useEffect(() => {
    if (Array.isArray(team) && team.length > 0) {
      setPokemonTeam(team);
    }
  }, [team]);

  useEffect(() => {
    if (Array.isArray(pokemonTeam) && pokemonTeam.length > 0) {
      // console.log("Change Pokemon ?", trainer, pokemonTeam[selector]?.heald);
      if (pokemonTeam[selector]?.heald === 0) {
        return randomSelectPokemon();
      }
    }
  }, [pokemonTeam, selector, trainer]);

  const randomSelectPokemon = (unablePokemon = []) => {
    let newSelector = Math.round(Math.random() * (pokemonTeam.length - 1));

    console.log(
      "initSelectRandomPokemon",
      pokemonTeam[newSelector]?.heald,
      pokemonTeam
    );
    if (pokemonTeam.length >= 1) {
      if (newSelector < 0) {
        newSelector = 0;
      }
      unablePokemon = [...new Set(unablePokemon)];
      if (unablePokemon.length === pokemonTeam.length) {
        console.log("pokemonsUnable:", unablePokemon);

        return methods.changeActualPhase(0, trainer);
      } else {
        if (pokemonTeam[newSelector].heald > 0) {
          return methods.selector.pokemon(newSelector, trainer);
        } else {
          return randomSelectPokemon([...unablePokemon, newSelector]);
        }
      }
    }
  };
  // console.log('InSelector', )
  return (
    <div>
      {/* <h1>{trainer}</h1> */}

      {/* <Image src={trainers[trainer.pictureTrainer].image} height={100}width={100} alt={`image trainer ${battleState?.users?.s}`}/> */}
      <div
      className="flex-all-center"
      style={{
        gap:'30px'
      }}
      >


        {pokemonTeam.map((pokemon, index) => (
          <ShowSelectorPokemonTeamItem
            key={pokemon._id}
            trainer={trainer}
            methods={methods}
            pokemon={pokemon}
            selector={selector}
            index={index}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}

export default ShowSelectorPokemonTeam;


// import React, { useState, useEffect } from "react";
// import ShowSelectorPokemonTeamItem from "../ShowSelectorPokemonTeamItem/ShowSelectorPokemonTeamItem";

// function ShowSelectorPokemonTeam({ team, methods, trainer, selector }) {
//   const [pokemonTeam, setPokemonTeam] = useState([]);

//   useEffect(() => {
//     if (Array.isArray(team) && team.length > 0) {
//       setPokemonTeam(team);
//       // randomSelectPokemon()
//     }
//   }, [team]);
//   useEffect(() => {
//     if (Array.isArray(team) && team.length > 0) {
//       console.log("Change Pokemon ?", trainer, team[selector]?.heald);
//       if (team[selector]?.heald === 0) {
//         randomSelectPokemon();
//       }
//     }
//   }, []);

//   const randomSelectPokemon = (unablePokemon = []) => {
//     let selector = Math.round(Math.random() * (pokemonTeam.length - 1));

//     console.log(
//       "initSelectRandomPokemon",
//       team[selector]?.heald,
//       team
//     );
//     if (team.length >= 1) {
//       if (selector < 0) {
//         selector = 0;
//       }
//       unablePokemon = [...new Set(unablePokemon)];
//       if (unablePokemon.length === pokemonTeam.length) {
//         console.log("pokemonsUnable:", unablePokemon);

//         return methods.changeActualPhase(0);
//       } else {
//         if (team[selector].heald > 0) {
//           return methods.selector.pokemon(selector, trainer);
//         } else {
//           return randomSelectPokemon([...unablePokemon, selector]);
//         }
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>{trainer}</h1>
//       {pokemonTeam.map((pokemon, index) => (
//         <ShowSelectorPokemonTeamItem
//           key={pokemon._id}
//           trainer={trainer}
//           methods={methods}
//           pokemon={pokemon}
//           selector={selector}
//           index={index}
//         />
//       ))}
//     </div>
//   );
// }

// export default ShowSelectorPokemonTeam;


import { battleVariables } from "@/app/battle/battle";
import { updateUser } from "@/store/slice";
import React, { useState, useEffect } from "react";

function EndGame({ battleState }) {
  const initialState = {
    winner: battleState.turn.loser === "user" ? "rival" : "user",
    user: { ...battleState.trainer.user },
    teamPokemon: [...battleState.team.user],
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (battleState.trainer.user !== undefined) {
      const userUpdate = { ...state.user };

      userUpdate.experience =
        userUpdate.experience +
        battleVariables.baseExperience.winner[battleState.game.dificult]
          .experienceTrainer;
      userUpdate.pokeballs +=
        battleVariables.baseExperience.winner[
          battleState.game.dificult
        ].pokeballs;

      userUpdate.coins +=
        battleVariables.baseExperience.winner[battleState.game.dificult].coins;

      updateUser.box =
        battleVariables.baseExperience.winner[battleState.game.dificult].box;

      const updateTeamPokemon = battleState.team.user.map((pokemon) => ({
        ...pokemon,
        heald: 100,
        maxStack4level:
          pokemon.maxStack4level +
          battleVariables.baseExperience.winner[battleState.game.dificult]
            .experiencePokemon,
      }));

      // setState({
      //   ...state,
      //   user: updateUser,
      //   team: updateTeamPokemon
      // })

      fetch(`/api/user/put/userById?id=${userUpdate._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userUpdate),
      })
        .then((response) => response.json())
        .then((userData) => {
          console.log("DATA USER _____________", userData);
        })
        .catch((error) => {
          console.error(error);
        });

      const updateDataPokemon = updateTeamPokemon.map((pokemon) => {
        return fetch(`/api/pokemon/put/putById?id=${pokemon._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(pokemon),
        })
          .then((response) => {
            response.json();
            console.log("DATA TeamPokemon _____________", response);
          })
          .catch((error) => {
            console.error(error);
          });
      });

      Promise.all(updateDataPokemon)
        .then((responses) => {
          console.log(responses);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  console.log(state);

  return (
    <div>
      {state.winner === "user" ? "U win !!!" : "U lose!"}
      {state.winner === "user"
        ? `exp Pokemon. ${
            battleVariables.baseExperience.winner[battleState.game.dificult]
              .experiencePokemon
          }`
        : `exp Pokemon. ${
            battleVariables.baseExperience.loser[battleState.game.dificult]
              .experienceTrainer
          }`}

      {state.winner === "user"
        ? `exp Trainer. ${
            battleVariables.baseExperience.winner[battleState.game.dificult]
              .experienceTrainer
          }`
        : `exp Trainer. ${
            battleVariables.baseExperience.loser[battleState.game.dificult]
              .experienceTrainer
          }`}

      {state.winner === "user"
        ? `pokeballs. ${
            battleVariables.baseExperience.winner[battleState.game.dificult]
              .pokeballs
          }`
        : `pokeballs. ${
            battleVariables.baseExperience.loser[battleState.game.dificult]
              .pokeballs
          }`}

      {state.winner === "user"
        ? `coins. ${
            battleVariables.baseExperience.winner[battleState.game.dificult]
              .coins
          }`
        : `coins. ${
            battleVariables.baseExperience.loser[battleState.game.dificult]
              .coins
          }`}

      {state.winner === "user"
        ? `box. ${
            battleVariables.baseExperience.winner[battleState.game.dificult].box
          }`
        : `box. ${
            battleVariables.baseExperience.loser[battleState.game.dificult].box
          }`}
    </div>
  );
}

export default EndGame;

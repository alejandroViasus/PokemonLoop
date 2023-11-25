import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { imagesPokemon } from "@/Assets/funcions";
import { handlerVersion } from "@/store/slice";

//? Components
import CardButtonTeam from "../CardButtonTeam/CardButtonTeam";
import ShowType from "../ShowType/ShowType";
import ShowEffectiveness from "../ShowEffectiveness/ShowEffectiveness";
import ShowStacks from "../ShowStacks/ShowStacks";
import SendToOak from "../SendToOak/SendToOak";

function CardDetail({ pokemon }) {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.valueState);
  const initialState = {};
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(pokemon);
  }, [globalState.version]);
  useEffect(() => {
    if (pokemon?._id) {
      const version = `v${pokemon?._id} detailPokemon"}`;
      dispatch(handlerVersion({ state: globalState, version }));
    }
  }, [pokemon]);

  //console.log("pokemon___", state.type1 , state.type2);

  return (
    <div>
      {state?._id ? (
        <div>
          <h1>{state?.name}</h1>
          <Image
            src={imagesPokemon.official(state.noPokedex, state.shiny)}
            width={200}
            height={200}
            alt={`detail pokemon ${state.name}`}
          />
          <h4> {pokemon.shiny ? "SHINY" : ""}</h4>
          <h4> Favorite {pokemon.noPokedex}</h4>
          <CardButtonTeam pokemon={state} porperty={"favorite"} />
          <CardButtonTeam pokemon={state} />

          <SendToOak pokemon={pokemon}/>
          <div style={{ display: "flex", width: `550px` }}>
            <h4> types</h4>
            {state?.type1 ? (
              <ShowType
                type1={state.type1}
                type2={state.type2}
                fill="rgba(22,22,22,1)"
              ></ShowType>
            ) : null}
          </div>
          <div style={{ display: "flex" }}>
            <ShowEffectiveness
              type1={state.type1}
              type2={state.type2}
              Effectiveness={"2"}
            />
          </div>
          <ShowEffectiveness
            type1={state.type1}
            type2={state.type2}
            Effectiveness={"0.5"}
          />

          <div>
            <ShowStacks pokemon={pokemon} />
          </div>

          <h4> noPokedex: {pokemon.noPokedex}</h4>
          <h4> LEVEL: {pokemon.level}</h4>
          <h4>
            {" "}
            Actual Stack: {pokemon.actualStack}/{pokemon.maxStack4level}
          </h4>
          <h4> weight: {pokemon.weight}kg</h4>
          <h4> height: {pokemon.height}m</h4>
          <h4> type: {pokemon.type1}</h4>
          <h4> type: {pokemon.type2}</h4>
          <h4>
            Heald: {pokemon.baseHeald} + {pokemon.effortHeald} +{" "}
            {pokemon.scaleHeald}
          </h4>
          <h4>
            Attack: {pokemon.baseAttack} + {pokemon.effortAttack} +{" "}
            {pokemon.scaleAttack}
          </h4>
          <h4>
            Deffense: {pokemon.baseDeffense} + {pokemon.effortDeffense} +{" "}
            {pokemon.scaleDeffense}
          </h4>
          <h4>
            SpecialDeffense: {pokemon.baseSpecialDeffense} +{" "}
            {pokemon.effortSpecialDeffense} + {pokemon.scaleSpecialDeffense}
          </h4>
          <h4>
            SpecialAttack: {pokemon.baseSpecialAttack} +{" "}
            {pokemon.effortSpecialAttack} + {pokemon.scaleSpecialAttack}
          </h4>
          <h4>
            Speed: {pokemon.baseSpeed} + {pokemon.effortSpeed} +{" "}
            {pokemon.scaleSpeed}
          </h4>
        </div>
      ) : null}
    </div>
  );
}

export default CardDetail;

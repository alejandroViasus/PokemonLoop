import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { imagesPokemon, pokemonGet } from "@/Assets/funcions";
import { handlerVersion } from "@/store/slice";
import { typesPokemon } from "@/Assets/typesPokemon";
import { battleVariables } from "@/app/battle/battle";



//? Components
import CardButtonTeam from "../CardButtonTeam/CardButtonTeam";
import ShowType from "../ShowType/ShowType";
import ShowEffectiveness from "../ShowEffectiveness/ShowEffectiveness";
import ShowStacks from "../ShowStacks/ShowStacks";
import ShowAllStat from "../ShowAllStats/ShowAllStat";
import SendToOak from "../SendToOak/SendToOak";

function CardDetail({ pokemon, theme, formatImage = 'gif' }) {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.valueState);
  const initialState = {};
  const [state, setState] = useState(initialState);


  const scalesImagePokemon = {
    base: 100,
    min: 100,
    max: 150,
  }
  let sizeImagePokemon = scalesImagePokemon.base * pokemon?.height;

  if (sizeImagePokemon > scalesImagePokemon.max) {
    sizeImagePokemon = scalesImagePokemon.max;
  }
  if (sizeImagePokemon < scalesImagePokemon.min) {
    sizeImagePokemon = scalesImagePokemon.min;
  }
  // const sizeImagePokemon = 100

  useEffect(() => {
    setState(pokemon);
  }, [globalState.version]);
  useEffect(() => {
    if (pokemon?._id) {
      const version = `v${pokemon?._id} detailPokemon"}`;
      dispatch(handlerVersion({ state: globalState, version }));
    }
  }, [pokemon]);

  console.log("pokemon___", pokemon);

  const stats = ['Heald', 'Attack', 'Deffense', 'SpecialAttack', 'SpecialDeffense', 'Speed']

  return (
    <div
      className="flex-all-center overflow-hidden relative"
      style={{
        height: '700px',
        height: '100%',
        width: '40%',
        backgroundColor: typesPokemon[theme].colors.secondary,
      }}
    >
      {state?._id ? (
        <div
          className='border-radius-big relative flex-all-center relative'
          style={{
            width: '90%',
            height: '800px',
            //backgroundColor: "yellow",
          }}
        >

          <h1
            className="absolute title-details"
            style={{
              top: '-6%',
              left: '0%',
              // color:'red'
            }}
          >
            {state?.name}
          </h1>

          <div className="absolute"
            style={{
              top: '-8%',
              right: '-5%',
              scale: '0.3',
              opacity: '1'
            }}
          >
            <ShowType
              type1={pokemon.type1}
              type2={pokemon.type2}
              fill={pokemon !== undefined ? typesPokemon[theme].colors.background : typesPokemon.Normal.colors.primary}
              scale='1'
            ></ShowType>
          </div>

          <div className="absolute"
            style={{
              bottom: '25%',
              fontWeight: '300',
              opacity: '0.05',
              // backgroundColor:'blue',
              width: `600px`,
              height: `600px`,
            }}
          >
            <Image
              src={imagesPokemon.official(pokemon.noPokedex, pokemon.shiny)}
              width={sizeImagePokemon}
              height={sizeImagePokemon}
              layout="responsive"
              objectFit="cover"
              alt={`pokemon ${pokemon.name}`}
            />
          </div>

          <div className="absolute flex-all-center"
            style={{
              //backgroundColor:'red',
              alignItems: 'flex-end',
              top: '16%',
              left: '0%',
            }}
          >
            <h1 style={{ fontWeight: '400' }}> lvl. {pokemonGet.calcularNivel(pokemon.experience)} </h1>

          </div>

          <div className="absolute flex-all-center"

            style={{
              top: '3%',
              left: '0%',
              // color:'red'
            }}
          >


            <div>
              <ShowEffectiveness
                theme={theme}
                type1={state.type1}
                type2={state.type2}
                Effectiveness={"2"}
              />
              <ShowEffectiveness
                theme={theme}
                type1={state.type1}
                type2={state.type2}
                Effectiveness={"0.5"}
              />
            </div>
          </div>

          <div className="absolute flex-all-center"
            style={{
              top: '1.5%',
              right: '5%',
              fontWeight: '300',
              width: `200px`,
              height: `200px`,

            }}
          >


            <div className="flex-all-center"
              style={{
                width: `${sizeImagePokemon}px`,
                height: `${sizeImagePokemon}px`,
                backgroundColor: `${pokemon !== undefined ? typesPokemon[theme].colors.background : null}`,
                border: `8px solid ${pokemon !== undefined ? typesPokemon[theme].colors.primary : null}`,
                padding: '10%',
                borderRadius: '10%'
              }}
            >
              <Image
                src={imagesPokemon[formatImage](pokemon.noPokedex, pokemon.shiny)}
                width={sizeImagePokemon}
                height={sizeImagePokemon}

                layout="responsive"
                objectFit="cover"
                alt={`pokemon ${pokemon.name}`}
              />
            </div>
          </div>


          <div className="absolute border-radius-big flex-all-center"
            style={{
              flexDirection: 'column',
              // justifyContent: 'flex-start',
              alignItems: 'flex-start',
              backgroundColor: `${typesPokemon[theme].colors.primary}`,
              width: 'auto',
              height: 'auto',
              bottom: '-5%',
              left: '0%',
              padding: '10px 30px'
            }}
          >
            <ShowAllStat key={`showStatTitle`} theme={theme} stat={'title'} />

            {stats.map((stat) => {
              return (
                <ShowAllStat key={`showStat${stat}`} theme={theme} pokemon={pokemon} stat={stat} />
              )
            })}
          </div>

          <div
            className="absolute"
            style={{
              left: '10%',
              top: '28%',
            }}
          >
            <ShowStacks pokemon={pokemon} theme={theme} />
          </div>
        </div>
      ) : null}








      <div className="absolute flex-all-center"
        style={{
          flexDirection:'column',
          alignItems:'flex-end',
          paddingRight:'10%',
          width: '100%',
          height: '100%',
        
          // backgroundColor: 'red',
          // opacity:'0.1',
          zIndex: '2',
          gap:'5%'
        }}
      >
        <CardButtonTeam pokemon={state} porperty={"favorite"} scale={3}  theme={theme} />
        <CardButtonTeam pokemon={state} scale={3}  theme={theme}/>
        <SendToOak pokemon={pokemon}  theme={theme} scale={3}/>
      </div>




    </div>
  );
}

export default CardDetail;

// <div>
//   <h1>{state?.name}</h1>
//   <Image
//     src={imagesPokemon.official(state.noPokedex, state.shiny)}
//     width={200}
//     height={200}
//     alt={`detail pokemon ${state.name}`}
//   />
//   <h4> {pokemon.shiny ? "SHINY" : ""}</h4>
//   <h4> Favorite {pokemon.noPokedex}</h4>
//   <CardButtonTeam pokemon={state} porperty={"favorite"} />
//   <CardButtonTeam pokemon={state} />

//   <SendToOak pokemon={pokemon}/>
//   <div style={{ display: "flex", width: `550px` }}>
//     <h4> types</h4>
//     {state?.type1 ? (
//       <ShowType
//         type1={state.type1}
//         type2={state.type2}
//         fill="rgba(22,22,22,1)"
//       ></ShowType>
//     ) : null}
//   </div>
//   <div style={{ display: "flex" }}>
//     <ShowEffectiveness
//       type1={state.type1}
//       type2={state.type2}
//       Effectiveness={"2"}
//     />
//   </div>
//   <ShowEffectiveness
//     type1={state.type1}
//     type2={state.type2}
//     Effectiveness={"0.5"}
//   />

//   <div>
//     <ShowStacks pokemon={pokemon} />
//   </div>

//   <h4> noPokedex: {pokemon.noPokedex}</h4>
//   <h4> LEVEL: {pokemonGet.calcularNivel(pokemon.experience)}  </h4>
//   <h4> exp: {pokemon.experience}  </h4>
//   <h4>
//     {" "}
//     Actual Stack: {pokemon.actualStack}/{pokemon.maxStack4level}
//   </h4>
//   <h4> weight: {pokemon.weight}kg</h4>
//   <h4> height: {pokemon.height}m</h4>
//   <h4> type: {pokemon.type1}</h4>
//   <h4> type: {pokemon.type2}</h4>
//   <h4>
//     Heald: {pokemon.baseHeald} + {pokemon.effortHeald} +{" "}
//     {pokemon.scaleHeald}
//   </h4>
//   <h4>
//     Attack: {pokemon.baseAttack} + {pokemon.effortAttack} +{" "}
//     {pokemon.scaleAttack}
//   </h4>
//   <h4>
//     Deffense: {pokemon.baseDeffense} + {pokemon.effortDeffense} +{" "}
//     {pokemon.scaleDeffense}
//   </h4>
//   <h4>
//     SpecialDeffense: {pokemon.baseSpecialDeffense} +{" "}
//     {pokemon.effortSpecialDeffense} + {pokemon.scaleSpecialDeffense}
//   </h4>
//   <h4>
//     SpecialAttack: {pokemon.baseSpecialAttack} +{" "}
//     {pokemon.effortSpecialAttack} + {pokemon.scaleSpecialAttack}
//   </h4>
//   <h4>
//     Speed: {pokemon.baseSpeed} + {pokemon.effortSpeed} +{" "}
//     {pokemon.scaleSpeed}
//   </h4>
// </div>

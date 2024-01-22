import React from "react";
import ShowSelectorPokemonTeam from "../ShowSelectorPokemonTeam/ShowSelectorPokemonTeam";
import Image from "next/image";
import { trainers } from "@/Assets/trainers";
import { colors as globalColors } from "@/Assets/colors";
import { typesPokemon } from "@/Assets/typesPokemon";
import Link from "next/link";

//images
import haloStar from '../../../../../public/Assets/icons/componentsBattle/haloStar.svg'
import boxName from '../../../../../public/Assets/icons/componentsBattle/boxName.svg'
import lightning from '.././../../../../public/Assets/icons/componentsBattle/lightning.svg'
import pokeball from '.././../../../../public/Assets/icons/componentsBattle/pokeball.svg'
import { imagesPokemon } from "@/Assets/funcions";

// import components
import ShowType from "../../ShowType/ShowType";
import StadisticInBattle from "../StadisticInBattle/StadisticInBattle";


const BoxSelectPokemon = ({ battleState, methods }) => {

  const size = {
    trainer: {
      width: 700,
      height: 376
    },
    boxName: {
      width: 900,
      height: 176
    }
  }
  const colors = {
    bgRed: globalColors.Battle.selectorPokemon.background.red,
    bgBlue: globalColors.Battle.selectorPokemon.background.blue,
    bgBlack: globalColors.Battle.selectorPokemon.background.black,
    iconBlue: globalColors.Battle.selectorPokemon.background.blueIcons,
    iconRed: globalColors.Battle.selectorPokemon.background.redIcons,
  }

  const pokemonSelector = {
    user: battleState.team.user !== undefined ? battleState.team.user[battleState.select.pokemon.user] : {},
    rival: battleState.team.rival !== undefined ? battleState.team.rival[battleState.select.pokemon.rival] : {},
  }
  console.log('from-selectorR', battleState)
  return (
    <div
      className="flex-all-center overflow-hidden"
      style={{
        flexDirection: 'column',
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0%",
        left: "0%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.bgBlack,
        gap: '5%'
      }}
    >

      <div
        className="flex-all-center absolute"
        style={{
          height: '8%',
          // width:'10%',
          padding: '15px 50px',
          // backgroundColor:'red',
          top: '8%',
          borderRadius: '40px',
          outline: `6px solid ${typesPokemon[battleState.game.bioma].colors.primary}`,
          color: typesPokemon[battleState.game.bioma].colors.primary
        }}
      >
        <h3 className="absolute"
          style={{ top: '-50%' }}
        >
          BIOMA</h3>
        <h1>
          {battleState.game.bioma}
        </h1>
        <div
          className="flex-all-center"
          style={{
            scale: '0.4'
          }}
        >
          <ShowType
            type1={battleState.game.bioma}
            type2={battleState.game.bioma}
            fill={typesPokemon[battleState.game.bioma].colors.primary}
            scale='1'
            disposition='column'
          ></ShowType>
        </div>
      </div>
      <div
        className="flex-all-center border-radius-big"
        style={{
          width: '90%',
          height: '60%',
          background: `linear-gradient(to right, ${colors.bgBlue} 50%, ${colors.bgRed}50%)`,
        }}
      >
        <Image className="animation-rotate-360 absolute" src={haloStar} height={900} width={900} alt="image halo star" />
        <div
          className="flex-all-center relative"
          style={
            {
              height: '100%',
              width: '50%',
              // backgroundColor: 'green',
              zIndex: '1',
            }
          }
        >
          <Image className="absolute"
            style={{
              //backgroundColor: 'red',
              top: '-3%',
              right: '-5%'
            }}
            src={trainers[battleState.trainer.user.pictureTrainer].battle} width={size.trainer.width} height={size.trainer.height} alt='image trainer user' />

          <div
            className="flex-all-center absolute"
            style={{
              width: '100%',
              top: '61%',
              left: '2%',
              transform: 'rotate(-2.8deg)',
            }}
          >


            <Image className="absolute"
              style={{

              }}
              src={boxName} width={size.boxName.width} height={size.boxName.height} alt='image trainer user' />
            <h1 className="absolute"
              style={{
                fontSize: '40px'
              }}
            >{battleState.trainer.user.gametag}</h1>
          </div>

          <div className="absolute flex-all-center"
            style={{
              bottom: '3%',
              width: '100%',
              height: '20%',
              // backgroundColor: 'purple'
            }}
          >


            <ShowSelectorPokemonTeam
              team={battleState.team.user}
              methods={methods}
              trainer="user"
              selector={battleState.select.pokemon.user}
            />
          </div>

          <div className="absolute flex-all-center"
            style={{
              justifyContent: 'flex-end',
              width: '325px',
              height: '250px',
              //backgroundColor: 'red',
              top: '5%',
              left: '10%',
              opacity: 0.95
            }}
          >
            {/* <div className="">
              <ShowType
                type1={pokemonSelector.user?.type1}
                type2={pokemonSelector.user?.type2}
                fill={colors.iconBlue}
                scale='1'
                disposition='column'
              ></ShowType>
            </div> */}

          </div>

          <div className="absolute border-radius-mid "
            style={{
              left: '0%',
              top: "0%",
              scale: '0.8',
              zIndex: 2,
              backgroundColor: colors.iconBlue,
              padding: '25px 15px',
              outline: `6px solid ${globalColors.Battle.selectorPokemon.background.blackMarginSelectors}`,
            }}
          >
            <StadisticInBattle pokemon={pokemonSelector} trainer={'user'} rival={'rival'} bioma={battleState.game.bioma} dificult={battleState.game.dificult} />
          </div>
        </div>

        <div
          className="flex-all-center relative"
          style={
            {
              height: '100%',
              width: '50%',
              // backgroundColor: 'yellow',
              zIndex: '1',
            }
          }
        >
          <Image className="absolute"
            style={{
              //backgroundColor: 'red',
              top: '-3%',
              left: '-5%'
            }}
            src={trainers[battleState.trainer.rival.pictureTrainer].battle} width={size.trainer.width} height={size.trainer.height} alt='image trainer rival' />

          <div
            className="flex-all-center absolute"
            style={{
              width: '100%',
              right: '3%',
              top: '61%',
              transform: 'rotate(-2.8deg)',
            }}
          >


            <Image className="absolute"
              style={{

              }}
              src={boxName} width={size.boxName.width} height={size.boxName.height} alt='image trainer user' />
            <h1 className="absolute"
              style={{
                fontSize: '40px'
              }}
            >{battleState.trainer.rival.gametag}</h1>
          </div>

          <div className="absolute flex-all-center"
            style={{
              bottom: '3%',
              width: '100%',
              height: '20%',
              // backgroundColor: 'red'
            }}
          >
            <ShowSelectorPokemonTeam
              team={battleState.team.rival}
              methods={methods}
              trainer="rival"
              selector={battleState.select.pokemon.rival}
            />

          </div>

          <div className="absolute border-radius-mid "
            style={{
              right: '0%',
              top: "0%",
              scale: '0.8',
              zIndex: 2,
              backgroundColor: colors.iconRed,
              padding: '25px 15px',
              outline: `6px solid ${globalColors.Battle.selectorPokemon.background.blackMarginSelectors}`,
            }}
          >
            <StadisticInBattle pokemon={pokemonSelector} trainer={'rival'} rival={'user'} bioma={battleState.game.bioma} dificult={battleState.game.dificult} />
          </div>
        </div>


      </div>

      <Image className="absolute"
        src={lightning}
        height={610}
        width={222}
        alt={`image Lightning to battle selector`}
        style={{
          top: '21.5%',
          left: '45.2%',
          scale: '1.1'
        }}
      />

      <Image className="absolute"
        src={pokeball}
        height={240}
        width={240}
        alt={`image Lightning to battle selector`}
        style={{
          top: '45%',
          left: '43.2%',
          zIndex: 2
        }}
      />

      <div
        className="absolute flex-all-center"
        style={{
          bottom: '5%',
          gap: "50px"
        }}
      >


        <button
          className="none-styles-button title-details outline-box-big "
          style={{
            width: '400px',
            height: '80px',
            backgroundColor: colors.bgBlue,
            borderRadius: '40px',
            fontSize: '25px',
          }}
          onClick={() => methods.changeActualPhase(4)}>
          Start Battle
        </button>

        <Link
          className=" flex-all-center none-styles-button title-details cursor-pointer outline-box-big"
          style={{
            width: '400px',
            height: '80px',
            backgroundColor: colors.bgRed,
            borderRadius: '40px',
            fontSize: '25px',
            textDecoration: 'none',
            color: globalColors.Battle.selectorPokemon.background.white,
            // outline:'4px solid green'
          }}

          href={'/'}> Surrender </Link>
      </div>


      {/* <div
        style={{
          width: "95%",
          height: "70%",
          backgroundColor: "rgba(100, 100, 222, 1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ShowSelectorPokemonTeam
            team={battleState.team.user}
            methods={methods}
            trainer="user"
            selector={battleState.select.pokemon.user}
          />
          <ShowSelectorPokemonTeam
            team={battleState.team.rival}
            methods={methods}
            trainer="rival"
            selector={battleState.select.pokemon.rival}
          />
        </div>
        <button onClick={() => methods.changeActualPhase(4)}>
          Start Battle
        </button>
      </div> */}
    </div>
  );
};

export default BoxSelectPokemon;

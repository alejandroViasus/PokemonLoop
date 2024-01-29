import React from 'react'
import { generate, imagesPokemon, pokemonGet } from '@/Assets/funcions';
import Image from 'next/image';


import HealdBar from '../HealdBar/HealdBar'
import { typesPokemon } from '@/Assets/typesPokemon';
import pokemon from '../../../../../models/pokemon';
import ShowHealingBar from '../ShowHealingBar/ShowHealingBar';
import ShowScore from '../ShowScore/ShowScore';
import ShowType from '../../ShowType/ShowType';
import BorderHeald from '../BorderHeald/BorderHeald';


function HeaderBattleField({ battleState, format = 'gif' }) {
    console.log(battleState)
    let sizeImagePokemon = 95;
    const pokemonUser = battleState?.team?.user?.[battleState?.select?.pokemon?.user]
    const pokemonRival = battleState?.team?.rival?.[battleState?.select?.pokemon?.rival]
    const theme = battleState?.game?.bioma;

    console.log('.........................', typesPokemon[theme].colors.primary)
    const widthProp = 46
    const whithConnector = 100 - (widthProp * 2);

    let pointsRival = 0;
    let pointsUser = 0;

    battleState?.team?.user?.map((pokemon) => {
        if (pokemon.heald <= 0) {
            pointsRival += 1;
        }
    })
    battleState?.team?.rival?.map((pokemon) => {
        if (pokemon.heald <= 0) {
            pointsUser += 1;
        }
    })


    return (
        <div
            className='flex-all-center percentage-100-width relative'
            style={{
                backgroundColor: typesPokemon[theme].colors.primary,
                height: '100%',
                gap: `${whithConnector}%`,
                alignItems: 'flex-end'
            }}
        >
            <ShowHealingBar pokemon={pokemonUser} theme={theme} widthProp={widthProp} />


            <ShowHealingBar pokemon={pokemonRival} theme={theme} position='right' widthProp={widthProp} />


            <div className='absolute flex-all-center'
                style={{
                    width: '200px',
                    height: '100%',
                    // backgroundColor: 'orange',
                    justifyContent: 'flex-end',
                    flexDirection: 'column',
                }}
            >

                <div className='flex-all-center'
                    style={{
                        width: '100%',
                        height: '50%',
                        // backgroundColor:'blue',
                        borderRadius: '15px'
                    }}
                >
                    {/* <ShowType
                        type1={battleState?.game?.bioma}
                        type2={battleState?.game?.bioma}
                        fill={typesPokemon[battleState?.game?.bioma].colors.textWhite}
                        scale='1'
                    ></ShowType> */}
                    <h1>VS.</h1>
                </div>


                <div
                    className='flex-all-center '
                    style={{
                        width: '100%',
                        height: '50%',
                        color:typesPokemon[battleState.game.bioma].colors.textDark,
                        backgroundColor: typesPokemon[battleState.game.bioma].colors.tertiary,
                        border: `5px solid ${typesPokemon[battleState.game.bioma].colors.quaternary}`,
                        borderRadius: '15px'
                    }}
                >
                    <h1 className=''>
                        {pointsUser} - {pointsRival}
                    </h1>

                </div>
            </div>

            {/* 


            */}



            {/* //-------------------------------------------------------------------------- */}
            {/* <div
                className='absolute flex-all-center'
                style={{
                    top: '0%',
                    height: '100%',
                    width: `${whithConnector + 2}%`,
                    
                     backgroundColor: "red",
                    // opacity: 0.3,
                    // scale:'1.1',
                    borderRadius:'30px',
                    zIndex: '0',
                    color: typesPokemon[theme].colors.secondary
                }}
            > */}




            {/* </div> */}



        </div>
    )
}

export default HeaderBattleField
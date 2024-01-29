import React, { useState, useEffect } from 'react'
import { colors } from "@/Assets/colors";
import { typesPokemon } from '@/Assets/typesPokemon';
import { valuesPokemon } from '@/Assets/funcions';

import ShowCardMiniTeam from '../../ShowCardMiniTeam/ShowCardMiniTeam';

import Link from "next/link";
import { battle } from '@/Assets/battle';
import ShowCardMiniTeamEmpty from '../../ShowCardMiniTeamEmpty/ShowCardMiniTeamEmpty';


function ValidationTeam({ battleState, methods }) {

    useEffect(() => {
        if (battleState.team.user.length === valuesPokemon.componentBattle.size.team && state.countRedirectState === 0) {
            //console.log('ValidationTeam Complete!!')
            methods.changeActualPhase(battleState.phase.actual + 1)
            setState({ ...setState, countRedirectState: state.countRedirectState++ })
        }
    }, [])

    const initialState = {
        countRedirectState: 0,
        showConditional0Team: false,
    };
    const [state, setState] = useState(initialState)
    // console.log("state Battle", battleState)

    const actualTeam = []

    for (let i = 0; i < valuesPokemon.componentBattle.size.team; i++) {
        if (battleState.team.user[i] !== undefined) {
            actualTeam.push(<ShowCardMiniTeam key={`cardInValidation_${i}`} pokemon={battleState.team.user[i]} />)
        } else {
            actualTeam.push(<ShowCardMiniTeamEmpty key={`cardInValidation_${i}`} userId={battleState.trainer.user._id} pokemon={battleState.team.user[i]} />)
        }
    }

    return (
        <div
            className='content-alert-standard '
        >
            <div className="bg-panel"

            >

            </div>



            {battleState.team.user.length === 0 ||
                battleState.team.user > valuesPokemon.componentBattle.size.team ?
                (
                    <div className="panel-info"
                        style={{
                            backgroundColor: typesPokemon[battleState.trainer.user.theme].colors.primary,
                            backgroundColor: 'red',
                        }}
                    >
                        <div className="content-title">
                            <h1 className="title">
                                {" "}
                                {`U dont have a PokemonTeam`}
                            </h1>
                            <h3>{`build your Pokémon team and come back to compete.`}</h3>
                        </div>
                    </div>
                ) : (
                    <div className="panel-info overflow-hidden"
                        style={{
                            backgroundColor: typesPokemon[battleState.trainer.user.theme].colors.background
                        }}
                    >

                        <div className="content-title relative"
                            style={{
                                height: '40%',
                                backgroundColor: typesPokemon[battleState.trainer.user.theme].colors.primary,
                            }}
                        >
                            <h1
                                style={{
                                    color: typesPokemon[battleState.trainer.user.theme].colors.textDark,
                                }}
                            >
                                {" "}
                                {`U PokemonTeam is Small ${battleState.team.user.length}/ ${valuesPokemon.componentBattle.size.team}`}
                            </h1>
                            <h3
                                className='absolute'
                                style={{
                                    bottom: '15%',
                                    color: typesPokemon[battleState.trainer.user.theme].colors.textWhite,
                                }}
                            >{state.showConditional0Team ? `What do u do?...` : `do you want to continue ?`}</h3>
                        </div>
                        {
                            state.showConditional0Team
                                ? (
                                    <div className="info flex-all-center"
                                        style={{
                                            // backgroundColor: 'green',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '40%'
                                        }}
                                    >

                                        <Link
                                            className="
                                            flex-all-center
                                            bottons-info 
                                           none-styles-button 
                                           button-alert-in-battle
                                           "
                                            href={`/?id=${battleState.trainer.user._id}`}
                                            style={{
                                                backgroundColor: typesPokemon[battleState.trainer.user.theme].colors.secondary,
                                                border: `4px solid ${typesPokemon[battleState.trainer.user.theme].colors.primary}`,
                                                color: typesPokemon[battleState.trainer.user.theme].colors.primary
                                            }}

                                        >
                                            <h1
                                                className='title-details'
                                                style={{
                                                    fontSize: '25px'
                                                }}
                                            >
                                                {`Go to Home`}

                                            </h1>
                                        </Link>
                                        <Link
                                            href={`/cards?id=${battleState.trainer.user._id}`}
                                            className="
                                            flex-all-center
                                            bottons-info 
                                           none-styles-button 
                                           button-alert-in-battle
                                           "
                                            style={{
                                                backgroundColor: typesPokemon[battleState.trainer.user.theme].colors.textWhite,

                                                border: `4px solid ${typesPokemon[battleState.trainer.user.theme].colors.textDark}`,

                                                color: typesPokemon[battleState.trainer.user.theme].colors.background
                                            }}

                                        >
                                            <h1
                                                className='title-details'
                                                style={{
                                                    fontSize: '25px'
                                                }}
                                            >
                                                {`Go to Cards`}

                                            </h1> </Link>
                                    </div>)
                                : (
                                    <div className="info flex-all-center relative"
                                        style={{
                                            //backgroundColor: 'green',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-end',
                                            alignItems: 'center',
                                            height: '100%',
                                            paddingBottom: '3%',
                                            gap: "0%"
                                        }}
                                    >
                                        <div
                                            className='flex-all-center border-radius-mid'
                                            style={{
                                                height: '60%',
                                                width: '80%',
                                                backgroundColor: typesPokemon[battleState.trainer.user.theme].colors.secondary,
                                                border: `4px solid ${typesPokemon[battleState.trainer.user.theme].colors.primary}`,
                                                gap: '45px',

                                            }}
                                        >
                                            {actualTeam}
                                        </div>
                                        <div
                                            className='flex-all-center percentage-100-width'
                                            style={{
                                                // backgroundColor: 'red',
                                                height: "30%",
                                                gap: '12%'
                                            }}
                                        >

                                            <button className="bottons-info 
                                            none-styles-button 
                                            button-alert-in-battle
                                            
                                            "
                                                style={{
                                                    backgroundColor: typesPokemon[battleState.trainer.user.theme].colors.secondary,
                                                    border: `4px solid ${typesPokemon[battleState.trainer.user.theme].colors.primary}`,
                                                    color: typesPokemon[battleState.trainer.user.theme].colors.primary
                                                }}

                                                onClick={() => methods.changeActualPhase(battleState.phase.actual + 1)}
                                            >
                                                <h1
                                                    className='title-details'
                                                    style={{
                                                        fontSize: '25px'
                                                    }}
                                                    onClick={() => setState({ ...state, showConditional0Team: !state.showConditional0Team })}
                                                >
                                                    {`Yes`}
                                                </h1>
                                            </button>

                                            <button
                                                className="bottons-info 
                                            none-styles-button 
                                            button-alert-in-battle
                                            "
                                                style={{
                                                    backgroundColor: typesPokemon[battleState.trainer.user.theme].colors.textWhite,

                                                    border: `4px solid ${typesPokemon[battleState.trainer.user.theme].colors.textDark}`,

                                                    color: typesPokemon[battleState.trainer.user.theme].colors.background
                                                }}

                                                onClick={
                                                    () => setState(
                                                        {
                                                            ...state, showConditional0Team: !state.showConditional0Team
                                                        }
                                                    )
                                                }
                                            >
                                                <h1
                                                    className='title-details'
                                                    style={{
                                                        fontSize: '25px'
                                                    }}
                                                >
                                                    {`Wait,No !`}

                                                </h1>
                                            </button>


                                        </div>
                                    </div>)
                        }


                    </div>
                )
            }





        </div>

    )
}

export default ValidationTeam
import React from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'
import ShowType from '../ShowType/ShowType'

function RenderBattleField({ theme = 'None', width, height }) {
    return (
        <div
            className="
      percentage-100-width
      percentage-100-height
      overflow-hidden
      relative
      flex-all-center
      "
            style={{
                borderRadius: '20px',
                backgroundColor: typesPokemon[theme].colors.secondary,
                outline:`5px solid ${typesPokemon[theme].colors.primary}`,
                width,
                height,
            }}
        >


            <div className="
        relative
        percentage-100-width
        percentage-100-height 
        flex-all-center
        ">



                <div className="absolute"
                    style={
                        {
                            left: '0%',
                            opacity: 0.15,
                            scale: '6'
                        }
                    }
                >
                    <ShowType
                        type1={theme}
                        type2={theme}
                        fill={typesPokemon[theme].colors.background}
                        scale='1'
                    ></ShowType>
                </div>


                <div className="absolute"
                    style={
                        {
                            right: '0%',
                            opacity: 0.15,
                            scale: '6'
                        }
                    }
                >
                    <ShowType
                        type1={theme}
                        type2={theme}
                        fill={typesPokemon[theme].colors.background}
                        scale='1'
                    ></ShowType>
                </div>


                <div
                    className="absolute"
                    style={{
                        height: '450px',
                        width: '450px',
                        backgroundColor: typesPokemon[theme].colors.primary,
                        borderRadius: '50%'
                    }}
                >
                </div>
                <div
                    className="absolute"
                    style={{
                        height: '100%',
                        width: '2%',
                        backgroundColor: typesPokemon[theme].colors.secondary
                    }}
                >
                </div>


                <div
                    className="absolute"
                    style={{
                        height: '200px',
                        width: '200px',
                        backgroundColor: typesPokemon[theme].colors.secondary,
                        borderRadius: '50%'
                    }}
                >
                </div>
                <div
                    className="absolute"
                    style={{
                        height: '150px',
                        width: '150px',
                        backgroundColor: typesPokemon[theme].colors.primary,
                        borderRadius: '50%'
                    }}
                >
                </div>

                <ShowType
                    type1={theme}
                    type2={theme}
                    fill={typesPokemon[theme].colors.secondary}
                    scale='1'
                ></ShowType>



            </div>
        </div>
    )
}

export default RenderBattleField
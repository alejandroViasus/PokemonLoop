import React from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'

function BorderHeald({ theme = 'None', color = 'Npne' }) {
    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={876}
            height={136}
            fill="none"
           
        >
            <path fill={typesPokemon[theme].colors.secondary} d="M725.671 0H0v83.661h876L725.671 0Z" />
            <path fill={typesPokemon[theme].colors.tertiary} d="M876 83.661H0v7.34h876z" />
            <path fill={typesPokemon[theme].colors.background} d="M876 136H0V91h876z" />
        </svg>
    )
}

export default BorderHeald
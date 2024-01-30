import React from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'

function ArrowBtn({ theme = 'None' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            fill="none"
        >
            <path
                fill={typesPokemon[theme].colors.secondary}
                d="M20.5 37 5.345 10.75h30.31L20.5 37Z"
            />
        </svg>
    )
}

export default ArrowBtn
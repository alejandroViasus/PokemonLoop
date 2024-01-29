import { typesPokemon } from '@/Assets/typesPokemon'
import React from 'react'



function ShowScore({theme='None'}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={241}
            height={60}
            fill="none"
        >
            <path
                fill={typesPokemon[theme].colors.primary}
                stroke={typesPokemon[theme].colors.textDark}
                strokeWidth={5}
                d="M236 3H5l27.059 54h177.384L236 3Z"
            />
        </svg>
    )
}

export default ShowScore
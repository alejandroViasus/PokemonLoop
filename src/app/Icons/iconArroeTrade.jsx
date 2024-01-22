import React from 'react'

function iconArroeTrade({ type, subColor = 'primary', color = '' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={46}
            height={53}
            fill="black"

        >
            <path
                fill={color !== ''
                    ? color
                    : typesPokemon[type].colors[subColor]
                }
                d="M44.417 24.144c1.592.92 1.592 3.218 0 4.138L3.583 51.857c-1.592.92-3.583-.23-3.583-2.07V2.638C0 .8 1.99-.35 3.583.57l40.834 23.575Z"
            />
        </svg>
    )
}

export default iconArroeTrade
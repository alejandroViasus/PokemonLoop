import React from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'
import { useSelector, useDispatch } from "react-redux";

function VisualMakeover({ element }) {
    const globalState = useSelector((state) => state.valueState);
 
    return (
        <div
            style={{
                height: '50px',
                width: '100%',
                backgroundColor: 'rgba(22,22,22,0.3)'
            }}
        >
            <h2
                className=""
                style={{
                    color: `${typesPokemon[globalState.user.theme].colors.textWhite}`,

                }}
            >{element.toUpperCase()}</h2>
        </div>
    )
}

export default VisualMakeover
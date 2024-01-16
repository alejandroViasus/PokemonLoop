import React from 'react'
import { valuesPokemon } from '@/Assets/funcions';
import { titleStack,colorsStack ,typesPokemon} from '@/Assets/typesPokemon';


function ShowStack({ pokemon, stack }) {

    let maxScale = valuesPokemon.probabilitiScale.epic.value;
    const scale = pokemon !== undefined ? pokemon[`scale${stack}`] : 0
    const color = pokemon!==undefined? typesPokemon[pokemon.type1].colors.background:typesPokemon.Normal.colors.background

    let title=''

    

    return (
        <div
        className='percentage-100-height flex-all-center'
        style={{width:'20%',flexDirection:'column'}}
        >

            
            <div
            className='flex-all-center relative overflow-hidden'
            style={{
                width: '100%',
                height: '70%',
                backgroundColor: color,
                borderRadius: '8px',
                flexDirection: 'column',
                border:`3px solid ${color}`


            }}
        >
            <div className="absolute"
                style={{
                    height: '300%',
                    width: '100%',
                    backgroundColor: colorsStack[stack],
                    top: `${100 - (5 + (scale / maxScale) * 100)}%`,
                }}
            ></div>
        </div>
        <h6
            style={{opacity:0.7}}
            >{titleStack[stack]}</h6>
        </div>
    )
}

export default ShowStack
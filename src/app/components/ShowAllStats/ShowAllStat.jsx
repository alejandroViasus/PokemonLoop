import React from 'react'

//import icons
import iconHeald from '../../../../public/Assets/icons/iconHeald.svg';
import iconSword from '../../../../public/Assets/icons/iconSword.svg';
import iconSwordPlus from '../../../../public/Assets/icons/iconSword+.svg';
import iconShield from '../../../../public/Assets/icons/iconShield.svg';
import iconShieldPlus from '../../../../public/Assets/icons/iconShield+.svg';
import iconSpeed from '../../../../public/Assets/icons/iconSpeed.svg';

import Image from 'next/image';
import { typesPokemon } from '@/Assets/typesPokemon';


function ShowAllStat({ pokemon, stat, theme }) {

    const sizeIcon = 80;
    const icons = {
        Heald: iconHeald,
        Attack: iconSword,
        Deffense: iconShield,
        SpecialAttack: iconSwordPlus,
        SpecialDeffense: iconShieldPlus,
        Speed: iconSpeed,
    }

    const styleData = {
        width: '80px',
        borderRadius: '25px',
        padding: "1px 5px",
        color: `${typesPokemon[theme].colors.background}`,
        border: stat!=='title'?`1px solid ${typesPokemon[theme].colors.background}`:null,
       
    }
    const styleTotal = {
        width: '90px',
        borderRadius: '25px',
        padding: "1px 5px",
        color: `${typesPokemon[theme].colors.background}`,
        border: stat!=='title'?`1px solid ${typesPokemon[theme].colors.background}`:null,
        backgroundColor:`rgba(22,22,22,0.03)`
    }

    const stylePlus = {
        color: `${typesPokemon[theme].colors.secondary}`,
    }

    const plus=stat!=='title'?'+' :'+'

    const showStat = (base = 0, effort = 0, scale = 0) => {
        return (
            <div
                className='flex-all-center'
                style={{
                    // backgroundColor: 'blue',
                    height: '35px',
                    width: '100%',
                    gap: '5px',
                }}
            >
                <div
                    className='flex-all-center'
                    style={{
                        height: '60px',
                        width: '60px',
                        scale: '0.4',
                    }}
                > {
                    stat!=='title'
                    ?<Image src={icons[stat]} height={sizeIcon} width={sizeIcon} alt={`icon${stat}`} />
                    :<button>{`>`}</button>
                }
                    
                </div>

                <p
                    className='flex-all-center'
                    style={styleData}
                >{stat==='title'?'base':base}</p>
                <p
                    style={stylePlus}
                >{plus}</p>
                <p
                    className='flex-all-center'
                    style={styleData}
                >{stat==='title'?'effort':effort}</p>
                <p
                    style={stylePlus}
                >{plus}</p>
                <p
                    className='flex-all-center'
                    style={styleData}
                >{stat==='title'?'scale':scale}</p>
                <p
                    style={stylePlus}
                >=</p>
                <p
                    className='flex-all-center'
                    style={styleTotal}
                >{stat==='title'?'total':base+effort+scale}</p>
            </div>
        )
    }

    return (
        <div
        >{
                pokemon !== undefined ? (
                    showStat(pokemon[`base${stat}`], pokemon[`effort${stat}`], pokemon[`scale${stat}`])
                ) : showStat()
            }

        </div>
    )
}

export default ShowAllStat
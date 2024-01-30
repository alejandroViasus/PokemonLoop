import React, { useState, useEffect } from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'
import Link from 'next/link'
import Image from 'next/image';
import { trainers } from '@/Assets/trainers';
import BottonLogin from '../bottonLogin/BottonLogin';
import SettingMenu from '../SettingMenu/SettingMenu';

function Settings({ globalState }) {

    // console.log(globalState?.user)
    const route = globalState.user._id === "0"
        ? "/api/auth/login" : "/api/auth/logout";

    const title = globalState.user._id === "0"
        ? 'LOGIN' : 'LOGOUT'

    const initialState = {
        showMenu: false,
    };

    const [state, setState] = useState(initialState)

    console.log(globalState)
    return (
        <div className="flex-all-center"
            style={{
                // gap: '10px',
            }}
        >
            {/* 

            <div
                className='flex-all-center overflow-hidden'
                style={{
                    height: '40px',
                    width: '40px',
                    backgroundColor: typesPokemon[globalState.user.theme].colors.secondary,
                    borderRadius: '20px'
                }}
            >
                <button
                className='none-styles-button 
                '
                >

                    <Image
                        src={trainers[globalState.user?.pictureTrainer].battle}
                        width={80}
                        height={80}
                        alt={`image Trainer ${globalState.user?.pictureTrainer}`}
                    />
                </button>
            </div>
            <Link
                className="title"
                href={route}
                style={{
                    color: typesPokemon[globalState.user.theme].colors.text,
                }}
            >
                <h3>{title}</h3>
            </Link> 
            */}

            {/* <BottonLogin  route={route} title={title} image = {`${globalState.user?.pictureTrainer}`} theme = {globalState.user?.theme} format='Nav'/> */}


            <Image
                src={trainers[globalState.user?.pictureTrainer].battle}
                width={80}
                height={80}
                alt={`image Trainer ${globalState.user?.pictureTrainer}`}
            />
            <div
                className='flex-all-center'
                style={{
                    gap: '5px',
                }}
            >
                {globalState.user._id !== 0
                    ? <h3
                        style={{
                            color: typesPokemon[globalState?.user.theme]?.colors.textWhite
                        }}
                    >
                        {globalState.user.gametag}
                    </h3>
                    : ''}


                <button
                    className='flex-all-center none-styles-button'
                    style={{
                        height: '25px',
                        alignItems: 'flex-end',
                        // backgroundColor:'red'

                    }}
                >
                    <div class="🔽"
                        style={{
                            borderBottom: `15px solid ${typesPokemon[globalState?.user.theme]?.colors.textWhite}`
                        }}
                    ></div>
                </button>
            </div>

            <SettingMenu />
        </div>

    )
}

export default Settings
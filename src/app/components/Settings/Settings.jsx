import React, { useState, useEffect } from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'
import Link from 'next/link'
import Image from 'next/image';
import { trainers } from '@/Assets/trainers';

function Settings({ globalState }) {

    // console.log(globalState?.user)
    const route = globalState.user._id === "0"
        ? "/api/auth/login" : "/api/auth/logout";

    const title = globalState.user._id === "0"
        ? 'LOGIN' : 'LOGOUT'







    return (
        <div className="flex-all-center"
            style={{
                gap: '10px',
            }}
        >

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
        </div>

    )
}

export default Settings
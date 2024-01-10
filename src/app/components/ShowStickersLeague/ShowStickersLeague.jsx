import React from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'
import IconStickerLeagueMini from '@/app/Icons/IconStickerLeagueMini'

function ShowStickersLeague({ type, league = 0 }) {
    return (
        <div
            className='flex-all-center'
            style={{
                gap: '15px',
                flexDirection: 'column'
            }}
        >
            <div
                className='flex-all-center'
                style={{
                    gap: '15px',
                }}
            >
                <IconStickerLeagueMini key={`stickersPokeball-1`} type={type} league={0} />
                <IconStickerLeagueMini key={`stickersPokeball-2`} type={type} league={0} />
                <IconStickerLeagueMini key={`stickersPokeball-3`} type={type} league={0} />

            </div>
            <div
                className='flex-all-center'
                style={{
                    gap: '15px',
                }}
            >
                <IconStickerLeagueMini key={`stickersPokeball-4`} type={type} league={0} />
                <IconStickerLeagueMini key={`stickersPokeball-5`} type={type} league={0} />
                <IconStickerLeagueMini key={`stickersPokeball-6`} type={type} league={0} />

            </div>
        </div>
    )
}

export default ShowStickersLeague
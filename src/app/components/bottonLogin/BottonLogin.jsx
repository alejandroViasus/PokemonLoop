import React from 'react'
import Link from 'next/link'
import { typesPokemon } from '@/Assets/typesPokemon'
import Image from 'next/image'
import IconGoogle from '../../../../public/Assets/icons/iconAouth0.svg'
import { trainers } from '@/Assets/trainers'

function BottonLogin({ route = '/api/auth/login', title = 'login Whit Aouth0', image = '', theme = 'None',format='default'}) {
    
    const dimension={
        button:{
            height: format==='default' 
                    ?null
                    :null
        },
        imageTrainer:{
            height: format==='default' 
            ?30
            :theme==='None'?30:80
            ,
        }
    }
    
    return (
        <Link
            className="title flex-all-center text-decoration-none"
            href={route}
            style={{
                
                gap: '10px',
                color:typesPokemon[theme].colors.textWhite,
                backgroundColor:typesPokemon[theme].colors.primary,
                border:format==='default'?`5px solid ${typesPokemon[theme].colors.secondary}`:'0',
                padding:'10px 20px',
                borderRadius:'30px',
                letterSpacing:'5px',
                fontWeight:'200'
            }}
        >

            {/* <div className="image flex-all-center relative"
                style={{
                    height:'40',
                    width:'40',
                    // padding: '10px',
                    borderRadius:'50%',
                    backgroundColor: 'rgba(255,255,255,1)',
                    outline:'1px solid rgba(150,150,150,1)'
                }}
            > */}

            <Image
                // className='absolute'
                src={image === '' ? IconGoogle : trainers[image].battle}
                height={dimension.imageTrainer.height}
                width={dimension.imageTrainer.height}
                alt='icon-ButtonLogin'
            />
            {/* </div > */}

            <h3>
                {title}
            </h3>
        </Link>
    )
}

export default BottonLogin
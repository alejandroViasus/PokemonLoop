import React from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'

function PokeballBg({type='Normal',subColor='background',color=''}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={160}
            height={160}
           
        >
            <path
                d="M783.204 153.799c-20.19.102-40.197 8.242-54.728 22.26-13.304 12.7-22.034 30.112-24.14 48.396-.124 1.488-.485 3.075-.375 4.507h54.103c1.225-5.396 3.886-10.715 8.152-14.4 4.886-4.363 11.362-7.112 17.966-6.779 7.724-.202 15.23 3.714 20.044 9.654 2.71 3.304 4.633 7.238 5.409 11.447 5.446.183 11.011.026 16.503.078 12.55-.022 25.101.055 37.648-.104.13-1.692-.355-3.52-.491-5.253-2.867-23.414-16.815-45.148-36.864-57.562-12.876-8.095-28.008-12.427-43.227-12.244z"
                style={{
                    fill:`${color !== "" ? color : typesPokemon[type].colors[subColor]}`,
                    fillOpacity: 1,
                    strokeWidth: 0.195312,
                }}
                transform="translate(-703.94 -153.793)"
            />
            <path
                d="M783.355 216.92c-9.18-.011-17.277 8.728-16.456 17.897.166 9.722 10.217 17.893 19.778 15.849 6.924-.993 12.682-6.843 13.943-13.652.606-3.945.127-8.089-1.973-11.544-3.015-5.346-9.116-8.912-15.292-8.55z"
                style={{
                    fill:`${color !== "" ? color : typesPokemon[type].colors[subColor]}`,
                    fillOpacity: 1,
                    strokeWidth: 0.276214,
                }}
                transform="translate(-703.94 -153.793)"
            />
            <path
                d="M783.204 313.784c-20.19-.102-40.197-8.242-54.728-22.259-13.304-12.7-22.034-30.113-24.14-48.396-.124-1.49-.485-3.076-.375-4.508h54.103c1.225 5.396 3.886 10.715 8.152 14.401 4.886 4.362 11.362 7.11 17.966 6.778 7.724.202 15.23-3.714 20.044-9.654 2.71-3.304 4.633-7.238 5.409-11.447 5.446-.182 11.011-.026 16.503-.078 12.55.022 25.101-.054 37.648.104.13 1.693-.355 3.52-.491 5.254-2.867 23.413-16.815 45.147-36.864 57.561-12.876 8.095-28.008 12.427-43.227 12.244z"
                style={{
                    fill:`${color !== "" ? color : typesPokemon[type].colors[subColor]}`,
                    fillOpacity: 1,
                    strokeWidth: 0.195312,
                }}
                transform="translate(-703.94 -153.793)"
            />
        </svg>
    )
}

export default PokeballBg
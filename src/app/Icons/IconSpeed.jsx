import React from 'react'
import { typesPokemon } from "@/Assets/typesPokemon";
function IconSpeed({  type='None', subColor = "primary", color = "" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25mm"
            height="25mm"
            viewBox="0 0 25 25"

        >
            <g
                fill={color !== "" ? color : typesPokemon[type].colors[subColor]}
                strokeWidth={0.143}>
                <path d="M2.465 18.263c-.79-2.677-.56-5.438.654-7.845 1.245-2.473 3.338-4.3 6.004-5.24 1.13-.4 1.8-.501 3.327-.506 1.49-.004 2.158.09 3.325.468.63.204 2.327 1.016 2.296 1.098-.012.032-.776.651-1.698 1.377-.922.726-1.807 1.427-1.966 1.557l-.29.237-.515-.25c-1.618-.783-3.922-.913-5.712-.322-1.563.515-3.137 1.716-4.044 3.085-1.176 1.777-1.603 4.083-1.12 6.052.146.591.14.742-.027.742-.066 0-.146-.157-.234-.453zM12.02 17.84c-.813-.136-1.671-.805-2.038-1.589-.162-.345-.181-.462-.181-1.124 0-.7.012-.763.22-1.185.26-.528.812-1.069 1.34-1.31.365-.168 1.057-.3 1.274-.243.084.022.33-.129.75-.458l1.011-.792c.212-.166 1.357-1.072 2.545-2.012 2.67-2.114 2.55-2.03 2.897-2.03.373 0 .658.295.658.68 0 .322-.003.326-1.732 2.544-.767.984-1.87 2.403-2.45 3.153l-1.056 1.363-.03.432c-.095 1.305-1.051 2.366-2.318 2.572a4.355 4.355 0 0 1-.494.062 14.04 14.04 0 0 1-.396-.063zm1.145-1.627c.34-.177.626-.686.626-1.115 0-.329-.324-.862-.633-1.044-.364-.213-.97-.231-1.287-.038-.482.294-.712.848-.6 1.445.047.25.356.656.601.789.35.19.888.174 1.293-.037zM21.636 17.593c-.461-.13-1.427-.393-2.146-.583l-1.307-.345-.048-.763c-.044-.693-.208-1.722-.288-1.802-.035-.035.126-.263.67-.95.19-.239.869-1.114 1.509-1.944 1.448-1.879 1.317-1.735 1.439-1.572.21.28.773 1.506.998 2.176.31.919.442 1.59.508 2.58.063.944.04 1.507-.098 2.382-.132.843-.188 1.037-.303 1.049-.053.005-.473-.097-.934-.228z" />
            </g>
        </svg>
    )
}

export default IconSpeed
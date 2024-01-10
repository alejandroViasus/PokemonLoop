import React from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'

function IconLeague({ type, subColor = 'primary', color = '' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={64}
            height={64}
            fill="none"

        >
            <g clipPath="url(#a)">
                <path
                    fill={color !== ''
                        ? color
                        : typesPokemon[type].colors[subColor]
                    }
                    d="M21.745 58.341c-.502-.066-.684-.164-1.012-.543-.28-.325-.39-.734-.316-1.19.092-.572.424-.819 2.932-2.172 4.036-2.178 5.614-3.445 6.448-5.176.27-.56.388-1.806.354-3.725l-.02-1.325-1.11-.392c-1.662-.587-2.335-.964-3.548-1.982-.793-.667-1.687-1.147-3.15-1.691-4.271-1.59-6.685-2.982-9.309-5.367-2.902-2.64-5.037-5.999-6.348-9.994-1.057-3.22-1.534-6.13-1.618-9.87L5 12.764h3.649c3.508-.001 5.392-.042 6.134-.134l.35-.043v-.363c0-.2-.077-1.277-.164-2.394-.22-2.713-.403-5.69-.357-5.767.021-.034 7.77-.063 17.22-.063h17.183l-.053.73c-.188 2.48-.302 4.183-.377 5.613-.049.895-.102 1.806-.123 2.024l-.037.397h10.126l-.053 2.19c-.078 3.207-.288 4.99-.88 7.457-1.658 6.91-5.652 12.28-11.625 15.63-1.15.645-2.374 1.2-3.986 1.806-1.888.71-2.772 1.172-4.15 2.17-1.566 1.135-3.053 1.875-4.207 2.095l-.293.056.038 2.055c.037 1.784.06 2.126.215 2.602.563 1.788 2.553 3.468 6.554 5.535 2.4 1.24 2.91 1.676 2.972 2.542.033.418.017.515-.16.714-.45.532-1.715.606-12.109.718-8.272.088-8.496.09-9.122.007Zm-1.277-23.398c-1.012-2.223-1.701-4.146-2.466-6.885-.838-3-1.37-5.458-2.006-9.284l-.424-2.546-1.433-.052c-2.288-.084-5.871-.095-5.87-.018.022.894.421 3.586.748 5.025 1.518 6.678 5.121 11.47 10.88 14.47.757.396.95.467.971.36.017-.073-.165-.554-.4-1.07Zm23.347.605c2.09-1.066 4.15-2.683 5.931-4.654 2.387-2.643 3.82-5.582 4.779-9.798.374-1.647.802-4.684.696-4.94-.038-.081-1.996-.08-5.171 0l-2.1.054-.229 1.428c-1.19 7.46-2.643 12.906-4.539 17.013-.332.722-.606 1.35-.606 1.396 0 .11.2.03 1.239-.5ZM33.798 33.06c4.013-1.092 6.628-4.912 6.15-8.983-.081-.683-.35-1.838-.455-1.953-.032-.027-3.03 1.316-4.198 1.878l-.584.282-.061.72c-.032.396-.117.874-.19 1.063a2.935 2.935 0 0 1-2.974 1.865c-.7-.055-1.225-.294-1.756-.8l-.428-.409-2.363 1.048c-1.3.576-2.363 1.091-2.363 1.145 0 .053.18.357.4.675 1.295 1.873 3.036 3.081 5.106 3.546.947.212 2.794.174 3.716-.077Zm-9.119-5.362c.24-.096 1.273-.55 2.298-1.012l1.862-.838v-.72c0-.813.127-1.267.523-1.848.355-.52.727-.821 1.319-1.064.433-.178.6-.202 1.177-.171.834.044 1.46.33 2.035.928l.394.412 2.379-1.071c1.308-.59 2.378-1.111 2.378-1.16 0-.256-.704-1.255-1.356-1.923-1.163-1.192-2.292-1.864-3.89-2.315-.53-.15-.85-.178-2.027-.177-1.282.001-1.458.02-2.137.228-1.498.46-2.566 1.098-3.595 2.15-.977 1-1.579 2.018-2.017 3.413-.434 1.378-.514 2.65-.257 4.046.122.661.32 1.294.403 1.294.049 0 .273-.077.511-.172Zm7.962-1.367c1.187-.798.74-2.737-.678-2.935-1.46-.203-2.364 1.6-1.36 2.71.495.547 1.409.648 2.038.226Z"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill={color !== ''
                        ? color
                        : typesPokemon[type].colors[subColor]
                    } d="M0 0h64v64H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default IconLeague
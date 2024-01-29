import React from 'react';

import { generate } from '@/Assets/funcions'
import { typesPokemon } from '@/Assets/typesPokemon'
import { colors } from '@/Assets/colors'

 
function HealdBar({ pokemon, theme='None', trainer = 'user' ,position='left' }) {

  const background = typesPokemon[pokemon?.type1]?.colors.background;
  const colorHeald = typesPokemon[pokemon?.type1]?.colors.quaternary;
  const stroke = typesPokemon[theme]?.colors.textDark;

  const scaleValue = position === 'left' ? '-1' : '1';

  const gradientStyles = {
    transform: `scale(${scaleValue}, 1)`,
  };

  // const color1 = 'rgba(22,22,22,1)';
  // const color2 = 'rgba(0,255,0,1)';

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
    width={586}
    height={96}
     fill="none" style={gradientStyles}>
      {/* Define el gradiente lineal con inclinación */}
      <defs>
        <linearGradient id={`${pokemon?.name}-gradient`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset={`${100 - pokemon?.heald}%`} style={{ stopColor: background, stopOpacity: 1 }} />
          <stop offset={`${100 - pokemon?.heald-3}%`} style={{ stopColor: colorHeald, stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Utiliza el gradiente inclinado en el fill */}
      <path
        fill={`url(#${pokemon?.name}-gradient)`}
        stroke={stroke}
        strokeWidth={5}
        d="M583 93V3H3v53.571h251.752L344.949 93H583Z"
      />
    </svg>
  );
}

export default HealdBar;




// import React from 'react'

// import { generate } from '@/Assets/funcions'
// import { typesPokemon } from '@/Assets/typesPokemon'
// import { colors } from '@/Assets/colors'


// function HealdBar({ pokemon, theme, trainer = 'user' }) {

//     const runnerDirection = trainer === 'user' ? 'right' : 'left'

//     return (
//         <div
//             className='overflow-hidden flex-all-center relative'
//             style={{
//                 height: '40px',
//                 width: '100%',
//                 backgroundColor: typesPokemon[theme].colors.primary,
//                 borderRadius: '8px 20px 20px 8px',
//             }}
//         >

//             <div
//                 className='absolute flex-all-center'
//                 style={{
//                     width: '100%',
//                     height: '100%',
//                     backgroundColor: colors.Battle.selectorPokemon.background.red,
//                     [runnerDirection]: `${100 - pokemon?.heald}%`,
//                     borderRadius: '0px 20px 20px 0px',
//                     border:`2px solid black`
//                 }}
//             >
//                 {/* heald {pokemon?.heald} */}
//             </div>
//         </div>
//     )
// }

// export default HealdBar

{/* {(generate.getStat(pokemonUser,'Heald')*pokemonUser.heald)/100} */ }

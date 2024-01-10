import { typesPokemon } from '@/Assets/typesPokemon'
import React from 'react'
import Image from 'next/image'
import { imagesPokemon } from '@/Assets/funcions'

//components
import IconPokeballsL from '@/app/Icons/IconPokeballsL'
import Pokeball from '@/app/Icons/Pokeball'

function Card({ pokemon, empty = false, selected = false }) {
  const type = empty === false ? pokemon.type1 : 'None'
  const sizeImagePokemon = 120
  const sizeCard = {
    height: 350,
    width: 180,
  }

  // console.log('pp', selected)
  return (
    <div
      className='relative flex-all-center  
      overflow-hidden
      '
      style={
        {

          backgroundColor: typesPokemon[type].colors.background,
          height: `${sizeCard.height}px`,
          width: `${sizeCard.width}px`,
          border: `2px solid ${selected ? 'rgba(22,22,22,0.5)' : 'rgba(22,22,22,0.3)'}`,
          borderRadius: '4px'

        }
      }
    >
      <div className="absolute percentage-100-width percentage-100-height"
        style={{
          backgroundColor: `${selected ? 'rgba(22,22,22,0.1)' : 'rgba(22,22,22,0.2)'}`,
        }}
      >
      </div>



      <div className="tail absolute"
        style={{
          width: '28%',
          height: '53%',
          bottom: '0px',
          backgroundColor: typesPokemon[type].colors.primary,
          left: '9%'
        }}
      >
      </div>
      <div className="tail absolute"
        style={{
          width: '28%',
          height: '53%',
          bottom: '0px',
          backgroundColor: typesPokemon[type].colors.primary,
          right: '8.1%'
        }}
      >
      </div>
      <div className="tail absolute"
        style={{
          width: '40%',
          height: '45%',
          bottom: '0px',
          backgroundColor: 'red',
          backgroundColor: typesPokemon[type].colors.primary,
          right: '30%',

        }}
      >
      </div>


      <div
        className='absolute'
        style={{
          scale: '3',
          transform: 'rotate(16deg)',
          left: '30%',
          top: '35%'
        }}
      >
        <IconPokeballsL type={empty ? 'None' : pokemon.type1}
          subColor='secondary'
        />
      </div>




      <div
        className='absolute flex-all-center'
        style={{

        }}
      >{empty === false ? `${pokemon.name.slice(0, 17)}` : ''}</div>

      <div
        className='absolute'
        style={{
          top:'15%'
        }}
      >

        <Image
          src={imagesPokemon.official(pokemon.noPokedex, pokemon.shiny)}
          width={sizeImagePokemon}
          height={sizeImagePokemon}
          alt={`pokemon ${pokemon.name}`}
        />
      </div>

    </div>
  )
}

export default Card


// import React from 'react'
// import { typesPokemon } from '@/Assets/typesPokemon'

// import CardButtonTeam from '../CardButtonTeam/CardButtonTeam'
// import { imagesPokemon } from '@/Assets/funcions'
// import Image from 'next/image'



// function Card({ pokemon=null }) {


//   const sizeImagePokemon = 64
//   const sizeCard = {
//     height: 280,
//     width: 140,
//   }

//   console.log(pokemon)
//   return (
//     <div
//       className='flex-all-center overflow-hidden '
//       style={{
//         height: `${sizeCard.height}px`,
//         width: `${sizeCard.width}px`,
//         opacity: pokemon ? '1' : '0.3',
//       }}
//     >
//       {
//         pokemon ?
//           <div
//             style={{
//               height: `100%`,
//               width: `100%`,
//               backgroundColor: pokemon!==null ? typesPokemon[pokemon?.type1]?.colors.background : typesPokemon.None.colors.background,

//             }}
//           >
//             <div
//               style={{
//                 width: '100%',
//                 height: '30px',
//                 backgroundColor: 'red'
//               }}
//             >
//             </div>
//           </div>

//           :
//           <div
//             style={{
//               height: `100%`,
//               width: `100%`,
//               backgroundColor: typesPokemon.None.colors.background,

//             }}
//           ></div>
//       }
//     </div>
//   )
// }

// export default Card

{
  /*

  <Image
      src={imagesPokemon.official(pokemon.noPokedex, pokemon.shiny)}
      width={sizeImagePokemon}
      height={sizeImagePokemon}
      alt={`pokemon ${pokemon.name}`}
    />
    pokemon ? (
      <div>
        <CardButtonTeam pokemon={pokemon} />
        <CardButtonTeam pokemon={pokemon} porperty={'favorite'} />
        <h3>{pokemon.name}</h3>
      </div>
    )
      : null
*/
}
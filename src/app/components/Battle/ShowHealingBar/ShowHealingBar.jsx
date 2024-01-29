import React from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'
import { generate, pokemonGet } from '@/Assets/funcions'
import Image from 'next/image'


import { imagesPokemon } from '@/Assets/funcions'
import HealdBar from '../HealdBar/HealdBar'
import ShowType from '../../ShowType/ShowType'
import BorderHeald from '../BorderHeald/BorderHeald'


function ShowHealingBar({ widthProp=40, battleState, pokemon, theme = 'None', format = 'gif', position = 'left' }) {

    const scaleValue = position === 'left' ? '1' : '-1';
    const scaleLetter = position === 'left' ? '1' : '-1';

    let sizeImagePokemon = 96;
    const colorStroke= typesPokemon[theme]?.colors.textDark;
    const colorBackGround=typesPokemon[pokemon?.type1]?.colors.secondary;

    const borderRadiusHeald=25
    const borderRadiusImage=15
    const widthHealdBar=80

    const level = (
        <h3
        style={{
            padding:'2px 15px',
            backgroundColor:typesPokemon[theme].colors.primary,
            color:typesPokemon[theme].colors.textWhite,
            borderRadius:'15px',
            marginBottom:'3px',
        }}
        >lvl. {pokemonGet.calcularNivel(pokemon)}</h3>
      );

    return(
        <div
        className=' retaltive flex-all-center'
        style={{
            transform: `scale(${scaleValue}, 1)`,
            width:`${ widthProp}%`,
            height:'100%',
            backgroundColor: typesPokemon[theme]?.colors.primary,
            alignItems:'flex-end'
            
        }}
        >
            {/* //! BackGround .................................... */}
            <div className="absolute" 
            style={{
                bottom:'-3%'
            }}
            >
                <BorderHeald theme={theme}/>
            </div>

            {/* //! BarHeal .................................... */}
            <div className="relative percentage-100-width percentage-100-height"
            style={{
                width:'100%',
                height:'130px',
                bottom:'0%',
                // backgroundColor:'rgba(22,22,22,0.5)',
            }}
            >
                {/* //!------------ NamePokemon */}
               <div className='absolute font-Kodchasan flex-all-center'
               style={{
                bottom:'0%',
                transform: `scale(${scaleLetter}, 1)`,
                alignItems:'flex-end',
                gap:'15px'
               }}
               >

                {position==='left'?null:level}

                <h1
                className='font-name-in-battle'
                style={{
                    color: typesPokemon[theme].colors.primary,
                    padding:'0px 15px'
                }}
                >
                    {pokemon?.name}
                </h1>
                    {position==='left'?level:null}
               </div>

               {/* //!---------------------- Heald && Image*/}

               <div
               className='absolute flex-all-center'
               style={{
                left:'3%',
                top:'5%',
                width:'700px',
                height:'65px',
                // backgroundColor:"red"
               }}
               >

                <div
                className='overflow-hidden flex-all-center'
                style={{
                    width:`${100-widthHealdBar*2}%`,
                    height:'100%',
                    backgroundColor:typesPokemon[pokemon?.type1]?.colors.secondary,
                    borderRadius:`${borderRadiusImage}px 0px 0px ${borderRadiusImage}px`,
                    outline:`5px solid ${typesPokemon[pokemon?.type1]?.colors.tertiary}`
                }}
                >
                    <div className="flex-all-center"
                    style={{
                        height:'65px',
                        width:'65px',
                    }}
                    >

                    <Image 
                    src={imagesPokemon[format](pokemon?.noPokedex,pokemon?.shiny)} 
                    width={65} 
                    height={65} 
                    layout="responsive"
                    objectFit="cover"
                    alt= {`image pokemon ${pokemon?.name}`} />
                    </div>
                </div>
                <div
                className='overflow-hidden relative flex-all-center'
                style={{
                    width:`${widthHealdBar}%`,
                    height:'100%',
                    backgroundColor:typesPokemon[pokemon?.type1]?.colors.secondary,
                    borderRadius:`0px ${borderRadiusHeald}px ${borderRadiusHeald}px 0px`,
                    outline:`5px solid ${typesPokemon[pokemon?.type1]?.colors.tertiary}`
                }}
                >

                    <div
                    className='percentage-100-width percentage-100-height absolute'
                    style={{
                        borderRadius:`0px ${borderRadiusHeald}px ${borderRadiusHeald}px 0px`,
                        backgroundColor:typesPokemon[pokemon?.type1]?.colors.primary,
                        right:`${100-pokemon?.heald}%`
                    }}
                    ></div>

                    <h1 className="absolute"
                    style={{
                        transform: `scale(${scaleLetter}, 1)`,

                        color:typesPokemon[pokemon?.type1]?.colors.textWhite
                    }}
                    >
                        {(generate.getStat(pokemon,'Heald')*pokemon?.heald/100).toFixed(1)}
                    </h1>
                </div>
               </div>


            </div>


        </div>
    )
    }
export default ShowHealingBar

// import React from 'react'
// import { typesPokemon } from '@/Assets/typesPokemon'
// import { pokemonGet } from '@/Assets/funcions'
// import { imagesPokemon } from '@/Assets/funcions'
// import HealdBar from '../HealdBar/HealdBar'
// import Image from 'next/image'
// import ShowType from '../../ShowType/ShowType'


// function ShowHealingBar({ battleState, pokemon, theme = 'None', format = 'gif', position = 'left' }) {
//     format = 'gif'
//     let sizeImagePokemon = 96;
//     const colorStroke= typesPokemon[theme]?.colors.textDark;
//     const colorBackGround=typesPokemon[pokemon?.type1]?.colors.secondary;

//     const scaleValue = position === 'left' ? '1' : '-1';
//     const scaleFont = position === 'left' ? '1' : '-1';
//     const scaleIconType = position === 'left' ? '1' : '-1';


//     const gradientStyles = {
//         transform: `scale(${scaleValue}, 1)`,
//         width: '34.5%',
//         height: '100%',
//         // backgroundColor: 'green',
//         color:colorStroke
//     };
//     const fontStyles = {
//         transform: `scale(${scaleFont}, 1)`, zIndex: "2",
//         height:'100%',
//         width:'100%',
//         bottom: '0%',
//         left: '2%',
//         // backgroundColor:'yellow',
//         alignItems: 'flex-end',

//     };


//     const pos=position === 'left'?'left':'right'
//     const styleLevel = {
//         // backgroundColor:'orange',
//         padding: '2px 5px',
//         borderRadius: '15px',
//         [pos]:'0%',
        
//     }

//     const styleTitle={
//         bottom:'15%',
//         [pos]:'0%',
//     }

//     return (
//         <div

//             style={gradientStyles}
//             className="user flex-all-center relative"

//         >
//             <div className="name-pokemon-selected absolute flex-all-center"
//                 style={fontStyles}
//             >



//                 {position !== 'left'
//                     ? (<h3
//                         className='absolute'
//                         style={styleLevel}
//                     >
//                         lvl.{pokemonGet.calcularNivel(pokemon)}
//                     </h3>) : null
//                 }
//                 <h1
//                 className='absolute'
//                 style={styleTitle}
//                 >
//                     {pokemon?.name}
//                 </h1>

//                 {position === 'left'
//                     ? (<h3
//                         className='absolute'
//                         style={styleLevel}
//                     >
//                         lvl.{pokemonGet.calcularNivel(pokemon)}
//                     </h3>) : null
//                 }

//             </div>

//             <div className="heald-bar flex-all-center absolute "
//                 style={{
//                     width: '88%',
//                     right: '-1.5%',
//                     top: '0%',
//                     // backgroundColor: 'red'
//                 }}
//             >
//                 <HealdBar pokemon={pokemon} theme={theme} />
//             </div>

//             <div
//                 className='flex-all-center absolute overflow-hidden'
//                 style={{
//                     height: `${sizeImagePokemon}px`,
//                     width: `${4 * sizeImagePokemon / 4}px`,
//                     backgroundColor: colorBackGround,
//                     left: `0%`,
//                     top: '0%',
//                     borderRadius: '15px 0px 0px 15px',
//                     border: `6px solid ${colorStroke}`
//                 }}
//             >
//                 <Image
//                     src={imagesPokemon[format](pokemon?.noPokedex, pokemon?.shiny)}
//                     width={sizeImagePokemon * 1}
//                     height={sizeImagePokemon * 1}
//                     layout="responsive"
//                     objectFit="cover"
//                     alt={`pokemon ${pokemon?.name}`}
//                 />
//             </div>

//             <div className="absolute overflow-hidden"
//             style={{
//                 opacity:'0.8',
//                 top:'5px',
//                 left:'15%',
//                 height:'85px',
//                 transform: `scale(${scaleIconType}, 1)`, zIndex: "2",
//                 // backgroundColor:'red',
//                 width:'220px'
                
//             }}
//             >
//             <ShowType
//               type1={pokemon?.type1}
//               type2={pokemon?.type2}
//               fill={pokemon !== undefined ? typesPokemon[pokemon.type1].colors.primary : typesPokemon.Normal.colors.secondary}
//               scale='1'
//             ></ShowType>
//             </div>
//         </div>
//     )
// }

// export default ShowHealingBar
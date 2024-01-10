
"use client";

import React, { useState, useEffect } from "react";
import { valuesPokemon } from "@/Assets/funcions";

//? components
import Card from "../Card/Card";
import CardEmpty from "../CardEmpty/CardEmpty";
import CardsSelector from "../CardsSelector/CardsSelector";

function CardsRender({ pokemons, changeselect,pokemonSelected }) {

  const [showPokemons, setShowPokemons] = useState([]);

  const [index, setIndex] = useState(
         valuesPokemon.componentRenderCards.initialIndex
       );

  useEffect(() => {
        //console.log('index',index)
        const showPokemon =[];
        const sizeRender = valuesPokemon.componentRenderCards.sizeRender;
        let listPokemon = pokemons;

        
    
        for (let i = 0; i < sizeRender; i++) {
          let iterator = (-sizeRender + i) + index * sizeRender;
          const pokemon = pokemons[iterator];
          console.log(pokemon?._id,'DDD');
    
    
        
    
          if (pokemon) {


            // console.log(pokemonSelected._id, pokemon._id,pokemonSelected._id===pokemon._id )
            showPokemon.push(
              <buttom
              className='none-styles-button '
              key={`pokemonShow${pokemon?._id}`} onClick={() => changeselect(pokemon)}>
              
                <Card pokemon={pokemon} empty={false} selected={pokemon._id===pokemonSelected?._id?true:false} />
              
              </buttom>
            );
          } else {
            showPokemon.push(
              <button
              className='none-styles-button'
                key={`${Math.random() * i}cardEmpty${Math.random() * i}`}
                onClick={() => { }}
              >
                
                 {/* <Card pokemon={pokemon} empty={true} /> */}
               
              </button>
            );
          }
        }
    
        setShowPokemons(showPokemon);
      }, [pokemons, index]);
    

      const handlerSelector = (value) => {
            if (
              0 < value &&
              value <=
              Math.ceil(
                pokemons.length / valuesPokemon.componentRenderCards.sizeRender
              )
            )
              return setIndex(value);
          };

  return (
    <div
    className="flex-all-center"
    style={{
      //backgroundColor:'red',
      height:'100%',
      width:'60%',
      flexDirection:'column'
    }}
    >
      <div 
      className="flex-all-center"
      style={{
        width:'100%',
        height:'90%',
        //backgroundColor:'green',
        flexWrap: 'wrap',
        columnGap: '32px',
        rowGap: '32px',
        //padding: '86px',
        justifyContent:'left'
      }}
      >
      {showPokemons}
      </div>
      <div>
      <CardsSelector
           index={index}
           totalCards={pokemons.length}
           handlerSelector={handlerSelector}
         />
      </div>
      </div>
  )
}

export default CardsRender





// "use client";

// import React, { useState, useEffect } from "react";
// import { valuesPokemon } from "@/Assets/funcions";

// //? components
// import Card from "../Card/Card";
// import CardEmpty from "../CardEmpty/CardEmpty";
// import CardsSelector from "../CardsSelector/CardsSelector";

// function CardsRender({ pokemons, changeselect }) {
//   const [index, setIndex] = useState(
//     valuesPokemon.componentRenderCards.initialIndex
//   );
//   const [showPokemons, setShowPokemons] = useState([]);



//   useEffect(() => {
//     //console.log('index',index)
//     const showPokemon = pokemons;
//     const sizeRender = valuesPokemon.componentRenderCards.sizeRender;
//     let listPokemon = pokemons;

//     for (let i = 0; i < sizeRender; i++) {
//       let iterator = (-sizeRender + i) + index * sizeRender;
//       const pokemon = pokemons[iterator];
//       console.log(pokemon?._id,'DDD');


//        showPokemon.push(<Card key={`pokemonShowCard${i}`} pokemon={pokemon!==undefined?pokemon:null} />)

//       // if (pokemon) {
//       //   showPokemon.push(
//       //     <buttom key={pokemon?._id} onClick={() => changeselect(pokemon)}>
//       //       -------------
//       //       <Card pokemon={pokemon}  />
//       //       ----------
//       //     </buttom>
//       //   );
//       // } else {
//       //   showPokemon.push(
//       //     <button
//       //       key={`${Math.random() * i}cardEmpty${Math.random() * i}`}
//       //       onClick={() => { }}
//       //     >
//       //       <CardEmpty />;
//       //     </button>
//       //   );
//       // }
//     }

//     setShowPokemons(showPokemon);
//   }, [pokemons, index]);

//   const handlerSelector = (value) => {
//     if (
//       0 < value &&
//       value <=
//       Math.ceil(
//         pokemons.length / valuesPokemon.componentRenderCards.sizeRender
//       )
//     )
//       return setIndex(value);
//   };

//   console.log('showPokemons',showPokemons)
//   return (
//     <div
//       className="flex-all-center"
//       style={{
//         width: '70%',
//         height: '90%',
//         backgroundColor: "yellow",
//         flexDirection: 'column',
//         justifyContent: 'flex-start'
//       }}
//     >
//       <div
//         style={{
//           width: '100%',
//           height: '5%',
//           backgroundColor: 'green'
//         }}
//       >filters</div>
//       <div
//         className="flex-all-center"
//         style={{
//           width: '100%',
//           height: 'auto',
//           backgroundColor: 'purple',
//           padding:'32px',
//           gap: '32px',
//           rowGap: '32px', 
//           flexWrap: 'wrap',
         
//         }}
//       >
//         {showPokemons}</div>
//       <div
//         className="flex-all-center"
//         style={{
//           width: '100%',
//           height: '5%',
//           backgroundColor: 'green'
//         }}
//       >
//         <CardsSelector
//           index={index}
//           totalCards={pokemons.length}
//           handlerSelector={handlerSelector}
//         />
//       </div>
//     </div>
//   );
// }

// export default CardsRender;



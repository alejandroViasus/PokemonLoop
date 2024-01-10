import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { typesPokemon } from "@/Assets/typesPokemon";
import Link from "next/link";

import IconBox from "@/app/Icons/IconBox";
import IconCoins from "@/app/Icons/IconCoins";
import IconExpedition from "@/app/Icons/IconExpedition";
import IconLeague from "@/app/Icons/IconLeague";
import IconPokeballsL from "@/app/Icons/IconPokeballsL";

const Icon={
  pokeballs:IconPokeballsL,
  coins:IconCoins,
  box:IconBox,
  experience:IconExpedition,
  league:IconLeague,
}

function ItemsDetail({ element ,idTrainer}) {

  // console.log(idTrainer)
  const globalState = useSelector((state) => state.valueState);
 
 
  const links={
    pokeballs:{
      url:`/store?id=${idTrainer}`,
      disabled:false,
      opacity:'0.5',
    },
    coins:{
      url:`/store?id=${idTrainer}`,
      disabled:false,
      opacity:'0.5',
    },
    box:{
      url:`/box?id=${idTrainer}`,
      disabled:false,
      opacity:'1',
    },
    experience:{
      url:`/battle?id=${idTrainer}`,
      disabled:false,
      opacity:'1',
    },
    league:{
      url:`/league?id=${idTrainer}`,
      disabled:false,
      opacity:'0.5',
    },
  }
 
  const styleContentItem = {
    //backgroundColor: "blue",
    height: "auto",
    justifyContent: "flex-start",
    gap:'20px',
    opacity:links[element].opacity
  };
  
  const flexData={
    display:'flex',
    flexDirection:'column',
  }
  const styleData={
   //color:'red',
   
  }

  const IconComponent = Icon[element];
  const classHover=links[element].opacity==='1'?'hover-bg-black-hard':'hover-bg-black-lite'

  return (
    <Link
    
    href={links[element].opacity==='1'?links[element].url : '/'}
      className={`percentage-100-width flex-all-center none-styles-button ${classHover} border-radius-mid `}
      style={styleContentItem}
    >

        <div
        className="flex-all-center"
        style={{
            height:'64px',
            width:'64px',
            //backgroundColor:`${typesPokemon[globalState.user.theme].colors.primary}`,
            
          }}
          >
             {IconComponent && <IconComponent  type={globalState.user.theme}/>}
          </div>
      <div className=""
      style={flexData}
      >
        <h2
         className=""
         style={{
           color:`${ typesPokemon[globalState.user.theme].colors.textWhite}`,
           
         }}
        >{element.toUpperCase()}</h2>
        <h4
        className="font-button-in"
        style={styleData}
        >{globalState.user[element]}</h4>
      </div>
    </Link>
  );
}

export default ItemsDetail;

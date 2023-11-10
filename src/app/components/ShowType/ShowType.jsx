import React, { useState, useEffect } from "react";
import Image from "next/image";
import { typesPokemon } from "@/Assets/typesPokemon";

import IconNone from "@/app/components/IconType/IconNone";
import IconBug from "@/app/components/IconType/IconBug";
import IconDark from "@/app/components/IconType/IconDark";
import IconDragon from "@/app/components/IconType/IconDragon";
import IconElectric from "@/app/components/IconType/IconElectric";
import IconFairy from "@/app/components/IconType/IconFairy";
import IconFighting from "@/app/components/IconType/IconFighting";
import IconFire from "@/app/components/IconType/IconFire";
import IconFlying from "@/app/components/IconType/IconFlying";
import IconGhost from "@/app/components/IconType/IconGhost";
import IconGrass from "@/app/components/IconType/IconGrass";
import IconGround from "@/app/components/IconType/IconGround";
import IconIce from "@/app/components/IconType/IconIce";
import IconNormal from "@/app/components/IconType/IconNormal";
import IconPoison from "@/app/components/IconType/IconPoison";
import IconPsychic from "@/app/components/IconType/IconPsychic";
import IconRock from "@/app/components/IconType/IconRock";
import IconSteel from "@/app/components/IconType/IconSteel";
import IconWater from "@/app/components/IconType/IconWater";

function ShowType({ type1, type2,fill=`rgba(100,100,100,1)`}) {
  const iconC = {
    IconNone,
    IconBug,
    IconDark,
    IconDragon,
    IconElectric,
    IconFairy,
    IconFighting,
    IconFire,
    IconFlying,
    IconGhost,
    IconGrass,
    IconGround,
    IconIce,
    IconNormal,
    IconPoison,
    IconPsychic,
    IconRock,
    IconSteel,
    IconWater,
  };

  const [state, setState] = useState([]);

  useEffect(() => {
    if (type1 !== type2) {
      //console.log(type1, type2);
      setState([type1, type2]);
    } else {
      //console.log(type1);
      setState([type1]);
    }
  }, [type1, type2]);

  return (
    <div>
     
      {state.map((type,index) => {
        if (type !== undefined) {
           const Component = iconC[`Icon${type}`];
       
          return (
            <div key={`type${type}${Math.random()*index}`} >
              <Component  fill={fill}/>;
            </div>
          );
        }
      })}
      
    </div>
  );
}

export default ShowType;

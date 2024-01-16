import React, { useState, useEffect } from "react";
import Image from "next/image";
import { typesPokemon } from "@/Assets/typesPokemon";

import IconNone from "@/app/Icons/None";
import IconBug from "@/app/Icons/Bug";
import IconDark from "@/app/Icons/Dark";
import IconDragon from "@/app/Icons/Dragon";
import IconElectric from "@/app/Icons/Electric";
import IconFairy from "@/app/Icons/Fairy";
import IconFighting from "@/app/Icons/Fighting";
import IconFire from "@/app/Icons/Fire";
import IconFlying from "@/app/Icons/Flying";
import IconGhost from "@/app/Icons/Ghost";
import IconGrass from "@/app/Icons/Grass";
import IconGround from "@/app/Icons/Ground";
import IconIce from "@/app/Icons/Ice";
import IconNormal from "@/app/Icons/Normal";
import IconPoison from "@/app/Icons/Poison";
import IconPsychic from "@/app/Icons/Psychic";
import IconRock from "@/app/Icons/Rock";
import IconSteel from "@/app/Icons/Steel";
import IconWater from "@/app/Icons/Water";

function ShowType({ type1, type2, fill = `rgba(100,100,100,1)` ,scale='1'}) {
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
    <div 
    className="flex-all-center percentage-100-width"
    style={{ display: "flex" ,gap:'30px',scale:scale, }}>
      {state.reverse().map((type, index) => {
        if (type !== undefined) {
          const Component = iconC[`Icon${type}`];

          return (
            <div
              key={`type${type}${Math.random() * index}`}
              style={{width: `auto`, height: `auto` ,}}
            >
              <Component color={fill} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default ShowType;

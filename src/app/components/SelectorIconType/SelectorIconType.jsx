import Bug from "@/app/Icons/Bug";
import Dark from "@/app/Icons/Dark";
import Dragon from "@/app/Icons/Dragon";
import Electric from "@/app/Icons/Electric";
import Fairy from "@/app/Icons/Fairy";
import Fighting from "@/app/Icons/Fighting";
import Fire from "@/app/Icons/Fire";
import Flying from "@/app/Icons/Flying";
import Grass from "@/app/Icons/Grass";
import Ghost from "@/app/Icons/Ghost";
import Ground from "@/app/Icons/Ground";
import Ice from "@/app/Icons/Ice";
import None from "@/app/Icons/None";
import Normal from "@/app/Icons/Normal";
import Poison from "@/app/Icons/Poison";
import Pokeball from "@/app/Icons/Pokeball";
import Psychic from "@/app/Icons/Psychic";
import Rock from "@/app/Icons/Rock";
import Steel from "@/app/Icons/Steel";
import Water from "@/app/Icons/Water";
import BackGroundPokeball from "@/app/Icons/BackGroundPokeball";

import React from "react";

const TypePokemon = {
  Bug,
  Dark,
  Dragon,
  Electric,
  Fairy,
  Fighting,
  Fire,
  Flying,
  Grass,
  Ghost,
  Ground,
  Ice,
  None,
  Normal,
  Poison,
  Pokeball,
  Psychic,
  Rock,
  Steel,
  Water,
};

function SelectorIconType({ type,subColor="primary", color="" }) {
  const Icon = TypePokemon[type];

  return (
    <div className="content-icon-selectorType ">
      {Icon && <Icon type={type} subColor={subColor} color={color} />}
    </div>
  );
}

export default SelectorIconType;

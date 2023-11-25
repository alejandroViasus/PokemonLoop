import iconNone from "../../public/Assets/icons/type-none.svg";
import iconBug from "../../public/Assets/icons/type-bug.svg";
import iconDark from "../../public/Assets/icons/type-dark.svg";
import iconDragon from "../../public/Assets/icons/type-dragon.svg";
import iconElectric from "../../public/Assets/icons/type-electric.svg";
import iconFairy from "../../public/Assets/icons/type-fairy.svg";
import iconFighting from "../../public/Assets/icons/type-fighting.svg";
import iconFire from "../../public/Assets/icons/type-fire.svg";
import iconFlying from "../../public/Assets/icons/type-flying.svg";
import iconGhost from "../../public/Assets/icons/type-ghost.svg";
import iconGrass from "../../public/Assets/icons/type-grass.svg";
import iconGround from "../../public/Assets/icons/type-ground.svg";
import iconIce from "../../public/Assets/icons/type-ice.svg";
import iconNormal from "../../public/Assets/icons/type-normal.svg";
import iconPoison from "../../public/Assets/icons/type-poison.svg";
import iconPsychic from "../../public/Assets/icons/type-psychic.svg";
import iconRock from "../../public/Assets/icons/type-rock.svg";
import iconSteel from "../../public/Assets/icons/type-steel.svg";
import iconWater from "../../public/Assets/icons/type-water.svg";



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
export const typesPokemon = {
  None:{
    icon:iconNone,
    effectiveness: {
      Normal: "0",
      Fire: "0",
      Water: "0",
      Electric: "0",
      Grass: "0",
      Ice: "0",
      Fighting: "0",
      Poison: "0",
      Ground: "0",
      Flying: "0",
      Psychic: "0",
      Bug: "0",
      Rock: "0",
      Ghost: "0",
      Dragon: "0",
      Dark: "0",
      Steel: "0",
      Fairy: "0",
    },
  },
  Bug: {
    icon: iconBug,
    effectiveness: {
      Normal: "1",
      Fire: "0.5",
      Water: "1",
      Electric: "1",
      Grass: "2",
      Ice: "1",
      Fighting: "0.5",
      Poison: "0.5",
      Ground: "1",
      Flying: "0.5",
      Psychic: "2",
      Bug: "1",
      Rock: "1",
      Ghost: "0.5",
      Dragon: "1",
      Dark: "2",
      Steel: "0.5",
      Fairy: "0.5",
    },
  },
  Dark: {
    icon: iconDark,
    effectiveness: {
      Normal: "1",
      Fire: "1",
      Water: "1",
      Electric: "1",
      Grass: "1",
      Ice: "1",
      Fighting: "0.5",
      Poison: "1",
      Ground: "1",
      Flying: "1",
      Psychic: "2",
      Bug: "1",
      Rock: "1",
      Ghost: "2",
      Dragon: "1",
      Dark: "0.5",
      Steel: "1",
      Fairy: "0.5",
    },
  },
  Dragon: {
    icon: iconDragon,
    effectiveness: {
      Normal: "1",
      Fire: "1",
      Water: "1",
      Electric: "1",
      Grass: "1",
      Ice: "0.5",
      Fighting: "1",
      Poison: "1",
      Ground: "1",
      Flying: "1",
      Psychic: "1",
      Bug: "1",
      Rock: "1",
      Ghost: "1",
      Dragon: "2",
      Dark: "1",
      Steel: "0.2",
      Fairy: "0.5",
    },
  },
  Electric: {
    icon: iconElectric,
    effectiveness: {
      Normal: "1",
      Fire: "1",
      Water: "2",
      Electric: "0.5",
      Grass: "0.5",
      Ice: "1",
      Fighting: "1",
      Poison: "1",
      Ground: "0",
      Flying: "2",
      Psychic: "1",
      Bug: "1",
      Rock: "1",
      Ghost: "1",
      Dragon: "0.5",
      Dark: "1",
      Steel: "0.5",
      Fairy: "1",
    },
  },
  Fairy: {
    icon: iconFairy,
    effectiveness: {
      Normal: "1",
      Fire: "0.5",
      Water: "1",
      Electric: "1",
      Grass: "1",
      Ice: "1",
      Fighting: "2",
      Poison: "0.5",
      Ground: "1",
      Flying: "1",
      Psychic: "1",
      Bug: "0.5",
      Rock: "1",
      Ghost: "1",
      Dragon: "2",
      Dark: "0.5",
      Steel: "2",
      Fairy: "1",
    },
  },
  Fighting: {
    icon: iconFighting,
    effectiveness: {
      Normal: "2",
      Fire: "1",
      Water: "1",
      Electric: "1",
      Grass: "1",
      Ice: "2",
      Fighting: "1",
      Poison: "0.5",
      Ground: "1",
      Flying: "0.5",
      Psychic: "0.5",
      Bug: "0.5",
      Rock: "2",
      Ghost: "0",
      Dragon: "1",
      Dark: "2",
      Steel: "2",
      Fairy: "0.5",
    },
  },
  Fire: {
    icon: iconFire,
    effectiveness: {
      Normal: "1",
      Fire: "0.5",
      Water: "0.5",
      Electric: "1",
      Grass: "2",
      Ice: "2",
      Fighting: "1",
      Poison: "1",
      Ground: "1",
      Flying: "1",
      Psychic: "1",
      Bug: "2",
      Rock: "0.5",
      Ghost: "1",
      Dragon: "0.5",
      Dark: "1",
      Steel: "2",
      Fairy: "1",
    },
  },
  Flying: {
    icon: iconFlying,
    effectiveness: {
      Normal: "1",
      Fire: "1",
      Water: "1",
      Electric: "0.5",
      Grass: "2",
      Ice: "1",
      Fighting: "2",
      Poison: "1",
      Ground: "1",
      Flying: "1",
      Psychic: "1",
      Bug: "2",
      Rock: "0.5",
      Ghost: "1",
      Dragon: "1",
      Dark: "1",
      Steel: "0.5",
      Fairy: "1",
    },
  },
  Ghost: {
    icon: iconGhost,
    effectiveness: {
      Normal: "0",
      Fire: "1",
      Water: "1",
      Electric: "1",
      Grass: "1",
      Ice: "1",
      Fighting: "1",
      Poison: "1",
      Ground: "1",
      Flying: "1",
      Psychic: "2",
      Bug: "1",
      Rock: "1",
      Ghost: "2",
      Dragon: "1",
      Dark: "0.5",
      Steel: "1",
      Fairy: "1",
    },
  },
  Grass: {
    icon: iconGrass,
    effectiveness: {
      Normal: "1",
      Fire: "0.5",
      Water: "2",
      Electric: "1",
      Grass: "0.5",
      Ice: "1",
      Fighting: "1",
      Poison: "0.5",
      Ground: "2",
      Flying: "0.5",
      Psychic: "1",
      Bug: "0.5",
      Rock: "2",
      Ghost: "1",
      Dragon: "0.5",
      Dark: "1",
      Steel: "0.5",
      Fairy: "1",
    },
  },
  Ground: {
    icon: iconGround,
    effectiveness: {
      Normal: "1",
      Fire: "2",
      Water: "1",
      Electric: "2",
      Grass: "0.5",
      Ice: "1",
      Fighting: "1",
      Poison: "2",
      Ground: "1",
      Flying: "0",
      Psychic: "1",
      Bug: "0.5",
      Rock: "2",
      Ghost: "1",
      Dragon: "1",
      Dark: "1",
      Steel: "2",
      Fairy: "1",
    },
  },
  Ice: {
    icon: iconIce,
    effectiveness: {
      Normal: "1",
      Fire: "0.5",
      Water: "0.5",
      Electric: "1",
      Grass: "2",
      Ice: "0.5",
      Fighting: "1",
      Poison: "1",
      Ground: "2",
      Flying: "2",
      Psychic: "1",
      Bug: "1",
      Rock: "1",
      Ghost: "1",
      Dragon: "2",
      Dark: "1",
      Steel: "0.5",
      Fairy: "1",
    },
  },
  Normal: {
    icon: iconNormal,
    effectiveness: {
      Normal: "1",
      Fire: "1",
      Water: "1",
      Electric: "1",
      Grass: "1",
      Ice: "1",
      Fighting: "1",
      Poison: "1",
      Ground: "1",
      Flying: "1",
      Psychic: "1",
      Bug: "1",
      Rock: "0.5",
      Ghost: "0",
      Dragon: "1",
      Dark: "1",
      Steel: "0.5",
      Fairy: "1",
    },
  },
  Poison: {
    icon: iconPoison,
    effectiveness: {
      Normal: "1",
      Fire: "1",
      Water: "1",
      Electric: "1",
      Grass: "2",
      Ice: "1",
      Fighting: "1",
      Poison: "0.5",
      Ground: "0.5",
      Flying: "1",
      Psychic: "1",
      Bug: "1",
      Rock: "0.5",
      Ghost: "0.5",
      Dragon: "1",
      Dark: "1",
      Steel: "0",
      Fairy: "2",
    },
  },
  Psychic: {
    icon: iconPsychic,
    effectiveness: {
      Normal: "1",
      Fire: "1",
      Water: "1",
      Electric: "1",
      Grass: "1",
      Ice: "1",
      Fighting: "2",
      Poison: "2",
      Ground: "1",
      Flying: "1",
      Psychic: "0.5",
      Bug: "1",
      Rock: "1",
      Ghost: "1",
      Dragon: "1",
      Dark: "0",
      Steel: "0.5",
      Fairy: "1",
    },
  },
  Rock: {
    icon: iconRock,
    effectiveness: {
      Normal: "1",
      Fire: "2",
      Water: "1",
      Electric: "1",
      Grass: "1",
      Ice: "2",
      Fighting: "0.5",
      Poison: "1",
      Ground: "0.5",
      Flying: "2",
      Psychic: "1",
      Bug: "2",
      Rock: "1",
      Ghost: "1",
      Dragon: "1",
      Dark: "1",
      Steel: "0.5",
      Fairy: "1",
    },
  },
  Steel: {
    icon: iconSteel,
    effectiveness: {
      Normal: "0.5",
      Fire: "0.5",
      Water: "0.5",
      Electric: "0.5",
      Grass: "1",
      Ice: "2",
      Fighting: "1",
      Poison: "0",
      Ground: "1",
      Flying: "1",
      Psychic: "1",
      Bug: "1",
      Rock: "2",
      Ghost: "1",
      Dragon: "0.5",
      Dark: "1",
      Steel: "0.5",
      Fairy: "2",
    },
  },
  Water: {
    icon: iconWater,
    effectiveness: {
      Normal: "1",
      Fire: "2",
      Water: "0.5",
      Electric: "1",
      Grass: "0.5",
      Ice: "1",
      Fighting: "1",
      Poison: "1",
      Ground: "2",
      Flying: "1",
      Psychic: "1",
      Bug: "1",
      Rock: "2",
      Ghost: "1",
      Dragon: "0.5",
      Dark: "1",
      Steel: "1",
      Fairy: "1",
    },
  },
};

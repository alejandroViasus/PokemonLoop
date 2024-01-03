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
  None: {
    icon: iconNone,
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
    colors: {
      primary: "rgba(204, 61, 75, 0.9)", // Rojo oscuro pastel para la Pokébola
      secondary: "rgba(230, 230, 230, 1)", // Blanco menos saturado
      tertiary: "rgba(30, 30, 30, 1)", // Negro menos saturado
      quaternary: "rgba(180, 51, 65,1)",
      textDark: "rgba(150, 21, 35,1)", // Tono oscuro estándar
      textWhite: "rgba(250, 120, 120, 1)", // Nuevo tono claro de rojo pastel

      background: "rgba(220, 220, 220, 1)", // Ajustado para adaptarse al nuevo tono predominante
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
    colors: {
      primary: "rgba(112, 160, 64, 1)", // Verde para Bug (menos saturado)
      secondary: "rgba(160, 192, 96, 1)", // Verde claro (menos saturado)
      tertiary: "rgba(128, 160, 80, 1)", // Verde oscuro (menos saturado)
      quaternary: "rgba(80, 112, 32, 1)", // Verde más oscuro (menos saturado)

      textDark: "rgba(20, 60, 40, 1)", // Nuevo tono oscuro
      textWhite: "rgba(210, 230, 190, 1)", // Nuevo tono claro

      background: "rgba(210, 220, 200, 0.8)", // Ajustado para adaptarse al nuevo tono verde
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
    colors: {
      primary: "rgba(64, 64, 96, 1)",
      secondary: "rgba(128, 128, 160, 1)",
      tertiary: "rgba(96, 96, 128, 1)",
      quaternary: "rgba(32, 32, 64, 1)",

      textDark: "rgba(20, 20, 40, 1)",
      textWhite: "rgba(200, 200, 220, 1)",

      background: "rgba(180, 180, 210, 0.8)",
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
    colors: {
      primary: "rgba(96, 160, 184, 0.9)", // Color principal ajustado para ser más oscuro y pastel
      secondary: "rgba(150, 205, 230, 1)", // Color complementario para resaltar el color principal (azul claro pastel)
      tertiary: "rgba(150, 200, 230, 1)", // Color adicional para detalles extra en la tarjeta (gris azulado pastel)

      quaternary: "rgba(80, 120, 150, 1)", // Cuarto color similar al primario pero más oscuro (gris azulado más oscuro)

      textDark: "rgba(40, 40, 40, 1)", // Color de texto oscuro para contrastar con fondos claros
      textWhite: "rgba(200, 230, 255, 1)", // Color de texto blanco ajustado para armonizar con el terciario

      background: "rgba(200, 230, 255, 1)", // Color de fondo claro para la página web (blanco)
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
    colors: {
      primary: "rgba(255, 204, 102, 0.9)", // Amarillo pastel para Eléctrico
      secondary: "rgba(102, 153, 255, 0.9)", // Azul pastel más oscuro
      tertiary: "rgba(255, 170, 102, 0.9)", // Amarillo terciario
      quaternary: "rgba(255, 184, 77, 0.9)", // Azul terciario

      textDark: "rgba(20, 20, 40, 1)", // Tono oscuro estándar
      textWhite: "rgba(0, 0, 40, 1)", // Azul oscuro para textWhite

      background: "rgba(220, 220, 240, 0.8)", // Ajustado para adaptarse al nuevo tono predominante
    
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
    colors: {
      primary: "rgba(223, 105, 160, 0.9)", // Rosa oscuro ajustado como nuevo color primario
      secondary: "rgba(238, 184, 200, 0.9)", // Rosa pastel menos saturado
      tertiary: "rgba(255, 153, 179, 0.9)", // Rosa claro menos saturado (subido ligeramente)
      quaternary: "rgba(239, 160, 184, 0.9)", // Rojo oscuro menos saturado

      textDark: "rgba(20, 20, 40, 1)", // Tono oscuro estándar
      textWhite: "rgba(180, 60, 80, 1)", // Tono rojizo acercándose al textDark

      background: "rgba(220, 220, 240, 0.8)", // Ajustado para adaptarse al nuevo tono predominante
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
    colors: {
      primary: "rgba(190, 80, 75, 0.9)", // Rojo intermedio
      secondary: "rgba(225, 120, 105, 0.9)", // Rojo intermedio ligeramente más claro
      tertiary: "rgba(116, 154, 230, 0.9)", // Azul intermedio
      quaternary: "rgba(100, 100, 100, 0.9)", // Gris intermedio

      textDark: "rgba(20, 20, 40, 1)", // Tono oscuro estándar
      textWhite: "rgba(222, 200, 200, 1)", // Tono claro estándar

      background: "rgba(240, 240, 220, 0.8)", // Ajustado para adaptarse al nuevo tono predominante
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
    colors: {
      primary: "rgba(204, 51, 51, 0.9)", // Rojo oscuro para Fuego
      secondary: "rgba(255, 204, 102, 0.9)", // Amarillo claro
      tertiary: "rgba(255, 153, 51, 0.9)", // Amarillo rojizo más intenso
      quaternary: "rgba(102, 51, 0, 0.9)", // Marrón oscuro

      textDark: "rgba(20, 20, 40, 1)", // Tono oscuro estándar
      textWhite: "rgba(160, 40, 40, 1)", // Rojo oscuro para textWhite

      background: "rgba(255, 240, 220, 0.8)", // Naranja pálido para el fondo
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
    colors: {
      primary: "rgba(120, 195, 225, 0.9)", // Azul claro para Volador
      secondary: "rgba(170, 220, 255, 0.9)", // Azul claro más saturado
      tertiary: "rgba(240, 240, 255, 0.9)", // Blanco azulado
      quaternary: "rgba(50, 120, 160, 0.9)", // Azul oscuro

      textDark: "rgba(20, 20, 40, 1)", // Tono oscuro estándar
      textWhite: "rgba(40, 80, 120, 1)", // Azul medianamente oscuro para textWhite

      background: "rgba(200, 220, 240, 0.8)", // Azul pálido para el fondo
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
    colors: {
      primary: "rgba(120, 130, 190, 1)", // Color principal representativo del tipo Ghost (ajustado para ser pastel)
      secondary: "rgba(180, 190, 240, 1)", // Color complementario para resaltar el color principal
      tertiary: "rgba(150, 160, 220, 1)", // Color adicional para detalles extra en la tarjeta
      quaternary: "rgba(100, 110, 170, 1)", // Cuarto color similar al primario

      textDark: "rgba(20, 20, 40, 1)", // Color de texto oscuro para contrastar con fondos claros
      textWhite: "rgba(80, 85, 130, 1)", // Nuevo color de texto blanco ajustado para ser una mezcla entre el cuaternario y textDark

      background: "rgba(220, 220, 240, 1)", // Color de fondo claro para la página web
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
    colors: {
      primary: "rgba(80, 140, 90, 1)", // Color principal más oscuro pero dentro de la gama pastel
      secondary: "rgba(239, 255, 240, 1)", // Color complementario para resaltar el color principal
      tertiary: "rgba(200, 237, 203, 1)", // Color adicional para detalles extra en la tarjeta
      quaternary: "rgba(60, 120, 70, 1)", // Cuarto color, un poco más oscuro que el primario

      textDark: "rgba(10, 100, 80, 1)", // Color de texto oscuro para contrastar con fondos claros
      textWhite: "rgba(144, 196, 149, 1)", // Nuevo color de texto blanco ajustado similar al tono del tertiary

      background: "rgba(221, 242, 223, 1)", // Color de fondo claro para la página web
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
    colors: {
      primary: "rgba(210, 180, 140, 1)", // Color principal representativo del tipo Ground (tono tierra)
      secondary: "rgba(240, 220, 190, 1)", // Color complementario para resaltar el color principal
      tertiary: "rgba(180, 150, 120, 1)", // Color adicional para detalles extra en la tarjeta
      quaternary: "rgba(150, 120, 90, 1)", // Cuarto color similar al primario (tono tierra más oscuro)

      textDark: "rgba(50, 40, 30, 1)", // Color de texto oscuro para contrastar con fondos claros
      textWhite: "rgba(90, 70, 50, 1)", // Nuevo color de texto blanco ajustado, mucho más oscuro

      background: "rgba(235, 220, 200, 1)", // Color de fondo claro para la página web
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
    colors: {
      primary: "rgba(173, 216, 230, 1)", // Azul pastel representativo del tipo Hielo
      secondary: "rgba(240, 240, 255, 1)", // Azul claro pastel complementario
      tertiary: "rgba(152, 192, 205, 1)", // Azul pastel más apagado para detalles adicionales
      quaternary: "rgba(52, 82, 95, 1)", // Azul pastel más oscuro

      textDark: "rgba(30, 50, 70, 1)", // Tono oscuro para el texto
      textWhite: "rgba(100, 150, 190, 1)", // Blanco azulado ajustado para armonizar

      background: "rgba(240, 250, 255, 1)", // Fondo claro
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
    colors: {
      primary: "rgba(180, 180, 180, 1)", // Color principal representativo del tipo Normal (gris pastel)
      secondary: "rgba(220, 220, 220, 1)", // Color complementario para resaltar el color principal (gris claro)
      tertiary: "rgba(120, 120, 120, 1)", // Color adicional para detalles extra en la tarjeta (gris más oscuro)
      quaternary: "rgba(80, 80, 80, 1)", // Cuarto color similar al primario (gris oscuro)

      textDark: "rgba(40, 40, 40, 1)", // Color de texto oscuro para contrastar con fondos claros
      textWhite: "rgba(40, 40, 40, 1)", // Color de texto blanco ajustado más oscuro para armonizar con el terciario

      background: "rgba(240, 240, 240, 1)", // Color de fondo claro para la página web
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
    colors: {
      primary: "rgba(160, 100, 180, 1)", // Violeta pastel más claro representativo del tipo Poison
      secondary: "rgba(200, 160, 220, 1)", // Violeta claro complementario
      tertiary: "rgba(100, 60, 120, 1)", // Violeta más oscuro para detalles adicionales
      quaternary: "rgba(120, 70, 150, 1)", // Similar al primario pero más oscuro

      textDark: "rgba(20, 20, 40, 1)", // Color de texto oscuro para contrastar con fondos claros
      textWhite: "rgba(255, 255, 255, 1)", // Blanco puro para un alto contraste con todos los colores

      background: "rgba(180, 180, 200, 1)", // Color de fondo claro para la página web
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
    colors: {
      primary: "rgba(255, 160, 180, 1)", // Color principal representativo del tipo Psíquico (rosa pastel)
      secondary: "rgba(255, 200, 220, 1)", // Color complementario para resaltar el color principal (rosa claro)
      tertiary: "rgba(200, 120, 140, 1)", // Color adicional para detalles extra en la tarjeta (rosa más oscuro)
      quaternary: "rgba(160, 80, 100, 1)", // Cuarto color similar al primario (rosa oscuro)

      textDark: "rgba(80, 40, 50, 1)", // Color de texto oscuro para contrastar con fondos claros
      textWhite: "rgba(40, 40, 50, 1)", // Color de texto blanco ajustado para armonizar con el terciario

      background: "rgba(240, 240, 255, 1)", // Color de fondo claro para la página web
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
    colors: {
      primary: "rgba(200, 185, 160, 1)", // Color principal representativo del tipo Roca (marrón pastel)
      secondary: "rgba(150, 135, 120, 1)", // Color complementario para resaltar el color principal (marrón claro)
      tertiary: "rgba(120, 105, 90, 1)", // Color adicional para detalles extra en la tarjeta (marrón más oscuro)
      quaternary: "rgba(80, 65, 50, 1)", // Cuarto color similar al primario pero más oscuro (marrón oscuro)

      textDark: "rgba(20, 20, 20, 1)", // Color de texto oscuro para contrastar con fondos claros
      textWhite: "rgba(255, 255, 255, 1)", // Blanco puro para un alto contraste

      background: "rgba(245, 240, 230, 1)", // Color de fondo claro para la página web (crema pastel)
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
    colors: {
      primary: "rgba(96, 128, 160, 1)", // Mezcla de tonos para Dragon (azul-verde)
      secondary: "rgba(144, 168, 184, 1)", // Mezcla de tonos para Dragon (azul-verde claro)
      tertiary: "rgba(120, 144, 136, 1)", // Mezcla de tonos para Dragon (azul-verde oscuro)
      tertiary: "rgba(120, 100, 80, 1)",
      quaternary: "rgba(64, 96, 96, 1)", // Mezcla de tonos para Dragon (azul-verde más oscuro)

      textDark: "rgba(40, 20, 80, 1)", // Nuevo tono oscuro
      textWhite: "rgba(200, 210, 235, 1)", // Nuevo tono claro (ajustado para combinar)

      background: "rgba(200, 210, 230, 0.8)", // Ajustado para adaptarse al tono predominante de la mezcla
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
    colors: {
      primary: "rgba(50, 130, 180, 1)", // Color principal representativo del tipo Agua (azul pastel)
      secondary: "rgba(140, 186, 218, 1)", // Color complementario para resaltar el color principal (azul claro pastel)
      tertiary: "rgba(117, 163, 197, 1)", // Color adicional para detalles extra en la tarjeta (azul pastel más oscuro)
      quaternary: "rgba(60, 110, 130, 1)", // Cuarto color similar al primario pero más oscuro (azul pastel más oscuro)

      textDark: "rgba(40, 40, 60, 1)", // Color de texto oscuro para contrastar con fondos claros
      textWhite: "rgba(214, 231, 255, 1)", // Color de texto blanco ajustado para armonizar con el terciario

      background: "rgba(206, 225, 255, 1)", // Color de fondo claro para la página web (azul claro pastel)
    },
  },
};

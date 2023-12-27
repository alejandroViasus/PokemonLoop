export const globalStateFormat = {
  user: {
    _id: "0",
    email: undefined,
    gametag: undefined,
    pictureTrainer: "None",
    theme: "None",
    experience: 0,
    level: 0,
    league: 0,
    fractionLevel: 0,
    coins: 0,
    pokeballs: 0,
    bagPokemons: 0,
    box: 0,
    wins: 0,
    loss: 0,
  },
  pokemonsUser: [],
  teamUser: [],
  version:"cero",
  render:'cero',
};

export const pokemonFormat = {
  //basic
  heald:100,
  alive:true,
  shiny: undefined, //!----boolean
  noPokedex: undefined, //!----number
  name: undefined, //!----string
  trainer: undefined, //!----refUser
  team: false, //!----boolean
  favorite: false, //!----boolean
  //*progressive
  maxStack4level: undefined, //!----number
  actualStack: undefined, //!----number
  level: undefined, //!----number
  experience:undefined,
  //other
  weight: undefined, //!----number
  height: undefined, //!----number
  auction: false, //!----boolean
  //*types
  type1: undefined, //!----string
  type2: undefined, //!----string

  //*stadistics
  //scale
  scaleHeald: undefined, //!----number
  scaleAttack: undefined, //!----number
  scaleDeffense: undefined, //!----number
  scaleSpecialAttack: undefined, //!----number
  scaleSpecialDeffense: undefined, //!----number
  scaleSpeed: undefined, //!----number
  //effort
  effortHeald: undefined, //!----number
  effortAttack: undefined, //!----number
  effortDeffense: undefined, //!----number
  effortSpecialAttack: undefined, //!----number
  effortSpecialDeffense: undefined, //!----number
  effortSpeed: undefined, //!----number
  //base
  baseHeald: undefined, //!----number
  baseAttack: undefined, //!----number
  baseDeffense: undefined, //!----number
  baseSpecialAttack: undefined, //!----number
  baseSpecialDeffense: undefined, //!----number
  baseSpeed: undefined, //!----number
};



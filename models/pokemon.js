import mongoose from "mongoose";


const pokemonSchema = mongoose.Schema(
  {
    heald:{
      type: Number, // example 1
      required: true,
    },
    alive: {
      type: Boolean, // example false
      required: true,
    },
    shiny: {
      type: Boolean, // example false
      required: true,
    },
    noPokedex: {
      type: Number, // example 1
      required: true,
    },
    name: {
      type: String, // example "bulbasaur"
      required: true,
    },
    trainer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user", // El nombre de tu modelo de Entrenador
      required: true,
    },
    team: {
      type: Boolean, // example true
      required: true,
    },
    favorite: {
      type: Boolean, // example true
      required: true,
    },

    auction: {
      type: Boolean, // example true
      required: true,
    },

    //!others

    maxStack4level: {
      type: Number, // example (10+(ModelPokemon.level*2))
      required: false,
    },
    actualStack: {
      type: Number, // example 3
      required: true,
    },
    weight: {
      type: Number, // example 16
      required: true,
    },
    height: {
      type: Number, // example 16
      required: true,
    },
    level: {
      type: Number, // example 16
      required: false,
    },
    level: {
      type: Number, // example 16
      required: true,
    },
    //!types
    type1: {
      type: String, // example "Bug"
      required: true,
    },
    type2: {
      type: String, // example "Bug"
      required: true,
    },

    //!stadistics

    scaleHeald: {
      type: Number, // example 7
      required: true,
    },
    scaleAttack: {
      type: Number, // example 7
      required: true,
    },
    scaleDeffense: {
      type: Number, // example 7
      required: true,
    },
    scaleSpecialAttack: {
      type: Number, // example 7
      required: true,
    },
    scaleSpecialDeffense: {
      type: Number, // example 7
      required: true,
    },
    scaleSpeed: {
      type: Number, // example 7
      required: true,
    },

    effortHeald: {
      type: Number, // example 7
      required: true,
    },
    effortAttack: {
      type: Number, // example 7
      required: true,
    },
    effortDeffense: {
      type: Number, // example 7
      required: true,
    },
    effortSpecialAttack: {
      type: Number, // example 7
      required: true,
    },
    effortSpecialDeffense: {
      type: Number, // example 7
      required: true,
    },
    effortSpeed: {
      type: Number, // example 7
      required: true,
    },

    baseHeald: {
      type: Number, // example 7
      required: true,
    },
    baseAttack: {
      type: Number, // example 7
      required: true,
    },
    baseDeffense: {
      type: Number, // example 7
      required: true,
    },
    baseSpecialAttack: {
      type: Number, // example 7
      required: true,
    },
    baseSpecialDeffense: {
      type: Number, // example 7
      required: true,
    },
    baseSpeed: {
      type: Number, // example 7
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.models?.pokemon ||
  mongoose.model("pokemon", pokemonSchema);

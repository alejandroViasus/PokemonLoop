import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setListPokemons } from "@/store/slice";
import { typesPokemon } from "@/Assets/typesPokemon";
import Image from "next/image";
import { trainers } from "@/Assets/trainers";
//! components
import ItemsDetail from "../ItemsDetail/ItemsDetail";

function PrincipalDetailUserHome() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.valueState);
  //console.log(trainers[globalState.user.pictureTrainer],globalState.user.pictureTrainer);
  //console.log(globalState);
  const initialState = {};
  const [state, setState] = useState(initialState);

  const sizeButtonWidth = 200;
  const sizeButtonHeight = 150;

  useEffect(() => {
    if (globalState.user._id != 0) {
      //    console.log("cambio de ID", globalState.user._id);
      fetch(`http://localhost:3000/api/pokemon/all?id=${globalState.user._id}`)
        .then((response) => response.json())
        .then((data) => {
          //console.log(data.data);
          dispatch(
            setListPokemons({ state: globalState, listPokemons: data.data })
          );
        });
    }
  }, [globalState.user._id]);

  console.log("State-Home", globalState.user.theme);

  const contentHome = {
    backgroundColor: `${
      typesPokemon[globalState.user.theme].colors.background
    }`,
    backgroundColor: `gray`,
    justifyContent: "flex-start",
    paddingTop: "5%",
  };

  const contentDetail = {
    backgroundColor: `${
      typesPokemon[globalState.user.theme].colors.background
    }`,

    height: "80%",
  };

  const itemsDeatil = ["pokeballs", "coins", "box", "experience", "league"];

  return (
    <div
      className="content-principal-detail-home 
    percentage-100-width
    percentage-100-height
    flex-all-center
    "
      style={contentHome}
    >
      <section
        className="section 
      score 
      flex-all-center
      segure-width
      
      "
        style={contentDetail}
      >
        <div
          className="flex-all-center
        
          "
          style={{
            width: "30%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap:'50px',
            
            // backgroundColor: "yellow",
          }}
        >
          <h1>{globalState.user.gametag}</h1>
          <div
            className="flex-all-center 
          percentage-100-width
          percentage-100-height
          "
            style={{
              color:`${ typesPokemon[globalState.user.theme].colors.primary}`,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "15px",
              //backgroundColor: "red",
            }}
          >
            {itemsDeatil.map((element) => {
              return <ItemsDetail element={element} />;
            })}
          </div>
        </div>
        <div
          className="flex-all-center"
          style={{
            width: "70%",
            height: "100%",
            backgroundColor: "purple",
          }}
        >
          dataUser
        </div>
      </section>
      <section className="section image">b</section>
      <section className="section team">c</section>
      {/* <h1>{globalState.user.gametag}</h1>
      <h1>{globalState.user._id}</h1>

      <div>
        <h3>Pokeballs :</h3>
        <p>{globalState.user.pokeballs}</p>
      </div>
      <div>
        <h3>Coins :</h3>
        <p>{globalState.user.coins}</p>
      </div>
      <div>
        <h3>Box :</h3>
        <p>{globalState.user.box}</p>
      </div>
      <div>
        <h3>Bag :</h3>
        <p>
          {globalState.pokemonsUser?.length} / {globalState.user.bagPokemons}
        </p>
      </div>
      <div>
        <h3>LEVEL:</h3>
        <p>{globalState.user.level}</p>
        <div>
          <p>level: {globalState.user.fractionLevel}</p>
          <p>level: {globalState.user.fractionLevel}</p>
        </div>

        <Image
          src={trainers[globalState?.user.pictureTrainer].image}
          alt={`image-trainer-${globalState.pictureTrainer}`}
          width={sizeButtonWidth}
          height={sizeButtonHeight}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div> */}
    </div>
  );
}

export default PrincipalDetailUserHome;

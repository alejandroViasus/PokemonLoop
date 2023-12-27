import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setListPokemons } from "@/store/slice";
import Image from "next/image";
import { trainers } from "@/Assets/trainers";

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

  //console.log(globalState);
  return (
    <div
      className="content-principal-detail-home 
    percentage-100-width
    percentage-100-height
    flex-all-center

    "
    >
    
      <section className="section score">a</section>
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

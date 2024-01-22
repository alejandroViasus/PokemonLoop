import React, { useState, useEffect } from "react";
import { generate } from "@/Assets/funcions";
import { typesPokemon } from "@/Assets/typesPokemon";

import Image from "next/image";
import { pokemonGet } from "@/Assets/funcions";
import { valuesPokemon } from "@/Assets/funcions";

//import icons
import iconHeald from '../../../../public/Assets/icons/iconHeald.svg';
import iconSword from '../../../../public/Assets/icons/iconSword.svg';
import iconSwordPlus from '../../../../public/Assets/icons/iconSword+.svg';
import iconShield from '../../../../public/Assets/icons/iconShield.svg';
import iconShieldPlus from '../../../../public/Assets/icons/iconShield+.svg';
import iconSpeed from '../../../../public/Assets/icons/iconSpeed.svg';
import Star from "../../../../public/Assets/icons/Types/Star.svg"
import IconHeald from "@/app/Icons/IconHeald";

function ShowStacks({ pokemon, theme }) {




  const sizeIcon = 80;
  const icons = {
    Heald: iconHeald,
    Attack: iconSword,
    Deffense: iconShield,
    SpecialAttack: iconSwordPlus,
    SpecialDeffense: iconShieldPlus,
    Speed: iconSpeed,
  }

  const setValue = (item, offset) => {
    if (item < offset) {
      return item + 1;
    } else {
      return item;
    }
  };

  const [star, setStar] = useState({
    stars: [],
    rarity: '',
  })

  useEffect(() => {
    //console.log(pokemonGet.valuePokemon(pokemon));
    const valuestars = [];

    for (let i = 0; i < pokemonGet.valuePokemon(pokemon); i++) {
      valuestars.push(<Image key={`starDetail${pokemon._id}${i}`} src={Star} width={13} height={13} alt="star" />);
    }

    const rarity =
      valuesPokemon?.rateRarity[valuestars.length - 1] !== undefined
        ? valuesPokemon.rateRarity[valuestars.length - 1]
        : valuesPokemon.rateRarity[valuesPokemon.rateRarity.length - 1];

    setStar({ ...state, stars: valuestars, rarity });
  }, [pokemon]);





  const setPercentage = (item, offset) => {
    console.log('////////////----setPercentage', item, offset)
    let percent = ((item / offset) * 100).toFixed(2)
    return percent > 100 ? 100 : percent
  };

  const initialState = {
    actualValues: {
      statHeald: 0,
      statAttack: 0,
      statDeffense: 0,
      statSpecialAttack: 0,
      statSpecialDeffense: 0,
      statSpeed: 0,
    },
    reference: {
      statHeald: generate.getStackReference(pokemon, "Heald") || 0,
      statAttack: generate.getStackReference(pokemon, "Attack") || 0,
      statDeffense: generate.getStackReference(pokemon, "Deffense") || 0,
      statSpecialAttack:
        generate.getStackReference(pokemon, "SpecialAttack") || 0,
      statSpecialDeffense:
        generate.getStackReference(pokemon, "SpecialDeffense") || 0,
      statSpeed: generate.getStackReference(pokemon, "Speed") || 0,
    },
    referencePercentage: {
      statHeald:
        setPercentage(
          generate.getStat(pokemon, "Heald"),
          generate.getStackReference(pokemon, "Heald")
        ) || 0,
      statAttack:
        setPercentage(
          generate.getStat(pokemon, "Attack"),
          generate.getStackReference(pokemon, "Attack")
        ) || 0,
      statDeffense:
        setPercentage(
          generate.getStat(pokemon, "Deffense"),
          generate.getStackReference(pokemon, "Deffense")
        ) || 0,
      statSpecialAttack:
        setPercentage(
          generate.getStat(pokemon, "SpecialAttack"),
          generate.getStackReference(pokemon, "SpecialAttack")
        ) || 0,
      statSpecialDeffense:
        setPercentage(
          generate.getStat(pokemon, "SpecialDeffense"),
          generate.getStackReference(pokemon, "SpecialDeffense")
        ) || 0,
      statSpeed:
        setPercentage(
          generate.getStat(pokemon, "Speed"),
          generate.getStackReference(pokemon, "Speed")
        ) || 0,
    },
    limit: {
      statHeald: generate.getStat(pokemon, "Heald") || 0,
      statAttack: generate.getStat(pokemon, "Attack") || 0,
      statDeffense: generate.getStat(pokemon, "Deffense") || 0,
      statSpecialAttack: generate.getStat(pokemon, "SpecialAttack") || 0,
      statSpecialDeffense: generate.getStat(pokemon, "SpecialDeffense") || 0,
      statSpeed: generate.getStat(pokemon, "Speed") || 0,
    },

    position: {
      statHeald: 0,
      statAttack: 0,
      statDeffense: 0,
      statSpecialAttack: 0,
      statSpecialDeffense: 0,
      statSpeed: 0,
    },
    timmer: 12,
    complete: false,
    interval: 0,
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState);
  }, [pokemon]);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setState((prevState) => {
        if (prevState.complete !== true) {
          return {
            ...prevState,

            interval: prevState.interval + 0.5,
          };
        } else {
          clearInterval(intervalId);
          return prevState;
        }
      });
    }, state.timmer);
  }, [state.complete]);

  useEffect(() => {
    setState({
      ...state,
      actualValues: {
        statHeald: setValue(
          state.actualValues.statHeald,
          state.referencePercentage.statHeald
        ),
        statAttack: setValue(
          state.actualValues.statAttack,
          state.referencePercentage.statAttack
        ),
        statDeffense: setValue(
          state.actualValues.statDeffense,
          state.referencePercentage.statDeffense
        ),
        statSpecialAttack: setValue(
          state.actualValues.statSpecialAttack,
          state.referencePercentage.statSpecialAttack
        ),
        statSpecialDeffense: setValue(
          state.actualValues.statSpecialDeffense,
          state.referencePercentage.statSpecialDeffense
        ),
        statSpeed: setValue(
          state.actualValues.statSpeed,
          state.referencePercentage.statSpeed
        ),
      },
      complete: verification(),
    });
  }, [state.interval]);

  const verification = () => {
    if (
      state.actualValues.statHeald >= state.referencePercentage.statHeald &&
      state.actualValues.statAttack >= state.referencePercentage.statAttack &&
      state.actualValues.statDeffense >=
      state.referencePercentage.statDeffense &&
      state.actualValues.statSpecialAttack >=
      state.referencePercentage.statSpecialAttack &&
      state.actualValues.statSpecialDeffense >=
      state.referencePercentage.statSpecialDeffense &&
      state.actualValues.statSpeed >= state.referencePercentage.statSpeed
    ) {
      return true;
    } else {
      return false;
    }
  };

  console.log('validationScale', state);
  return (
    <div>


      <div
        style={{
          position: "absolute",
          opacity: '1',
          left: "5%",
          top: "5%",
          height: "90%",
          width: "90%",
          clipPath: `polygon(
                                50% 0%, 
                                100% 25%, 
                                100% 75%, 
                                50% 100%, 
                                0% 75%, 
                                0% 25%
                              )`,
          backgroundColor: typesPokemon[theme].colors.primary,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          opacity: '1',
          left: "5%",
          top: "5%",
          height: "90%",
          width: "90%",
          scale: '0.75',
          clipPath: `polygon(
            50% 0%, 
            100% 25%, 
            100% 75%, 
            50% 100%, 
            0% 75%, 
            0% 25%
                              )`,
          backgroundColor: `rgba(222,222,222,0.15)`,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          opacity: '1',
          left: "5%",
          top: "5%",
          height: "90%",
          width: "90%",
          scale: '0.5',
          clipPath: `polygon(
            50% 0%, 
            100% 25%, 
            100% 75%, 
            50% 100%, 
            0% 75%, 
            0% 25%
                              )`,
          backgroundColor: typesPokemon[theme].colors.primary,
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          opacity: '1',
          left: "5%",
          top: "5%",
          height: "90%",
          width: "90%",
          scale: '0.25',
          clipPath: `polygon(
            50% 0%, 
            100% 25%, 
            100% 75%, 
            50% 100%, 
            0% 75%, 
            0% 25%
                              )`,
          backgroundColor: `rgba(222,222,222,0.15)`,
        }}
      ></div>



      <div
        style={{
          position: "absolute",
          opacity: '1',
          left: "50%",
          top: "5%",
          height: "90%",
          width: "0.1%",
          scale: '1',
          backgroundColor: `rgba(22,22,22,0.3)`,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          opacity: '1',
          left: "50%",
          top: "0%",
          height: "100%",
          width: "0.1%",
          scale: '1',
          transform: 'rotate(63deg)',
          backgroundColor: `rgba(22,22,22,0.3)`,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          opacity: '1',
          left: "50%",
          top: "0%",
          height: "100%",
          width: "0.1%",
          scale: '1',
          transform: 'rotate(-63deg)',
          backgroundColor: `rgba(22,22,22,0.3)`,
        }}
      ></div>


      {/* <div
      style={{
        position: "absolute",
        opacity: '1',
        left: "50%",
        top: "5%",
        height: "90%",
        width: "0.1%",
        scale: '1',
        backgroundColor: `rgba(22,22,22,0.3)`,
      }}
    ></div>
    <div
      style={{
        position: "absolute",
        opacity: '1',
        left: "50%",
        top: "0%",
        height: "100%",
        width: "0.1%",
        scale: '1',
        transform: 'rotate(63deg)',
        backgroundColor: `rgba(22,22,22,0.3)`,
      }}
    ></div>
    <div
      style={{
        position: "absolute",
        opacity: '1',
        left: "50%",
        top: "0%",
        height: "100%",
        width: "0.1%",
        scale: '1',
        transform: 'rotate(-63deg)',
        backgroundColor: `rgba(22,22,22,0.3)`,
      }}
    ></div> */}

      <div
        style={{
          height: "300px",
          width: "300px",
          backgroundColor: "rgba(22,22,22,0)",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: `${50 - state.actualValues.statHeald / 2}%`,
            top: `-5%`,
            left: `50%`,
          }}
        >

          <div
            className="flex-all-center"
            style={{
              // alignItems: 'flex-end',
              position: 'relative',
              width: '100%',
              height: '100%',
              // backgroundColor: 'green'

            }}
          >
            {/* <Image
              style={{
                position: 'absolute',
                // backgroundColor: 'red',
                scale: '0.7',
                // bottom:'16%',
                opacity: '1'
              }}
              src={icons.Heald}
              height={sizeIcon}
              width={sizeIcon}
              alt="icon-show-speed"
            ></Image> */}

            <div
            style={{
              position: 'absolute',
              //  backgroundColor: typesPokemon[theme].colors.background,
              scale: '0.5',
              // bottom:'16%',
              opacity: '1'
            }}
            >
              <IconHeald type={theme} subColor="background"/>
            </div>

            <h1
              style={{
                position: 'absolute',
                // backgroundColor: 'red',
                scale: '1',
                color: typesPokemon[theme].colors.textDark
              }}
            >
              {state.actualValues.statHeald}
            </h1>
          </div>

        </div>

        <div
          style={{
            position: "absolute",
            // left: `${50 + (50 * state.actualValues.statAttack) / 100}%`,
            left: `105%`,
            // top: `${25 + (25 - (25 * state.actualValues.statAttack) / 100)}%`,
            top: `25%`,
            zIndex: '2'
          }}
        >
          <div
            className="flex-all-center"
            style={{
              // alignItems: 'flex-end',
              position: 'relative',
              width: '100%',
              height: '100%',
              // backgroundColor: 'green'

            }}
          >
            <Image
              style={{
                position: 'absolute',
                // backgroundColor: 'red',
                scale: '0.7',
                // bottom:'16%',
                opacity: '1'
              }}
              src={icons.Attack}
              height={sizeIcon}
              width={sizeIcon}
              alt="icon-show-speed"
            ></Image>

            <h1
              style={{
                position: 'absolute',
                // backgroundColor: 'red',
                scale: '1',
                color: typesPokemon[theme].colors.textDark
              }}
            >
              {state.actualValues.statAttack}
            </h1>
          </div>

        </div>

        <div
          style={{
            position: "absolute",
            // left: `${50 + 50 * (state.actualValues.statDeffense / 100)}% `,
            left: `105% `,
            // top: `${50 + 25 * (state.actualValues.statDeffense / 100)}%`,
            top: `75%`,
          }}
        >

          <div
            className="flex-all-center"
            style={{
              // alignItems: 'flex-end',
              position: 'relative',
              width: '100%',
              height: '100%',
              // backgroundColor: 'green'

            }}
          >
            <Image
              style={{
                position: 'absolute',
                // backgroundColor: 'red',
                scale: '0.7',
                // bottom:'16%',
                opacity: '1'
              }}
              src={icons.Deffense}
              height={sizeIcon}
              width={sizeIcon}
              alt="icon-show-speed"
            ></Image>

            <h1
              style={{
                position: 'absolute',
                // backgroundColor: 'red',
                scale: '1',
                color: typesPokemon[theme].colors.textDark
              }}
            >
              {state.actualValues.statDeffense}
            </h1>
          </div>

        </div>
        <div
          style={{
            position: "absolute",
            left: `50% `,
            // top: `${50 + 50 * (state.actualValues.statSpecialAttack / 100)}%`,
            bottom: `-5%`,
          }}
        >
          <div
            className="flex-all-center"
            style={{
              // alignItems: 'flex-end',
              position: 'relative',
              width: '100%',
              height: '100%',
              // backgroundColor: 'green'

            }}
          >
            <Image
              style={{
                position: 'absolute',
                // backgroundColor: 'red',
                scale: '0.7',
                // bottom:'16%',
                opacity: '1'
              }}
              src={icons.SpecialAttack}
              height={sizeIcon}
              width={sizeIcon}
              alt="icon-show-speed"
            ></Image>

            <h1
              style={{
                position: 'absolute',
                // backgroundColor: 'red',
                scale: '1',
                color: typesPokemon[theme].colors.textDark
              }}
            >
              {state.actualValues.statSpecialAttack}
            </h1>
          </div>

        </div>

        <div
          style={{
            position: "absolute",
            // left: `${50 - 50 * (state.actualValues.statSpecialDeffense / 100)}% `,
            left: `-5% `,
            // top: ` ${50 + 25 * (state.actualValues.statSpecialDeffense / 100)}%`,
            top: `75%`,
          }}
        >
          <div
            className="flex-all-center"
            style={{
              // alignItems: 'flex-end',
              position: 'relative',
              width: '100%',
              height: '100%',
              // backgroundColor: 'green'

            }}
          >
            <Image
              style={{
                position: 'absolute',
                // backgroundColor: 'red',
                scale: '0.7',
                // bottom:'16%',
                opacity: '1'
              }}
              src={icons.SpecialDeffense}
              height={sizeIcon}
              width={sizeIcon}
              alt="icon-show-speed"
            ></Image>

            <h1
              style={{
                position: 'absolute',
                // backgroundColor: 'red',
                scale: '1',
                color: typesPokemon[theme].colors.textDark
              }}
            >
              {state.actualValues.statSpecialDeffense}
            </h1>
          </div>

        </div>

        <div
          className="flex-all-center"
          style={{
            flexDirection: 'column',
            position: "absolute",
            left: `-12%`,
            bottom: `-10%`,
            scale:"2",
            opacity:'0.4'
          }}
        >

          

          <div className=" flex-all-center"
          
          
          >
            {star.stars} 
          </div>
          {state.interval}
        </div>
        <div
          style={{
            position: "absolute",
            // left: `${50 - 50 * (state.actualValues.statSpeed / 100)}%   `,
            left: `-15%   `,
            // top: ` ${50 - 25 * (state.actualValues.statSpeed / 100)}%`,
            top: `15%`,
            height: '80px',
            width: '50px',
            //  backgroundColor: 'blue',
          }}
        >

          <div
            className="flex-all-center"
            style={{
              // alignItems: 'flex-end',
              position: 'relative',
              width: '100%',
              height: '100%',
              // backgroundColor: 'green'

            }}
          >
            <Image
              style={{
                position: 'absolute',
                // backgroundColor: 'red',
                scale: '0.7',
                // bottom:'16%',
                opacity: '1'
              }}
              src={iconSpeed}
              height={sizeIcon}
              width={sizeIcon}
              alt="icon-show-speed"
            ></Image>

            <h1
              style={{
                position: 'absolute',
                // backgroundColor: 'red',
                scale: '1',
                color: typesPokemon[theme].colors.textDark
              }}
            >
              {state.actualValues.statSpeed}
            </h1>
          </div>
        </div>



        <div
          style={{
            position: "absolute",
            left: "5%",
            top: "5%",
            height: "90%",
            width: "90%",
            clipPath: `polygon(

        50% ${50 - state.actualValues.statHeald / 2}%, 
      ${50 + (50 * state.actualValues.statAttack) / 100}% 
      ${25 + (25 - (25 * state.actualValues.statAttack) / 100)}%, 
       ${50 + 50 * (state.actualValues.statDeffense / 100)}% 
      ${50 + 25 * (state.actualValues.statDeffense / 100)}%, 

      50% ${50 + 50 * (state.actualValues.statSpecialAttack / 100)}%, 
      ${50 - 50 * (state.actualValues.statSpecialDeffense / 100)}% 
      ${50 + 25 * (state.actualValues.statSpecialDeffense / 100)}%, 
      ${50 - 50 * (state.actualValues.statSpeed / 100)}% 
      ${50 - 25 * (state.actualValues.statSpeed / 100)}%
          )`,
            backgroundColor: typesPokemon[theme].colors.secondary,
            opacity: '0.7'
          }}
        ></div>
      </div>

      <div
        style={{
          position: "absolute",
          opacity: '1',
          left: "50%",
          top: "5%",
          height: "90%",
          width: "0.1%",
          scale: '1',
          backgroundColor: `rgba(22,22,22,0.1)`,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          opacity: '1',
          left: "50%",
          top: "0%",
          height: "100%",
          width: "0.1%",
          scale: '1',
          transform: 'rotate(63deg)',
          backgroundColor: `rgba(22,22,22,0.1)`,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          opacity: '1',
          left: "50%",
          top: "0%",
          height: "100%",
          width: "0.1%",
          scale: '1',
          transform: 'rotate(-63deg)',
          backgroundColor: `rgba(22,22,22,0)`,
        }}
      ></div>


    </div>
  );
}

export default ShowStacks;

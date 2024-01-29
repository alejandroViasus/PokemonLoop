import React from 'react'
import { colors } from '@/Assets/colors'
import { typesPokemon } from '@/Assets/typesPokemon'
import Image from 'next/image'
import Pokeball from "../../../../../public/Assets/icons/componentsBattle/pokeball.svg"

function SelectMode({ battleState, methods }) {

  const borderRdiusBotton = '16px'

  const styleButtonSelector = {
    height: '300px',
    width: '250px',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderRadius: borderRdiusBotton,
    // backgroundColor: 'red'
    border:`4px solid ${typesPokemon[battleState.trainer.user.theme].colors.primary}`
  }
  return (
    <div
      className='content-alert-standard '
    >
      <div className="bg-panel"></div>

      <div className="panel-info overflow-hidden"
        style={{
          backgroundColor: typesPokemon[battleState.trainer.user.theme].colors.background,
          border:` 2px solid ${typesPokemon[battleState.trainer.user.theme].colors.primary}`
        }}
      >
        <div className="content-title relative"
          style={{
            height: '40%',
            backgroundColor: typesPokemon[battleState.trainer.user.theme].colors.primary
          }}
        >
          <h1 className="content-title"
          style={{
            color:typesPokemon[battleState.trainer.user.theme].colors.textDark
          }}
          >
            {" "}
            {`Select a Battle Mode`}
          </h1>
          <h3
          style={{
            color:typesPokemon[battleState.trainer.user.theme].colors.textWhite
          }}
          >
            {`Select your preferred mode and dive into the action!`}
          </h3>
        </div>

        <div className="info flex-all-center "
          style={{
            // backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            gap: '40px'

          }}
        >
          <button className='none-styles-button flex-all-center overflow-hidden'
            style={styleButtonSelector}
            onClick={() => methods.changeActualPhase(battleState.phase.actual + 1)}
          >
            <div
            className='flex-all-center'
              style={{
                height: '60%',
                width: '100%',
                // backgroundColor: 'green',
                backgroundColor: typesPokemon[battleState.trainer.user.theme].colors.secondary,
              }}
            >
              <Image src={Pokeball} height={150}width={150} alt={'Image_Pokeball_background'}/>
            </div>
            <div
              className='flex-all-center'
              style={{
                height: '40%',
                width: '100%',
                backgroundColor: typesPokemon[battleState.trainer.user.theme].colors.primary,
                flexDirection: 'column',

              }}
            >
              <h1
                className='percentage-100-width'
                style={{
                  // textAlign: 'left',
                  // paddingLeft: '5%',
                  // backgroundColor: 'red',
                  color: typesPokemon[battleState.trainer.user.theme].colors.textDark,
                }}
              >{`${battleState.trainer.user.gametag}`}
              </h1>
              <h2
                style={{
                  color: typesPokemon[battleState.trainer.user.theme].colors.textWhite,

                }}
              >{` vs `}</h2>
              <h1
                className='percentage-100-width'
                style={{
                  // textAlign: 'right',
                  // paddingRight: '5%',
                  // backgroundColor: 'red',
                  color: typesPokemon[battleState.trainer.user.theme].colors.textDark
                }}
              >{`rival (IA)`}</h1>
            </div>
          </button>
          

          {/* <button
            disabled={true}
            className='none-styles-button outline-box-big border-radius-big'
            style={styleButtonSelector}
            onClick={() => { }}
          >
            {`P vs P`}
          </button>

          <button
            disabled={true}
            className='none-styles-button outline-box-big border-radius-big'
            style={styleButtonSelector}
            onClick={() => { }}
          >
            {`League`}
          </button> */}
        </div>

      </div>

    </div>
  )
}

export default SelectMode
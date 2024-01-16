import React from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'

function CardsSelectorItem({ index, actualIndex = 0, handlerSelector, theme }) {

  const sizeButton = 20
  const validation = index === actualIndex
  return (
    <button
      className='none-styles-button transition-small cursor-pointer'
      style={{
        backgroundColor: validation
          ? `${typesPokemon[theme].colors.primary}` : `${typesPokemon[theme].colors.secondary}`,
        scale: validation ? '1.18' : '1',
        borderRadius: '50%',
        height: `${sizeButton}px`,
        width: `${sizeButton}px`,
      }}
      onClick={() => { handlerSelector(index) }}></button>
  )
}

export default CardsSelectorItem
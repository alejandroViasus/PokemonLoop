import React from 'react'

function CardsSelectorItem({index,handlerSelector}) {
  return (
    <button onClick={()=>{handlerSelector(index)}}>ss</button>
  )
}

export default CardsSelectorItem
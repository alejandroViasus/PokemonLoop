import React from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'

function Fire({type,subColor='primary',color=''}) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={95}
    height={95}
    fill="none"
    
  >
    <path
      fill={
        color!==''
        ?color
        :typesPokemon[type].colors[subColor]
      }
      d="M22.433 89.454c-6.682-4.543-11.226-9.367-13.821-14.67-2.062-4.215-2.286-5.595-1.924-11.849.357-6.169 1.005-8.347 5.04-16.951 2.546-5.43 5.008-11.299 5.47-13.041l.84-3.168 1.05 2.616c.576 1.438 1.343 4.663 1.703 7.167l.655 4.552 3.902-5.169c8.32-11.018 13.743-23.816 13.743-32.427v-4.38l3.394 1.733c7.52 3.84 16.776 16.174 20.122 26.813 1.693 5.38 2.51 5.728 4.163 1.77.96-2.296 1.328-5.05 1.055-7.889l-.419-4.361 2.211 2.072c3.397 3.184 10.038 13.602 12.703 19.925 2.06 4.891 2.399 7 2.435 15.183.038 8.801-.16 9.901-2.674 14.89-1.493 2.963-4.752 7.465-7.24 10.003-4.645 4.737-13.132 11.06-13.114 9.77.011-.398.616-2.723 1.357-5.166 1.551-5.112 1.735-16.31.366-22.256-1.491-6.474-6.117-14.956-10.845-19.888-2.4-2.502-4.746-4.55-5.216-4.55-.47 0-1.02 2.75-1.225 6.11-.255 4.194-1.193 7.92-2.994 11.883l-2.622 5.775-1.022-5.117c-1.45-7.265-2.61-7.973-4.409-2.693-.812 2.384-3.102 7.07-5.087 10.413-4.985 8.39-6.018 13.313-4.248 20.25.76 2.981 1.317 5.477 1.237 5.545-.081.068-2.144-1.235-4.586-2.895Z"
    />
  </svg>
  )
}

export default Fire
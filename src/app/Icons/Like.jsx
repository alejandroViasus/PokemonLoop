import React from 'react'

function Like({color='rgba(22,22,22,1)'}) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={12}
    fill="none"
  >
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          fill={color}
          d="M5.067 9.988c-2.085-1.78-2.613-2.28-3.057-2.887-.324-.444-.7-1.205-.834-1.692-.135-.49-.158-1.332-.051-1.83a4.006 4.006 0 0 1 1.084-1.962C3.69.112 5.456.105 6.96 1.6c.145.144.283.263.307.263.023 0 .165-.117.315-.26.54-.513 1.167-.862 1.82-1.013 2.141-.495 4.442 1.846 4.132 4.204-.101.764-.381 1.449-.895 2.185-.448.64-1.123 1.252-3.369 3.05-1.132.906-2.09 1.652-2.129 1.658-.045.006-.821-.63-2.073-1.699Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill={color} d="M0 0h14v12H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill={color} d="M5.21-5.6 17.504 5.665l-8.21 8.96L-3 3.36z" />
      </clipPath>
    </defs>
  </svg>
  )
}

export default Like
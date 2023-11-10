import * as React from "react"
const IconNone = ({fill='rgba(22,22,22,1)'}) => (
    <svg
    className="icon-type-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 25"
  >

    <rect
      width={4.454}
      height={20.914}
      x={10.273}
      y={-22.957}
      fill={fill}
      rx={1.03}
      ry={0}
      transform="rotate(90)"
    />
    <rect
      width={4.454}
      height={20.914}
      x={-14.727}
      y={-22.957}
      fill={fill}
      rx={1.03}
      ry={0}
      transform="scale(-1)"
    />
  </svg>
)

export default IconNone
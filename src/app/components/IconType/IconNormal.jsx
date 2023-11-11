import * as React from "react";
const IconNormal = ({ fill = "rgba(22,22,22,1)" }) => (
  <svg
    className="icon-type-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 25"
  >
    <g fill={fill}>
      <ellipse cx={12.5} cy={12.5} fill={fill} rx={8.534} ry={8.358} />
    </g>
  </svg>
);

export default IconNormal;

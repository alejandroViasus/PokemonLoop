import React from "react";
import Link from "next/link";

function NavigationMenuItems({ item }) {
  //console.log(item);
  return (
    <Link href={`${item.route}`}>
      <h3>{item.title}</h3>
    </Link>
  );
}

export default NavigationMenuItems;

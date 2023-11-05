import React from "react";
import Link from "next/link";

function NavigationMenuItems({ item ,id}) {
  //console.log(item);
  return (
    <Link href={`${item.route(id)}`}>
      <h3>{item.title}</h3>
    </Link>
  );
}

export default NavigationMenuItems;

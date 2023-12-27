import React from "react";
import Link from "next/link";
import { typesPokemon } from "@/Assets/typesPokemon";

function NavigationMenuItems({ item, id, theme }) {
  //console.log(item);
  return (
    <Link
      className="content-navigation-menu-items flex-all-center text-decoration-none"
      href={`${item.route(id)}`}
    >
      <h3
        className="title"
        style={{
          color: typesPokemon[theme].colors.text,
        }}
      >
        {item.title}
      </h3>
    </Link>
  );
}

export default NavigationMenuItems;

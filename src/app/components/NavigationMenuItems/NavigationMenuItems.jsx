import React from "react";
import Link from "next/link";
import { typesPokemon } from "@/Assets/typesPokemon";
import { useParams } from "next/navigation";

function NavigationMenuItems({ item, id, theme,focus }) {
  //console.log(item);
  const params = useParams()
  return (
    <Link
      className="content-navigation-menu-items flex-all-center text-decoration-none"
      href={`${item.route(id)}`}
    >
      <h3
        className="title text-decoration-none"
        style={{
          color: focus?typesPokemon[theme].colors.textWhite:typesPokemon[theme].colors.secondary,
        }}
      >
        {item.title}
      </h3>
    </Link>
  );
}

export default NavigationMenuItems;

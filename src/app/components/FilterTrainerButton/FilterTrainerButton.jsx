import React from "react";
import Image from "next/image";
import { trainers } from "@/Assets/trainers";

function FilterTrainerButton({ trainer, handleState, format = "image" }) {
  const sizeButtonWidth = 150;
  const sizeButtonHeight = 250; // Cambiado para que coincida con el ancho
  

  return (
    <button
      onClick={() => handleState(trainer)}
      style={{
        width: `${sizeButtonWidth}px`,
        height: `${sizeButtonHeight}px`,
        position: 'relative', // Añadido para que Image pueda llenar el espacio
      }}
    >
      <Image
        src={trainers[trainer][format]}
        alt={`image-trainer-${trainer}`}
        width={sizeButtonWidth}
        height={sizeButtonHeight}
        style={{  width: '100%', height: "auto", objectFit: 'cover' }}
      />
    </button>
  );
}

export default FilterTrainerButton;


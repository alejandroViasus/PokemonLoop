import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { typesPokemon } from "@/Assets/typesPokemon";

function ItemsDetail({ element }) {
  const globalState = useSelector((state) => state.valueState);
  const styleContentItem = {
    //backgroundColor: "blue",
    height: "auto",
    justifyContent: "flex-start",
    gap:'20px'
  };

  const flexData={
    display:'flex',
    flexDirection:'column'
  }
  const styleData={
   //color:'red',
   
  }

  return (
    <div
      className="percentage-100-width flex-all-center"
      style={styleContentItem}
    >

        <div
        className="flex-all-center"
        style={{
            height:'50px',
            width:'50px',
            backgroundColor:`${typesPokemon[globalState.user.theme].colors.primary}`

        }}
        >a</div>
      <div className=""
      style={flexData}
      >
        <h2
         className=""
         style={{
            color:`${ typesPokemon[globalState.user.theme].colors.textWhite}`
         }}
        >{element.toUpperCase()}</h2>
        <h4
        className="font-button-in"
        style={styleData}
        >{globalState.user[element]}</h4>
      </div>
    </div>
  );
}

export default ItemsDetail;

import React from "react";

function FileAlertCeroTeam({handlerCeroTeam,description=' You don’t have a Pokemon team.'}) {
  return (
    <div>
      {" "}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(22,22,22,0.8)",
          color: "rgba(222,222,222,1)",
          zIndex:10
        }}
      >
        <div
          style={{
            width: "75%",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(100,100,100,1)",
            color: "rgba(222,222,222,1)",
          }}
        >
          <h1>{description}</h1>
          <button onClick={() =>handlerCeroTeam("home")}>Go to Home</button>
          <button onClick={() => handlerCeroTeam("cards")}>Go to Carts</button>
        </div>
      </div>
    </div>
  );
}

export default FileAlertCeroTeam;

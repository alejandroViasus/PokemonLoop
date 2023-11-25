import React from "react";

function FilleAlertTeam({ handleAlertTeam}) {
  return (
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
        zIndex:10,
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
        <h3>Your Pokemon team is very small</h3>
        <h1> Do you want to continue?</h1>
        <button onClick={() => handleAlertTeam("No")}>No</button>
        <button onClick={() => handleAlertTeam("Yes")}>Yes</button>
      </div>
    </div>
  );
}

export default FilleAlertTeam;

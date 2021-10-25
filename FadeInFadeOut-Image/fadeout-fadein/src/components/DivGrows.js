import { makeStyles } from "@material-ui/core";
import React from "react";

const customStyles = makeStyles((theme) => ({
  app: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "pink",
  },
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  bigContainer: {
    width: "30vw",
    position: "absolute",
    backgroundColor: "green",
    minHeight: "900px",
  },
}));

function DivGrows() {
  const customClasses = customStyles();
  return (
    <div className={customClasses.app}>
      <div className={customClasses.container}>
        <div className={customClasses.bigContainer}></div>
      </div>
    </div>
  );
}

export default DivGrows;

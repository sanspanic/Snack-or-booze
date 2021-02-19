import React from "react";
import "./MissingPage.css";
import notFound from "./imgs/404.png";

const MissingPage = () => {
  return (
    <div className="MissingPage-div">
      <p>Oops! This link doesn't appear to exist.</p>
      <img className="MissingPage-img" src={notFound}></img>
    </div>
  );
};

export default MissingPage;

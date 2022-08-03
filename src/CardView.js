import React from "react";
import "./cardview.css";
import { CardData } from "./Data";
// import { useState } from "react";
// import { CardData } from "./CardData";

export default function CardView() {
  console.log(CardData);

  return (
    <div>
      <div className="row">
        {CardData.map((item) => {
          return (
            <div className="card">
              <div className="card1">
                <label>{item.name}</label>
                <label>{item.model}</label>
              </div>
              <div className="card2">
                <label>{item.ram}</label>
                <label>{item.rom}</label>
                <label>{item.camera}</label>
                <label>{item.size}</label>
              </div>
              <div className="card3">
                <label>{item.price}</label>
              </div>
              <div className="card4">
                <button className="btn1"> Add to Cart</button>
              </div>
              <div className="card5">
                <img className="image" src={item.src}></img>
              </div>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
}

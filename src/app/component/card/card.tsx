import React from "react";
import { ICard } from "../../models/card.model";
import "./card.css";

const Card = (props: ICard): any => {
  return (
    <div className="card">
      <img className="card__image" src={props.image} alt="this is test alt" />
      <div className="card__content">
        <h3>{props.title}</h3>
        <p>{props.text} </p>
      </div>
    </div>
  );
};

export default React.memo(Card);

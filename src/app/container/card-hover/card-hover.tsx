import React, { useState } from "react";
import Card from "../../component/card/card";
import { ICard } from "../../models/card.model";
import "./card-hover.css";

const CardHover = () => {
  const [cardsState] = useState({
    cards: [
      {
        id: "Card_1",
        image: require("../../../assets/images/grand.jpg"),
        title: "Grand Canyon",
        text:
          "This is the wonder ful place in america. There is a movie called 127 based here."
      },
      {
        id: "Card_2",
        image: require("../../../assets/images/digital.png"),
        title: "Digital Eye",
        text:
          "A way to digitalize the enterprise operations and to know the benefits of technology you have to make sure you are champ in it."
      },
      {
        id: "Card_3",
        image: require("../../../assets/images/eclipse.jpg"),
        title: "Eclipse",
        text: "Eclipse occurs when earth comes in front of moon."
      }
    ] as ICard[]
  });

  const cardsElements = cardsState.cards.map((card: ICard) => (
    <Card
      key={card.id}
      image={card.image}
      title={card.title}
      text={card.text}
    />
  ));

  return <div className="container">{cardsElements}</div>;
};

export default CardHover;

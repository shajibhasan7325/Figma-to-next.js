import { InnerCard } from "@/styles/Home.styled";
import React from "react";

const Card: React.FC = () => {
  return (
    <InnerCard>
      {dogsData.map((dog) => {
        return (
          <div>
            <img src={dog.dogImg} alt="" />
            <h4>{dog.title}</h4>
            <p>{dog.subtitle}</p>
            <div className="price">
              <p>{dog.price}</p>
              <img src={dog.heart} alt="" />
            </div>
            <p>{dog.details} </p>
          </div>
        );
      })}
    </InnerCard>
  );
};

export default Card;

const dogsData = [
  {
    dogImg: "/dog/dog1.png",
    title: "eliteboerboel",
    subtitle: "boerboel",
    price: "$8330",
    heart: "/heart-Filled.png",
    details: "Beach Haven Jacksonville, FL ",
  },
  {
    dogImg: "/dog/dog2.png",
    title: "eliteboerboel",
    subtitle: "boerboel",
    price: "$8330",
    heart: "/heart-Light.png",
    details: "Beach Haven Jacksonville, FL ",
  },
  {
    dogImg: "/dog/dog3.png",
    title: "eliteboerboel",
    subtitle: "boerboel",
    price: "$8330",
    heart: "/heart-Filled.png",
    details: "Beach Haven Jacksonville, FL ",
  },
  {
    dogImg: "/dog/dog4.png",
    title: "eliteboerboel",
    subtitle: "boerboel",
    price: "$8330",
    heart: "/heart-Light.png",
    details: "Beach Haven Jacksonville, FL ",
  },
  {
    dogImg: "/dog/dog5.png",
    title: "eliteboerboel",
    subtitle: "boerboel",
    price: "$8330",
    heart: "/heart-Light.png",
    details: "Beach Haven Jacksonville, FL ",
  },
  {
    dogImg: "/dog/dog6.png",
    title: "eliteboerboel",
    subtitle: "boerboel",
    price: "$8330",
    heart: "/heart-Light.png",
    details: "Beach Haven Jacksonville, FL ",
  },
  {
    dogImg: "/dog/dog7.png",
    title: "eliteboerboel",
    subtitle: "boerboel",
    price: "$8330",
    heart: "/heart-Light.png",
    details: "Beach Haven Jacksonville, FL ",
  },
  {
    dogImg: "/dog/dog8.png",
    title: "eliteboerboel",
    subtitle: "boerboel",
    price: "$8330",
    heart: "/heart-Light.png",
    details: "Beach Haven Jacksonville, FL ",
  },
  {
    dogImg: "/dog/dog4.png",
    title: "eliteboerboel",
    subtitle: "boerboel",
    price: "$8330",
    heart: "/heart-Light.png",
    details: "Beach Haven Jacksonville, FL ",
  },
  {
    dogImg: "/dog/dog2.png",
    title: "eliteboerboel",
    subtitle: "boerboel",
    price: "$8330",
    heart: "/heart-Filled.png",
    details: "Beach Haven Jacksonville, FL ",
  },
  {
    dogImg: "/dog/dog1.png",
    title: "eliteboerboel",
    subtitle: "boerboel",
    price: "$8330",
    heart: "/heart-Filled.png",
    details: "Beach Haven Jacksonville, FL ",
  },
];

import React from "react";
import Star from './assets/star.png';

interface CardProps {
  img: string;
  rating: number;
  reviewCount: number;
  country: string;
  title: string;
  price: string;
}

export default function Card(props: CardProps): React.ReactElement {
  return (
    <div className="BO">
      <div className="pics">
        <img src={props.img} alt="img" />
        <div className="info">
          <img src={Star} alt="star" className="stars" />
       
          <span>{props.rating}</span>
          <span>{props.reviewCount}</span>
          <span>{props.country}</span>
     
        </div>
        <div className="other">
          <p>{props.title}</p>
        </div>
        <div className="others">
          <p>{props.price}</p>
        </div>
      </div>
    </div>
  );
}
import React from "react";

export default function Meme(props) {
  return (
    <>
      <img src={props.imageUrl} />
      <span>{props.topText}</span>
      <span>{props.bottomText}</span>
    </>
  );
}

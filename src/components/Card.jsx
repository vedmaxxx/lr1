import React, { useState } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className="img_container">
        <img src={props.image} alt="" />
      </div>

      <div className={classes.info}>
        <a href="" className={`${classes.price} ${classes.link}`}>
          ${props.price}
        </a>
        <a href="" className={`${classes.title} ${classes.link}`}>
          {props.title}
        </a>
        <div href="" className={classes.description}>
          Описание
          <div className={classes.description_on}>{props.description}</div>
        </div>
        <a href="" className={classes.category}>
          {props.category}
        </a>
        <div className={classes.rating}>
          {props.rating?.rate},{props.rating?.count}
        </div>
      </div>
      <button
        className={classes.delete}
        onClick={() => {
          props.deleteProduct(props.id);
        }}
      >
        Удалить
      </button>
    </div>
  );
};

export default Card;

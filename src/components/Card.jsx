import React from "react";
import classes from "./Card.module.css";

const Card = () => {
  return (
    <div className={classes.card}>
      {/* <a href="" className={classes.img_holder}>
        <div className={classes.img}>
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
        </div>
      </a> */}
      <div className="img_container">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
      </div>

      <div className={classes.info}>
        <a href="" className={`${classes.price} ${classes.link}`}>
          7.999 &#8381;
        </a>
        <a href="" className={`${classes.title} ${classes.link}`}>
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </a>
        {/* <div className={classes.description}>Описание</div> */}
        <div className={classes.category}>Категория</div>
        <div className={classes.rating}>Рейтинг: оценка, кол-во оценок</div>
      </div>
    </div>
  );
};

export default Card;

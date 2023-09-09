import React from "react";
import Card from "./Card";
import classes from "./ProductList.module.css";

const ProductList = ({ productList, deleteFunc }) => {
  return (
    <div className={classes.list}>
      {productList.map((product) => (
        <Card
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          rating={product.rating}
          deleteProduct={deleteFunc}
        />
      ))}
    </div>
  );
};

export default ProductList;

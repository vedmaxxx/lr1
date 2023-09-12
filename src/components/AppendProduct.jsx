import React, { useState } from "react";
import classes from "./AppendProduct.module.css";

const AppendProduct = ({ appendProduct }) => {
  const [title, setTitle] = useState("новый элемент");
  const [price, setPrice] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [category, setCategory] = useState(" ");
  const [image, setImage] = useState(" ");

  const addNewProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      id: new Date(),
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,
      rating: {
        rate: 0,
        count: 0,
      },
    };
    appendProduct(newProduct);
  };

  return (
    <div>
      {""}
      <form onSubmit={addNewProduct} className={classes.form}>
        <div>
          title
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          price
          <input
            type="text"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div>
          description
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          category
          <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
        <div>
          image
          <input
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <button>Добавить</button>
      </form>
    </div>
  );
};
export default AppendProduct;

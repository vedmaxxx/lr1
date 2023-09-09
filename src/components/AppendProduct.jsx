import React, { useState } from "react";

const AppendProduct = ({ appendProduct }) => {
  console.log("отрабатывает AppendProduct");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

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
  };

  return (
    <div>
      {""}
      <form onSubmit={appendProduct}>
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

import React, { useRef } from "react";

import Card from "./ui/Card";
import classes from "./NewProductForm.module.css";
import { ProductDataInt } from "../pages/models/product";

const NewProductForm: React.FC<{ onAdd: VoidFunction }> = ({ onAdd }) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>();
  const urlInputRef = useRef<HTMLInputElement>();
  const priceInputRef = useRef<HTMLInputElement>();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current!.value;
    const enteredDescription = descriptionInputRef.current!.value;
    const enteredImage = urlInputRef.current!.value;
    const enteredPrice = priceInputRef.current!.value;

    const productData: ProductDataInt = {
      name: enteredName,
      description: enteredDescription,
      url: enteredImage,
      price: enteredPrice,
    };

    onAdd(productData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Product name</label>
          <input type="text" required id="title" ref={nameInputRef} />

          <label htmlFor="image">Product Image</label>
          <input type="url" required id="image" ref={urlInputRef} />

          <label htmlFor="address">Price</label>
          <input type="text" required id="address" ref={priceInputRef} />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="1"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Product</button>
        </div>
      </form>
    </Card>
  );
};

export default NewProductForm;

import { useRef } from "react";

import Card from "./ui/Card";
import classes from "./NewProductForm.module.css";

function NewProductForm({ onAdd }) {
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const urlInputRef = useRef();
  const priceInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredImage = urlInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;

    const productData = {
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
}

export default NewProductForm;

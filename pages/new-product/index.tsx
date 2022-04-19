import Router from "next/router";
import { FC } from "react";
import NewProductForm from "../../components/NewProductForm";

const NewProductPage: FC = () => {
  async function onAddHandler(productData) {
    console.log("body", JSON.stringify(productData));
    try {
      const response = await fetch("/api/new-product", {
        method: "POST",
        body: JSON.stringify(productData),
        headers: { "Content-Type": "application/json" },
      });
      console.log("response", response.status, response.json());
    } catch (err) {
      console.log("error", err.message);
    }
  }

  return <NewProductForm onAdd={onAddHandler} />;
};

export default NewProductPage;

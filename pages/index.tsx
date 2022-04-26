import React, { useState } from "react";
import Head from "next/head";
import BrandDescription from "../components/BrandDescription";
import ProductsList from "../components/ProductsList";
import { MongoClient } from "mongodb";
import { Product } from "./models/product";

const Home: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <main className="">
      <Head>
        <title>Liberi Kids</title>
        <meta name="description" content="ropa de niños" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BrandDescription />
      <ProductsList products={products} />
    </main>
  );
};

export async function getStaticProps() {
  let results: object[] = [];
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://gasparcastello:laspelotas00@cluster0.5x9b6.mongodb.net/liberidb?retryWrites=true&w=majority"
    );
    const db = client.db();
    const productCollection = db.collection("products");
    results = await productCollection.find().toArray();
    client.close();
  } catch (err) {
    alert(err);
  }
  return {
    props: {
      products: results.map((product) => ({
        id: product._id.toString(),
        name: product.name,
        description: product.description,
        url: product.url,
        price: product.price,
      })),
    },
  };
}

export default Home;

// import { FC } from "react";
// import Router from "next/router";
// import { MongoClient } from "mongodb";
// import NewProductForm from "../../components/NewProductForm";

// const NewProductPage: FC = () => {
//   async function onAddHandler(productData) {
//     console.log("body", JSON.stringify(productData));
//     try {
//       const response = await fetch("/api/new-product", {
//         method: "POST",
//         body: JSON.stringify(productData),
//         headers: { "Content-Type": "application/json" },
//       });
//       console.log("response", response.status, response.json());
//     } catch (err) {
//       console.log("error", err.message);
//     }
//   }

//   return <NewProductForm onAdd={onAddHandler} />;
// };

// export async function getStaticPaths(context: any) {
//   return {
//     fallback: true,
//     paths: [
//       { params: { _id: "625f34f2e32369a5862e959d" } },
//       { params: { _id: "625f35bfe32369a5862e959f" } },
//       { params: { _id: "test3" } },
//     ],
//   };
// }

// export async function getStaticProps() {
//   let products;
//   try {
//     const client = await MongoClient.connect(
//       "mongodb+srv://gasparcastello:laspelotas00@cluster0.5x9b6.mongodb.net/liberidb?retryWrites=true&w=majority"
//     );
//     const db = client.db();
//     const productCollection = db.collection("products");
//     products = await productCollection.find().toArray();
//     console.log(products, "results");
//     client.close();
//   } catch (err) {
//     console.log("error", err.message);
//   }
//   return { props: products };
// }

// export default NewProductPage;

import { MongoClient } from "mongodb";

// type Data = {
// name: string
// }

export default async function handler(req, res) {
  const { body, method } = req;
  try {
    switch (method) {
      case "POST":
        const client = await MongoClient.connect(
          "mongodb+srv://gasparcastello:laspelotas00@cluster0.5x9b6.mongodb.net/liberidb?retryWrites=true&w=majority"
        );
        const db = client.db();
        const productCollection = db.collection("products");
        const result = await productCollection.insertOne(body);
        console.log(result, "result");
        client.close();
        res.status(200).json({ message: "added to products collection" });
      case "GET":
        // res.status(200).json({ id });
        break;
    }
  } catch (err) {
    console.log("error", err.message);
  }
}

// import styles from "./ProductsList.module.css";
import "bulma/css/bulma.min.css";
import Product from "./Product";

const ARRAY_PRODUCTS = [
  {
    id: 1,
    name: "Remera Modelo Fauna",
    description: "",
    price: 12,
    url: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZCUyMGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Remera Modelo Fauna",
    description: "",
    price: 52,
    url: "https://images.unsplash.com/photo-1619784299133-f691ffaea42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8a2lkcyUyMGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Remera Modelo Fauna",
    description: "",
    price: 7,
    url: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2lkcyUyMGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Remera Modelo Fauna",
    description: "",
    price: 30,
    url: "https://images.unsplash.com/photo-1530845645774-eed359045642?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    name: "Remera Modelo Fauna",
    description: "",
    price: 22,
    url: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Remera Modelo Fauna",
    description: "",
    price: 15,
    url: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Remera Modelo Fauna",
    description: "",
    price: 15,
    url: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Remera Modelo Fauna",
    description: "",
    price: 15,
    url: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Remera Modelo Fauna",
    description: "",
    price: 15,
    url: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Remera Modelo Fauna",
    description: "",
    price: 15,
    url: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Remera Modelo Fauna",
    description: "",
    price: 15,
    url: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Remera Modelo Fauna",
    description: "",
    price: 15,
    url: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

function ProductsList(props) {
  return (
    <div className="container is-flex is-justify-content-space-around is-flex-wrap-wrap">
      {ARRAY_PRODUCTS.map((user) => (
        <Product
          key={user.id}
          id={user.id}
          name={user.name}
          description={user.description}
          price={user.price}
          url={user.url}
        />
      ))}
    </div>
  );
}

export default ProductsList;

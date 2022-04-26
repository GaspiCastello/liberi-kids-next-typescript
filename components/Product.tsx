// import Image from "next/image";
import styles from "./Product.module.css";

function Product({ id, name, description, url, price }) {
  return (
    <div className={`${styles.card} card `} id={id}>
      <div className={`${styles.cardimage} card-image `}>
        <img
          className={styles.img}
          src={url}
          alt="Placeholder"
          // width="120"
          // height="120"
        />
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left"></div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{description}</p>
            <p className="subtitle is-6">${price}ARS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

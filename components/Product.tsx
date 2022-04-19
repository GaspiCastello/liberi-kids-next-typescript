import "bulma/css/bulma.min.css";
import styles from "./Product.module.css";


function Product(props) {
  return (
      <div className={`${styles.card} card `} key={props.key}>
        <div className={`${styles.cardimage} card-image `}>
          <img
            className={styles.img}
            src={props.url}
            alt="Placeholder"
          ></img>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left"></div>
            <div className="media-content">
              <p className="title is-4">{props.name}</p>
              <p className="subtitle is-6">{props.description}</p>
              <p className="subtitle is-6">${props.price}ARS</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Product;   
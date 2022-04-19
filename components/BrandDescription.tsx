import { FC } from "react";
import "bulma/css/bulma.min.css";
import styles from "../styles/BrandDescription.module.css";

const BrandDescription: FC = () => {
  return (
    <section className={styles.branddescription}>
      <div className="tile is-ancestor">
        <div className="tile is-3 "></div>
        <div className="tile is-6 is-vertical is-parent mt-6">
          <div className="tile is-child">
            <p className="title brand-description-title box">
              INDUMENTARIA PARA INFANCIAS LIBRES
            </p>
          </div>
          <div className="tile is-child">
            <p className=" brand-description box">
              Nuestras prendas LIBERI estan pensadas desde la libertad, el amor
              y lo ludico. Creemos en las infancias múltiples, diversas,
              singulares, creativas, y sobre todo, coloridas. Lo propio de las
              infancias es la invención y creación, por eso apostamos a la
              construcción de un nuevo paradigma donde abunden las posibilidades
              de expresión para nuestrxs niñxs
            </p>
          </div>
        </div>
      </div>
      ;
    </section>
  );
};

export default BrandDescription;

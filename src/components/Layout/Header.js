import React from "react";
import pizzaImage from "../../assets/pizza.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Kvadrat Pizza</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={pizzaImage} alt="Піца" />
      </div>
    </React.Fragment>
  );
};

export default Header;

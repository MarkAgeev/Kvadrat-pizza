import styles from "./PromoText.module.css";

const PromoText = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>Kvadrat Pizza</h2>
      <p>
        Kvadrat Pizza – это сервис доставки классической и авторской пиццы, приготовленной 
        из свежих продуктов без предварительных заготовок.
      </p>
      <p>
        Мы существуем для того, чтобы делать тебя счастливее! Чтобы каждый раз, когда будешь 
        смаковать нашей пиццей – ты получал не просто удовольствие, а удовольствие в квадрате.
      </p>
    </section>
  );
};

export default PromoText;

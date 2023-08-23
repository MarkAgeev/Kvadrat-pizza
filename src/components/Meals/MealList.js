import styles from "./MealList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: 'Пицца Гавайская',
    description:
      "моцарелла, ананас, курица запеченная, сливочный соус",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Пицца Диабло",
    description: "моцарелла, пикантная салями, фасоль красная, перец чили, лук маринованный, соус ширачи, томатный соус",
    price: 13.99,
  },
  {
    id: "m3",
    name: "Пицца Пепперони",
    description: "моцарелла, пикантная салями, томатный соус",
    price: 14.99,
  },
  {
    id: "m4",
    name: 'Пицца Капричиоза',
    description:
      "моцарелла, помидоры, шампиньоны, ветчина, маслины, томатный соус",
    price: 10.99,
  },
  {
    id: "m5",
    name: 'Пицца Палермо',
    description:
      "моцарелла, помидоры, ветчина, бекон, салями, кукуруза, томатный соус",
    price: 12.99,
  },
];

const MealList = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealList;

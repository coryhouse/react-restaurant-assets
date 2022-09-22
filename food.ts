type Food = {
  name: string;
  image: string;
  price: number;
  description: string;
  tags: Array<FoodTag>;
};

type FoodTag =
  | "Breakfast"
  | "Lunch"
  | "Dinner"
  | "Dessert"
  | "Drink"
  | "Appetizer"
  | "Spicy"
  | "Vegetarian";

const foods: Array<Food> = [
  {
    name: "Burger",
    image: "burger.jpg",
    price: 8.99,
    description: "A delicious burger with lettuce and tomato",
    tags: ["Lunch", "Dinner"],
  },
  {
    name: "Pizza",
    image: "pizza.jpg",
    price: 12.99,
    description: "A delicious pizza with cheese and tomato",
    tags: ["Lunch", "Dinner"],
  },
  {
    name: "Banana Blueberry French Toast",
    image: "banana-french-toast.jpg",
    price: 9.99,
    description: "A delicious french toast with banana and blueberry",
    tags: ["Breakfast"],
  },
  {
    name: "cajun-pasta",
    image: "cajun-pasta.jpg",
    price: 16.99,
    description: "A delicious cajun pasta with shrimp and vegetables",
    tags: ["Lunch", "Dinner", "Spicy"],
  },
];

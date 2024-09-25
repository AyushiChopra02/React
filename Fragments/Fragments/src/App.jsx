import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Container from "./components/container";
import FoodInput from "./components/FoodInput";

function App() {
  const [foodItems, setFoodItems] = useState(["Dal", "roti", "chawal"]);
  const [textToShow, setTextToShow] = useState("Food to enter");

  const handleOnChange = (event) => {
    setTextToShow(event.target.value);
  };

  if (foodItems.length === 0) {
    return <h3>I'm still hungry</h3>;
  }

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleOnChange={handleOnChange} />
      <p>{textToShow}</p>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
      <button
        className="btn btn-info"
        onClick={() => console.log("Buy button clicked")}
      >
        Buy
      </button>
    </Container>
  );
}

export default App;

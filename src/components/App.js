import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaToEdit, setPizzaToEdit] = useState({
    topping: "",
    size: "Small",
    vegetarian: false,
  });

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then(response => response.json())
      .then(data => setPizzas(data))
  }, [])

  function handleEditSubmit(updatedPizza) {
    const newPizzas = pizzas.map(pizza => {
      if (pizza.id === updatedPizza.id) {
        return updatedPizza
      } else { return pizza }
    })
    setPizzas(newPizzas);
    setPizzaToEdit({
      topping: "",
      size: "Small",
      vegetarian: false,
    })
  }

  function handleChangeForm(name, value) {
    if (name === "vegetarian") {
      const bool = (value === "Vegetarian") ? true : false
      setPizzaToEdit({...pizzaToEdit, vegetarian: bool})
    } else {
      setPizzaToEdit({...pizzaToEdit, [name]: value})
    }
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={pizzaToEdit} onEditSubmit={handleEditSubmit} onChangeForm={handleChangeForm} />
      <PizzaList pizzas={pizzas} onEditClick={setPizzaToEdit} />
    </>
  );
}

export default App;

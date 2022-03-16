import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, onEditClick }) {
  const pizzaArray = pizzas.map(pizza => {
    return <Pizza key={pizza.id} pizza={pizza} onEditClick={onEditClick} />
  })
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzaArray
        }
      </tbody>
    </table>
  );
}

export default PizzaList;

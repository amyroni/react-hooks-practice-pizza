import React from "react";

function PizzaForm({ pizza, onChangeForm, onEditSubmit }) {
  function handleChangeForm(event) {
    onChangeForm(event.target.name, event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:3001/pizzas/${pizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian
      })
    }).then(response => response.json())
      .then(updatedPizza => onEditSubmit(updatedPizza))
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={pizza.topping}
            onChange={(event) => handleChangeForm(event)}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={pizza.size} onChange={(event) => handleChangeForm(event)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={(event) => handleChangeForm(event)}
              checked={pizza.vegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={(event) => handleChangeForm(event)}
              checked={!pizza.vegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;

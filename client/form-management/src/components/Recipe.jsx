import React from "react";

const Recipe = ({ recipe }) => {
  console.log(recipe);
  const { name, course, technique, ingredients } = recipe;
  return (
    <div>
      <header>
        <h3>{name}</h3>
        <h5>{course}</h5>
      </header>
      <main>
        <p>{technique}</p>
        <ul>
          {ingredients.map(ingredient => (
            <li>{ingredient}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Recipe;

import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utility/axiosWithAuth";
import NavBar from "../components/NavBar"
import Recipe from "../components/Recipe";

const RecipeList = ({setToken}) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/restricted/data")
      .then(res => {
        setRecipes(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);
  return (
    <div>
      <NavBar setToken={setToken}/>
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;

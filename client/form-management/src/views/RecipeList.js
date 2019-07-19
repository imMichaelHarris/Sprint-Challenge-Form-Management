import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utility/axiosWithAuth";
import Recipe from "../components/Recipe";

const RecipeList = ({ token }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axiosWithAuth
      .get("/restricted/data", {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        console.log(res);
        setRecipes(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);
  console.log(recipes)
  return (
    <div>
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;

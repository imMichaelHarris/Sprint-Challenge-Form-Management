import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utility/axiosWithAuth";

const RecipeList = ({ token }) => {
  const [recipes, setRecipes] = useState();
  useEffect(() => {
    axiosWithAuth
      .get("/restricted/data", {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);
  return <div>List</div>;
};

export default RecipeList;

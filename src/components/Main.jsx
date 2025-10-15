import React, { useEffect, useRef } from "react";
import { useState } from "react";
import HuggingFaceRecipe from "./HuggingFaceRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

const Main = () => {
  const [ingredients, setIngredients] = React.useState([]);

  const recipeSection = useRef(null);
  console.log(recipeSection);

  const [recipe, setRecipe] = useState("");

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      // recipeSection.current.scrollIntoView({ behavior: "smooth" });
      const yCoord =
        recipeSection.current.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: yCoord,
        behavior: "smooth",
      });
    }
  }, [recipe]);

  const getRecipe = async () => {
    // setRecipeShown((prevShown) => !prevShown);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    // console.log(recipeMarkdown);
  };

  const addItem = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  };

  return (
    <main>
      {/* <form action="" onSubmit={handleSubmit}>
      // let's use action now
      */}
      <form action={addItem}>
        <input
          className="form-input"
          name="ingredient" // because of this name, url will be http://localhost:5173/?ingredient=hi
          aria-label="add ingredient"
          type="text"
          placeholder="e.g. eggs"
        />
        <button className="add-ingredient-btn" type="submit">
          + Add Ingredient
        </button>
      </form>
      {/* better to mention the explicit checking like > 0 while using &&, if not, 0 is displayed */}

      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {recipe && <HuggingFaceRecipe recipe={recipe} />}
    </main>
  );
};

export default Main;

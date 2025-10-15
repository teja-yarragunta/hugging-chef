import React from "react";
import ReactMarkdown from "react-markdown"; // ReactMarkdown - a component

const HuggingFaceRecipe = (props) => {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Mistral AI recommends,</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
};

export default HuggingFaceRecipe;

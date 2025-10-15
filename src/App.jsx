import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      {/* todo: implement a loader after clicking the recipe button */}
    </div>
  );
};

export default App;

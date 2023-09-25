import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import SearchForm from "./components/SearchForm";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};

export default App;

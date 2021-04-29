import React, { useEffect, useState } from "react";
import ReactCard from "./components/RecipeCard";
import "./styles/app.scss";
import RecipeCard from "./components/RecipeCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, Button, FormControl } from "react-bootstrap";

function App() {
  // API Keys
  const APP_ID = "63ba1573";
  const APP_KEY = "acaaac6dcb84f15e6b0b9b4cc7b926a4";

  const [recipes, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  //  runs when query is changed
  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    // sets recipe state to results
    setRecipies(data.hits);
    console.log(data.hits);
  };
  //  takes in what user types and updates the search state
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  // set the query to whats in search
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  // JSX
  return (
    <div className="container">
      <h1 className="home-head">Yummy</h1>
      {/* form */}
      <form onSubmit={getSearch} className="search-form">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Chicken, Rice, Egg, Etc."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" type="submit">Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
      {/* form end */}
      {recipes.map((recipe) => (
        <RecipeCard
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import ReactCard from "./components/RecipeCard";
import "./styles/app.scss";
import RecipeCard from "./components/RecipeCard";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  InputGroup,
  Button,
  FormControl,
  Form
} from "react-bootstrap";

function App() {
  // API Keys
  const APP_ID = "63ba1573";
  const APP_KEY = "acaaac6dcb84f15e6b0b9b4cc7b926a4";
  // State
  const [recipes, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("rice");
  const [searchCalories, setSearchCalories] = useState("");

  //  runs when query is changed
  useEffect(() => {
    getRecipies();
  }, [query,searchCalories]);
  // api call
  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=6&calories=0-${searchCalories}`
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
  // makes the query state the search value
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  //
  const getSearchCalories = (e) => {
    e.preventDefault()
    setSearchCalories(e.target.value)
  };

  // JSX
  return (
    <div className="container">
      <h1 className="home-head display-1">Yummy</h1>
      <p style={{ color: "#fff" }}>
        5 star chef or 1st time meal maker? No matter the case Yummy will turn
        everyday ingredients to Yummy plates!
      </p>
      {/* Search form */}
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
           {/*  */}
           <div class="dropdown">
                  <button onClick={getSearchCalories}>Calories?</button>
                  <div>
                    <option value="500" onClick={getSearchCalories}>
                      0-500
                    </option>
                  </div>
                </div>
            {/*  */}
            <Button variant="outline-secondary" type="submit">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
      {/* form end */}
      <p style={{ color: "#fff" }}>(*use commas to seprerate ingredients)</p>
      <div className="recipe-div">
        {recipes.map((recipe) => (
          <RecipeCard
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            carbs={Math.round(recipe.recipe.digest[1].total)}
            fats={Math.round(recipe.recipe.digest[0].total)}
            protein={Math.round(recipe.recipe.digest[2].total)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

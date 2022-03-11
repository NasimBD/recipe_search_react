import {useEffect, useState} from 'react';
import './App.css';
import { Recipe } from './components/Recipe';

const API_URL = "https://api.edamam.com/search";
const APP_ID = "585e731a";
const APP_KEY = "a1278fa45c1f061ee4792b45ba15cf1d\t";

function App() {
  const [searchKey, setSearchKey] = useState('');
  const [recipes, setRecipes] = useState([]);
  

  useEffect(() => {
   const getRecipes = async () => {
    const recipes = await fetchData('chicken');  
    setRecipes(recipes);
   }

   getRecipes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipes = await fetchData(searchKey);
    setRecipes(recipes);
    setSearchKey('');
  }


  const fetchData = async (queryTerm) => {
    const res =  await fetch(API_URL + `?q=${queryTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`); 
    const data = await res.json(); 
    return data.hits; 
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control" value={searchKey} onChange={(e) => setSearchKey(e.target.value)}/>
        <input type="submit" value="search"/>
      </form>

      <div id="recipes">
        {
          recipes.length && recipes.map((recipe, indx) => 
          <Recipe
          key={indx} 
          imageURL={recipe.recipe.image}
          label={recipe.recipe.label}
          ingredientLines={recipe.recipe.ingredientLines}
          calories={recipe.recipe.calories}
          />)
        }
      </div>
    </div>
  );
}

export default App;

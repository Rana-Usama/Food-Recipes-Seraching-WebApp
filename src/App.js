import React,{useState} from 'react';
import './App.css';
import Axios from 'axios';
import Recipe from './components/Recipe';
import {v4 as uuidv4} from 'uuid';


const App = () => {
  const [query,setQuery]=useState("");
  const [recipes,setRecipes]=useState([])

  const APP_ID='3e9faa48';

  const APP_KEY="6c4b74fb1ea5061fd83981f44f0f5ad4";
  
  const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData=async ()=>{

   
      const result=await Axios.get(url);
      setRecipes(result.data.hits)
      console.log(result);
      setQuery("") 
   
  }

  const onChange=(e)=>{
    setQuery(e.target.value)

  }

  const onSubmit=(e)=>{
    e.preventDefault();
    getData();

  }

  return (
    <div className="App">
      <h1>
        Let's Search Food Recipes
      </h1>
      <form 
       className="search-form" 
       onSubmit={onSubmit}>
        
        <input 
        type="text" 
        placeholder="Search Any Food Recipes Here" 
        autoComplete="off" 
        onChange={onChange} 
        value={query}>
       </input>
       
       <input 
        type="submit" 
        value="search">
       </input>
      
      </form>
      
    <div className="Pheading">
      <p>Search and see recepes here!</p>
    </div>
      <div className="recipes"> 
        
        {recipes !==[] && recipes.map(recipe => 
        <Recipe
        key={uuidv4()} 
        recipe={recipe}></Recipe>)
        }
    </div>
   {/* <h3>All rights reserved 2021 Ⓡ</h3>
   <h4>Made By Osama</h4> */}
    
    </div>
  )
}

export default App

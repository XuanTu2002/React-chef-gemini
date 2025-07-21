import './App.css';
import AIrecipe from './components/AIrecipe';
import Header from './components/Header';
import IngredientsList from './components/IngredientsList';
import Main from './components/Main';
import { useState, useRef, useEffect } from 'react';
import { getRecipeFromGemini } from './ai';

function App() {
  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState("")
  const ingredientsListItems = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prev => [...prev, newIngredient])
  }
  //make the recipe section automatically scroll into view
  const sectionScrollIntoView = useRef("null")
  useEffect(() => {
    if (recipe !== "" && sectionScrollIntoView.current !== null) {
      sectionScrollIntoView.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [recipe])

  //get recipe from AI
  async function getRecipe() {
    try {
      const generatedRecipe = await getRecipeFromGemini(ingredients);
      setRecipe(generatedRecipe);
    } catch (error) {
      alert(error.message);
      console.error('Recipe generation failed:', error);
    }
  }

  return (
    <div className="App">
      <Header />
      <Main handleSubmit={handleSubmit} />
      {ingredients.length > 0 && < IngredientsList ref={sectionScrollIntoView} condition={ingredients.length} ingredientsListItems={ingredientsListItems} getRecipe={getRecipe} />}
      {recipe && <AIrecipe recipe={recipe} />}
    </div>
  );
}

export default App;

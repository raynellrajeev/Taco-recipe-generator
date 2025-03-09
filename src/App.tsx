
import { useState } from 'react'
import recipes from './recipe.json'

function App() {
  type Recipe = {
    id: string;
    type: string;
    name: string;
    price: number;
    ingredients: {
      protein: { name: string; preparation: string };
      salsa: { name: string; spiciness: string };
      toppings: Array<{ name: string; quantity: string; ingredients: string[] }>;
    };
  };

  const [ingredients, setIngredients] = useState<Recipe | undefined>(undefined)

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget
    if (button.textContent === "Chicken") {
      setIngredients(recipes[0])
    } else if (button.textContent === "fish") {
      setIngredients(recipes[2])
    } else if (button.textContent === "beef") {
      setIngredients(recipes[1])
    }
    event.preventDefault()
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Taco Recipe Generator</h1>
      <form>
        <button onClick={(event) => handleClick(event)}>Chicken</button>
        <button onClick={(event) => handleClick(event)}>fish</button>
        <button onClick={(event) => handleClick(event)}>beef</button>
      </form>
      <div>
        {ingredients && (
          <>
            <h3>{ingredients.name}</h3>
            <p>Protein: {ingredients.ingredients.protein.name}</p>
            <p>Salsa: {ingredients.ingredients.salsa.name}</p>
            <h4>Toppings:</h4>
            <ul>
              {ingredients.ingredients.toppings.map(topping => (
                <li key={topping.name}>{topping.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

export default App

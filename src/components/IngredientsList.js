export default function IngredientsList(props) {
    return (
        <section className="ingredients-section">
            <h2 className="section-title">Your Ingredients</h2>
            
            {props.ingredientsListItems.length > 0 ? (
                <ul className="ingredients-list" aria-live="polite">
                    {props.ingredientsListItems}
                </ul>
            ) : (
                <p className="empty-state">No ingredients added yet. Start by adding some above!</p>
            )}
            
            {props.condition > 3 && (
                <div className="get-recipe-container">
                    <div className="recipe-prompt">
                        <h3>Ready for a recipe?</h3>
                        <p>Let's create something delicious with your ingredients!</p>
                    </div>
                    <button 
                        onClick={props.getRecipe} 
                        className="get-recipe-button"
                        aria-label="Generate recipe from ingredients"
                    >
                        🍳 Get Recipe
                    </button>
                </div>
            )}
        </section>
    )
}
export default function Main(props) {
    return (
        <main className="main-content">
            <form onSubmit={(e) => { e.preventDefault(); props.handleSubmit(new FormData(e.target)); e.target.reset(); }} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g: Avocado"
                    aria-label="Add ingredient"
                    name="ingredient"
                    required
                    className="ingredient-input"
                />
                <button type="submit" className="add-button">
                    Add ingredient
                </button>
            </form>
        </main>
    )
}
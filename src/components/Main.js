
export default function Main(props) {
    return (
        <main>
            <form action={props.handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g: Avocado"
                    aria-label="Add ingredient"
                    name="ingredient"
                >
                </input>
                <button>Add ingredient</button>
            </form>
        </main>
    )
}
import ReactMarkdown from 'react-markdown';

export default function AIrecipe({ recipe }) {
  if (!recipe) return null;
  
  return (
    <article className="recipe" aria-labelledby="recipe-title">
      <header className="recipe-header">
        <h2 id="recipe-title" className="recipe-title">
          <span className="emoji" role="img" aria-hidden="true">✨</span>
          Chef's Recommendation
        </h2>
      </header>
      
      <div className="recipe-content">
        <ReactMarkdown className="recipe-markdown">
          {recipe}
        </ReactMarkdown>
      </div>
    </article>
  );
}
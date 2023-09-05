export default function AnimeCard({title,description,rating}) {
    return (
      <div className="AnimeCard">
        <h1> {title} </h1>
        <p> {description} </p>
        <p> rating : {rating} </p>

      </div>
    );
  }
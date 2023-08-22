function Movie({title, year, synopsis}) {
    return (
    <li>
      <strong>{title}</strong> ({year}) {synopsis}
    </li>
    )
}


function MoviesList() {
  // collection of objects representing movies
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
        id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
        id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  const movieItemsList = movies.map(movie => (
    <li key={movie.id}>
    <strong>{movie.title}</strong> ({movie.year}) <em>{movie.synopsis}</em> 
    </li>
   
   ))

   const movieItems = movies.map((movie) => (
     <Movie
       key={movie.id} // key prop is required for lists
       title={movie.title}
       year={movie.year}
       synopsis={movie.synopsis}
     />
     // can also destructure movie into individual props
     // <Movie key={movie.id} {...movie}/>
   ));
   
   return (
       <div className="MoviesList componentBox">
       <ul>{ movieItems }</ul>
       </div>
       )
    
    return (
        <div className="MoviesList componentBox">
      <ul>{/* iterate over each movie, print the title in a list */}
         { movies.map((movie) => (
             <li>{movie.title}</li>
             ))}
      </ul>
    </div>
  );
}


export default MoviesList;

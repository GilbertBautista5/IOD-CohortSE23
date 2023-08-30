import { useState } from "react";

function AddMovieForm({ onAddMovie }) {
  // const [title, setTitle] = useState("");
  // const [year, setYear] = useState("");
  // const [synopsis, setSynopsis] = useState("");

  // ++ add support for the synopsis field as well, here and below
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    onAddMovie(Object.fromEntries(formData.entries()));
  };
  return (
    <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>

        <label>
          Movie Title:
          <input
            name="title"
            defaultValue=""


          />
        </label>

        <label>
          Year Released:
          <input
            name="year"
            type="number"
            defaultValue=""
          />
        </label>

        <div>
        <label>
          Synopsis:
          <input
            name="synopsis"
            type="text"
            defaultValue=""
          />
        </label>
        </div>
        <button>Add Movie</button>
      </form>
    </div>
  );
}

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

  const [currentMovies, setCurrentMovies] = useState(movies);

  const movieItems = currentMovies.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));

  const handleReverseMovies = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...currentMovies];
    newMovies.reverse(); // 2. modify the clone
    setCurrentMovies(newMovies); // 3. set updated clone in state
  };

  const handleSortMoviesTitle = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...currentMovies];
    newMovies.sort((movie1, movie2) => {
      if (movie1.title == movie2.title) return 0; // 2. modify the clone
      else if (movie1.title > movie2.title) return 1;
      else return -1;
    });

    setCurrentMovies(newMovies); // 3. set updated clone in state
  };

  // add this in MoviesList component
  const handleAddMovie = (newMovie) => {
    newMovie.id = currentMovies.length + 1; // unreliable but succinct
    setCurrentMovies([...currentMovies, newMovie]);
  };

  return (
    <> <AddMovieForm onAddMovie={handleAddMovie}/>
    <div className="MoviesList componentBox">
      <ul> {movieItems} </ul>
      <button onClick={handleReverseMovies}>Reverse List</button>
      <button onClick={handleSortMoviesTitle}>Sort by Title List</button>
    </div>
    </>
  );
}


export default MoviesList;

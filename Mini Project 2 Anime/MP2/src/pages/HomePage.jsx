import { useState,useEffect } from "react";
import AnimeCard from "../Components/AnimeCard";

export default function home() {
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState("");
    useEffect (()=>{
        fetch(`https://kitsu.io/api/edge/trending/anime?filter[text]=${search}`)
      .then((response) => response.json())
      .then(data=>{
        const animeResults = data.data.map(item=>(
            <AnimeCard key={item.id} 
            title={item.attributes.titles.en}
            description={item.attributes.description}
            rating={item.attributes.averageRating}
            /> 
        ))
        setResults(animeResults)
      })
    },[search])

    return (
      <div className="HomePage">
        <h1>Home</h1>
        <input type='text' onChange={(e)=> setSearch(e.target.value)} />
        <select name='genres' id="" onChange={(e)=> setGenre(e.target.value)} >
          <option value='adventure'>Adventure</option>
          </select>
          {results}
      </div>
    );
  }
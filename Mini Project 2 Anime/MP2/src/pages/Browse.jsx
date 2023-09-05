import { useState,useEffect } from "react";
import AnimeCard from "../Components/AnimeCard";


export default function Browse() {
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState('');
    useEffect (()=>{
        fetch(`https://kitsu.io/api/edge/trending/anime?filter[text]=${search}`)
      .then(response => response.json())
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
      <div className="Browse">
        <h1>Trending</h1>
          {results}

       
        
  
      </div>
    );
  }
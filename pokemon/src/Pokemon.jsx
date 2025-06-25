import { useEffect, useState } from "react";
import "../src/index.css";
import PokemonCards from "./PokemonCards";
const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const[loading,setLoading] = useState();
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log(data);

      const detailsPokemon = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });
      console.log(detailsPokemon);

      const detailsResponses = await Promise.all(detailsPokemon);
      console.log(detailsResponses);
      setPokemon(detailsResponses);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  
  if(loading){
    return <div><h1>Loading...</h1></div>
  }
  return (
    <>
      <section className="container">
        <header>
          <h1>Hello, Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
            <ul className="cards">
                {searchData.map((curPokemon)=>{
                    return <PokemonCards key={curPokemon.id} pokemonData={curPokemon}/>
                })}
            </ul>
        </div>
      </section>
    </>
  );
};

export default Pokemon;

import { useEffect, useState } from "react";
import "../css/pokemon.css";
import { PokemonCard } from "./PokemonCard";
export const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const fetchPokemonData = async () => {
    const api = "https://pokeapi.co/api/v2/pokemon?limit=500";
    try {
      const response = await fetch(api);
      const data = await response.json();

      const getPokemonData = data.results.map(async (element) => {
        const response = await fetch(element.url);
        const pokemonData = await response.json();

        return pokemonData;
      });
      const pokemonDetails = await Promise.all(getPokemonData);
      setPokemon(pokemonDetails);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const searchPokemon = pokemon.filter((currentPokemon) =>
    currentPokemon.forms[0].name
      .toString()
      .toLowerCase()
      .startsWith(search.toLowerCase().trim())
  );

  if (loading) {
    return (
      <div className="loader">
        <div className="pokemon-loader"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="loader">
        <h3>{error.message}</h3>
      </div>
    );
  }

  return (
    <section className="pokemon-list">
      <header className="pokemon-header">
        <h1>Let's Catch Pokémon</h1>
      </header>

      <div className="input-field">
        <input
          type="text"
          placeholder="Search Pokémon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {searchPokemon.length === 0 && (
        <h3 className="no-result">No Pokémon Found</h3>
      )}
      <div className="grid">
        {searchPokemon.map((pokemon, index) => (
          <div key={pokemon.id}>
            <PokemonCard key={pokemon.id} pokemon={pokemon} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

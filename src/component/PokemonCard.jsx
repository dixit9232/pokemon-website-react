import "../css/pokemon.css";

export const PokemonCard = ({ pokemon, index }) => {
  const name = pokemon.forms[0].name;
  const image = pokemon.sprites.other.dream_world.front_default;
  const types = pokemon.types.map((types) => types.type.name).join(", ");
  const height = pokemon.height;
  const weight = pokemon.weight;
  const speed = pokemon.stats[5].base_stat;
  const experience = pokemon.base_experience;
  const attack = pokemon.stats[1].base_stat;
  const ability = pokemon.abilities[0].ability.name;

  return (
    <div className="pokemon-card">
      <img src={image} alt={name} className="pokemon-img" loading="lazy" />
      <h3>{name}</h3>
      <div className="type">
        <p>{types}</p>
      </div>
      <div className="pokemon-details">
        <p className="details-row">
          <span>Height</span>
          {height}
        </p>
        <p className="details-row">
          <span>Weight</span>
          {weight}
        </p>
        <p className="details-row">
          <span>Speed</span>
          {speed}
        </p>
      </div>l
      <div className="pokemon-details">
        <p className="details-row">
          <span>Experience</span>
          {experience}
        </p>
        <p className="details-row">
          <span>Attack</span>
          {attack}
        </p>
        <p className="details-row">
          <span>Abilities</span>
          {ability}
        </p>
      </div>
    </div>
  );
};

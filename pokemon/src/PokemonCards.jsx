const PokemonCards = ({ pokemonData }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="pokemon-image"
        />
      </figure>

      <h2 className="pokemon-name">{pokemonData.name}</h2>

      <div className="pokemon-info pokemon-highlight">
        <p>
          {pokemonData.types.map((curType) => curType.type.name).join(", ")}
        </p>
      </div>

      <div className="pokemon-info-grid">
        <p>
          <span>Height:</span> {pokemonData.height}
        </p>
        <p>
          <span>Weight:</span> {pokemonData.weight}
        </p>
        <p>
          <span>Speed:</span> {pokemonData.stats[5].base_stat}
        </p>
      </div>

      <div className="pokemon-info-grid">
        <p>
          <span>Experience:</span> {pokemonData.base_experience}
        </p>
        <p>
          <span>Attack:</span> {pokemonData.stats[1].base_stat}
        </p>
        <p>
          <span>Abilities:</span>{" "}
          {pokemonData.abilities
            .map((abilityInfo) => abilityInfo.ability.name)
            .slice(0, 1)
            .join(", ")}
        </p>
      </div>
    </li>
  );
};

export default PokemonCards;

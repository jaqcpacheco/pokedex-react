import { useState } from "react";

import useFetch from "../hooks/useFetch";

import PokemonList from "../components/PokemonList";
import SearchForm from "../components/SearchForm";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {

  const [search, setSearch] = useState("");

  const { data, loading } = useFetch("/pokemon?limit=50");

  const pokemons = data.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1
  }));

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  return (

    <div
      className="
      min-h-screen
      bg-gradient-to-b
      from-indigo-950
      via-slate-900
      to-black
      p-8
      "
    >


      <div className="text-center mb-12">

        <h1
          className="
          text-6xl
          font-black
          text-yellow-400
          drop-shadow-lg
          "
        >

          🎮 Pokédex React

        </h1>

      </div>


      <div className="max-w-2xl mx-auto mb-12">

        <SearchForm
          search={search}
          setSearch={setSearch}
        />

      </div>

      <div
        className="
        flex
        justify-between
        items-center
        mb-8
        text-slate-400
        "
      >

        <p>
          Total de Pokémons:
          <span className="text-yellow-400 font-bold ml-2">

            {filteredPokemons.length}

          </span>
        </p>

      </div>

      <PokemonList pokemons={filteredPokemons} />

    </div>
  );
}
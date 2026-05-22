export default function PokemonCard({ pokemon }) {

  const image =
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (

    <div
      className="
      bg-slate-900/80
      backdrop-blur-sm
      rounded-3xl
      p-6
      shadow-xl
      border border-slate-800
      hover:border-yellow-400
      hover:shadow-yellow-500/20
      hover:-translate-y-2
      hover:scale-105
      transition-all
      duration-300
      cursor-pointer
      "
    >

      <img
        src={image}
        alt={pokemon.name}
        className="
        w-36
        h-36
        mx-auto
        drop-shadow-2xl
        "
      />

      <h2
        className="
        text-white
        text-center
        text-2xl
        font-bold
        capitalize
        mt-4
        "
      >

        {pokemon.name}

      </h2>

      <p
        className="
        text-yellow-400
        text-center
        mt-2
        font-semibold
        "
      >

        #{pokemon.id}

      </p>

    </div>
  );
}
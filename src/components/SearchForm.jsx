export default function SearchForm({ search, setSearch }) {

  return (

    <div className="mb-8">

      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none"
      />

    </div>
  );
}
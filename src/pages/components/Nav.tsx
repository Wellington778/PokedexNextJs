export default function Nav(): JSX.Element {
  return (
    <nav>
      <div>
        <a href="/">Home</a>
      </div>{" "}
      |
      <div>
        <a href="/pokemons">Pokemon List</a>
      </div>
    </nav>
  );
}

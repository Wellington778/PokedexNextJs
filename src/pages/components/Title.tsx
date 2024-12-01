import Nav from "./Nav";

export default function Title(): JSX.Element {
  return (
    <header>
      <div className="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Pokedex
          </text>
        </svg>
      </div>
      <Nav />
    </header>
  );
}

import { redirect } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

export default function SearchInput(): JSX.Element {
  const [text, setText] = useState("");
  const router = useRouter();

  function handleSubmit(e: any) {
    e.preventDefault();

    // redirect(`/pokemons/`);
    router.push(`/pokemons/info/${text}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        value={text}
        type="text"
        name="pokeFinder"
        id="pokeFinder"
        placeholder="Search for a name or an ID"
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

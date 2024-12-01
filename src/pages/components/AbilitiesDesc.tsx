import { useEffect, useState } from "react";

type Param = { url: string };
export default function AbilitiesDesc({ url }: Param): JSX.Element {
  const [data, setData] = useState();

  useEffect(() => {
    if (!url) return;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.effect_entries);
        const desc = data.effect_entries.filter((item: any) => {
          return item.language.name === "en";
        });
        if (!desc[0]) return;
        setData(desc[0].short_effect);
      });
  }, [url, data]);

  // console.log(data);
  if (!data) return <></>;
  return <p>{data}</p>;
}

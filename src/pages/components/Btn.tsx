import style from "@/styles/Btn.module.css";
type params = { goTo: string; text: string };

export default function Btn(props: params): JSX.Element {
  return (
    <div className="col-6 center">
      <a href={props.goTo} className={style.btn}>
        {props.text}
      </a>
    </div>
  );
}

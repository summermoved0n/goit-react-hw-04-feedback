import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <ul>
        <li className={css.item}>
          Good: <span>{good}</span>
        </li>
        <li className={css.item}>
          Neutral: <span>{neutral}</span>
        </li>
        <li className={css.item}>
          Bad: <span>{bad}</span>
        </li>
        <li className={css.item}>
          Total: <span>{total()}</span>
        </li>
        <li className={css.item}>
          Positive feedback: <span>{positivePercentage()}</span>
        </li>
      </ul>
    </div>
  );
}

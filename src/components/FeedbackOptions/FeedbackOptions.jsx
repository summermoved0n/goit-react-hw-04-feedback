import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, handleFeedback }) {
  return (
    <div className={css.conteiner}>
      {options.map(option => {
        return (
          <button
            key={option}
            className={css.button}
            onClick={() => handleFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={css.section_title}>{title}</h2>
      {children}
    </>
  );
};

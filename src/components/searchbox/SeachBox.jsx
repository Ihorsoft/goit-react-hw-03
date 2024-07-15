import css from "./SeachBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.filter}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};
export default SearchBox;

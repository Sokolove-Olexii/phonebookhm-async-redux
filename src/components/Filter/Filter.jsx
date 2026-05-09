import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { selectFilter } from "../../redux/selectors";

const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(selectFilter);

  const onChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className="filter-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Filter by name..."
      />
    </div>
  );
};

export default Filter;

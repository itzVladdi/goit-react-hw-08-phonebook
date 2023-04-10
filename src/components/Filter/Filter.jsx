import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  function togleFilter(event) {
    dispatch(setFilter(event.target.value));
  }
  return (
    <div className={css.wrapper}>
      <label htmlFor="Find">Find contacts by name</label>
      <input id="filter" type="text" name="filter" onChange={togleFilter} />
    </div>
  );
}

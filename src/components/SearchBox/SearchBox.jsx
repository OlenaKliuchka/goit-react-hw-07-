import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SearchBox.module.css';

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p className={styles.title}> Find contacts by name</p>
      <input
        type="text"
        name="search"
        className={styles.box}
        value={filter}
        onInput={e => dispatch(changeFilter(e.target.value))}
      />
    </>
  );
}

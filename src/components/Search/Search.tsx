import { clsx } from '../../utils/clsx';
import styles from './Search.module.css';
import { ChangeEvent, FormEvent } from 'react';
// import { ChangeEvent, FormEvent, useState } from 'react';
// import { SearchInputProps } from './searchInterfase';
import { useState } from 'react';
// import { ISearchConrextData } from '../../Contexst';
import { SearchContext } from '../../Contexst';
import { useContext } from 'react';

export const Search: React.FC = () =>
  // export const Search: React.FC<SearchInputProps> = () =>
  // { onSearch, search }
  {
    const { search, setSearch } = useContext(SearchContext);
    const [value, setValue] = useState(search);
    // console.log(value);
    console.log(search);

    function inputChangeHundler(event: ChangeEvent<HTMLInputElement>): void {
      setValue(event.target.value.trim());
      // setSearch(event.target.value.trim());
    }

    function inputSearchHunder(event: FormEvent<HTMLFormElement>): void {
      event.preventDefault();
      // onSearch(value);
      setSearch(value);
      localStorage.setItem('value', value);
      // localStorage.setItem('value', search);
    }

    return (
      <div className={clsx(styles.form__container)}>
        <form className={styles.form} onSubmit={inputSearchHunder}>
          <input
            value={value}
            className={clsx(styles.input)}
            type="text"
            placeholder="Search object"
            onChange={inputChangeHundler}
          />
          <button
            className={clsx(styles.button, styles.button__submit)}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    );
  };

import { clsx } from '../../utils/clsx';
import { useEffect, useState } from 'react';
import styles from './CoctailData.module.css';
import {
  AstronomicalObject,
  AstronomicalObjectBaseResponse,
} from '../../types/types';
import { SearchContext } from '../../Contexst';
import { useContext } from 'react';

export function CoctailData() {
  // { search }: { search: string }
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  // const [items, setItems] = useState<AstronomicalObject[]>([]);
  const { search, items, setItems } = useContext(SearchContext);

  useEffect(() => {
    if (search === '') {
      fetch('https://stapi.co/api/v2/rest/astronomicalObject/search')
        .then((res) => res.json() as Promise<AstronomicalObjectBaseResponse>)
        .then(
          (result) => {
            setItems(result.astronomicalObjects);
          },
          (error) => {
            setError(error);
          }
        )
        .finally(() => setIsLoaded(true));
    } else {
      fetch(
        `https://stapi.co/api/v2/rest/astronomicalObject/search?name=${search}`,
        {
          method: 'POST',
          redirect: 'follow',
        }
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.astronomicalObjects);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, [search, setItems]);

  if (error) {
    return <p> Error: {error.message}</p>;
  } else if (!isLoaded) {
    return <p> Loading... </p>;
  } else {
    return (
      <div className={clsx(styles.container, styles.container__field)}>
        <ul className={clsx(styles.coctail__list)}>
          {items.map((item: AstronomicalObject) => (
            <li className={clsx(styles.coctail__item)} key={item.uid}>
              <h5 className={clsx(styles.coctail__text)}>NAME: {item.name}</h5>
              <p className={clsx(styles.coctail__text)}>
                TYPE: {item.astronomicalObjectType}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

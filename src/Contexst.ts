import { createContext } from 'react';
import { AstronomicalObject } from './types/types';

export interface ISearchContextData {
  search: string;
  setSearch: (search: string) => void;
  items: AstronomicalObject[];
  setItems: (items: AstronomicalObject[]) => void;
}

export const SearchContext = createContext<ISearchContextData>({
  search: '',
  setSearch: () => {},
  items: [],
  setItems: () => {},
});

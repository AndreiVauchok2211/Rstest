export interface SearchInputProps {
  onSearch: (search: string) => void;
  search: string;
}

export interface SearchInputState {
  search: string;
}

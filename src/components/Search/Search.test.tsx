import { render, fireEvent, waitFor } from '@testing-library/react';
import { Search } from './Search';

describe('Search component', () => {
  it('saves the entered value to the local storage when search button is clicked', () => {
    const { getByPlaceholderText, getByText } = render(<Search />);
    const input = getByPlaceholderText('Search object');
    const searchButton = getByText('Search');

    fireEvent.change(input, { target: { value: 'Test Value' } });
    fireEvent.click(searchButton);

    expect(localStorage.getItem('value')).toBe('Test Value');
  });

  it('retrieves the value from the local storage', async () => {
    localStorage.removeItem('value');
    const { getByPlaceholderText } = render(<Search />);
    const input = getByPlaceholderText('Search object') as HTMLInputElement;
    await waitFor(() => {
      const storedValue = localStorage.getItem('value') || '';
      expect(input.value).toBe(storedValue);
    });
  });
});

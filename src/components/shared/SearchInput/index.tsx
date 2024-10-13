import { InputHTMLAttributes, memo } from 'react';
import './style.scss';

export type SearchInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & {
  value: string;
  onChange: (value: string) => void;
};

function SearchInputComponent({ value, onChange, ...props }: SearchInputProps) {
  return (
    <input
      type='search'
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      className='search-input'
      {...props}
    />
  );
}

export const SearchInput = memo(SearchInputComponent);

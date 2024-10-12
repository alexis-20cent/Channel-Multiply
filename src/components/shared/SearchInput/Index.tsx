import { InputHTMLAttributes } from "react";

type SearchInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & { 
	value: string;
	onChange: (value: string) => void;
}

function SearchInput({ value, onChange, ...props }: SearchInputProps) {
	return (
		<input 
			type="search"
			value={value}
			onChange={({ target: { value } }) => onChange(value)} 
			{...props}
		/>
	);
}

export { SearchInput };

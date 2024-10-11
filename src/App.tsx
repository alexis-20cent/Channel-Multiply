import { useEffect, useState } from "react";

type Content = {
	id: number;
	title: string;
	poster_path: string;
}

type Movie = Content & {};

type Serie = Content & {};

const HTTP = {
	async get(url: string) {
		const response =  await fetch(url);
		const data = await response.json();
		return data;
	}
};

function List({ items }: { items: Content[] }) {
	return (
		<section style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '2rem'}}>	
			{items.map(item => (
				<article key={item.id}>
					<h3>{item.title}</h3>
					<img style={{ maxWidth: '100%' }} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
				</article>
			))}
		</section>
	);
}

function SearchInput({ value, onChange, ...props }: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & { value: string, onChange: (value: string) => void }) {
	return (
		<input 
			type="search"
			value={value}
			onChange={({ target: { value } }) => onChange(value)} 
			{...props}
		/>
	);
}

function useSearch<T extends Content>(type: 'movie' | 'tv', search: string, onSuccess: (results: T[]) => void) {
	const cleanSearch = search.trim();

	useEffect(() => {
		(async () => {
			if (cleanSearch) {
				try {
					const data = await HTTP.get(`https://api.themoviedb.org/3/search/${type}?api_key=92b418e837b833be308bbfb1fb2aca1e&query=${cleanSearch}`);
					onSuccess(data.results);
				} catch (error) {
					// todo
					console.error(error);
				}
			}
			else {
				onSuccess([]);
			}
		})();
	}, [cleanSearch, onSuccess, type]);
}

function App() {
	const [search, setSearch] = useState<string>('');
	const [movies, setMovies] = useState<Movie[]>([]);
	const [series, setSeries] = useState<Serie[]>([]);

	useSearch('movie', search, results => setMovies(results));
	useSearch('tv', search, results => setSeries(results));

	console.log(movies);
	

	return (
		<main>
			<h1>Channel*</h1>
			<SearchInput 
				value={search} 
				onChange={value => setSearch(value)} 
				placeholder="Movie or serie title..." 
				aria-label="Search a movie or a serie" 
			/>
			<h2>Movies</h2>
			<List items={movies} />
			<h2>Series</h2>
			<List items={series} />
		</main>
	)
}

export default App;

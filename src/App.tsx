import { PropsWithChildren, useEffect, useState } from "react";

type Content = {
	id: number;
	poster_path: string;
}

type Movie = Content & {
	title: string;
};

type Serie = Content & {
	name: string;
};

const HTTP = {
	async get(url: string) {
		const response =  await fetch(url);
		const data = await response.json();
		return data;
	}
};

function List({ children }: PropsWithChildren) {
	return (
		<section style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '2rem'}}>	
			{children}
		</section>
	);
}

function ListItem({ title, img }: { title: string, img: string}) {
	return (
		<article>
			<h3>{title}</h3>
			<img style={{ maxWidth: '100%' }} src={img} alt="" />
		</article>
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

function useSearch<T>(type: 'movie' | 'tv', search: string, onSuccess: (results: T[]) => void) {
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

	useSearch<Movie>('movie', search, results => setMovies(results));
	useSearch<Serie>('tv', search, results => setSeries(results));


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
			<List>
				{movies.map(movie => (
					<ListItem
						key={movie.id}
						title={movie.title}
						img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
					/>
				))}
			</List>
			<h2>Series</h2>
			<List>
				{series.map(serie => (
					<ListItem
						key={serie.id}
						title={serie.name}
						img={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} 
					/>
				))}
			</List>
		</main>
	)
}

export default App;

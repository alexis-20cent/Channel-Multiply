import { List } from "@/components/shared/List/Index";
import { ListItem } from "@/components/shared/ListItem/Index";
import { Serie} from "../../domain/Serie";

type SeriesProps = {
	series: Serie[];
}

function Series({ series }: SeriesProps) {
	return (
		<section>
			<h2>Series</h2>
			<List>
				{series.map(serie => (
					<ListItem
						as="article"
						key={serie.id}
						title={serie.title}
						img={`https://image.tmdb.org/t/p/w500/${serie.image}`} 
					/>
				))}
			</List>
		</section>
	);
}

export { Series };

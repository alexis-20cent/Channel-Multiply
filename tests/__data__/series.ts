import { Serie } from "@/modules/series/domain/Serie";

const serie: Serie = {
	id: 1,
	title: 'Hello',
};

const series: Serie[] = [serie, {
	id: 2,
	title: 'Hello',
}, {
	id: 3,
	title: 'Hello',
}];

export { serie, series };


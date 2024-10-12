import { Content } from "./Content";

export type ContentRepository<T extends Content> = {
	get: (id: number) => Promise<T | null>;
	search: (query: string) => Promise<T[]>;
};

import { Content, ensureContentIsValid } from "../../contents/domain/Content";

export type Serie = Content & {};

export function ensureSerieIsValid(options: Serie): void {
	ensureContentIsValid<Serie>(options)
}

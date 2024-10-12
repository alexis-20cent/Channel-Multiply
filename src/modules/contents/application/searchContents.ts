import { Content } from "../domain/Content";
import { ContentRepository } from "../domain/ContentRepository";

export function searchContents<T extends Content>(contentRepository: ContentRepository<T>) {
	return async function (query: string): Promise<T[]> {
		return contentRepository.search(query);
	};
}
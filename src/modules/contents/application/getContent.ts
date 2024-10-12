import { Content } from "../domain/Content";
import { ContentRepository } from "../domain/ContentRepository";

export function getContent<T extends Content>(contentRepository: ContentRepository<T>) {
	return async function (contentId: string): Promise<T | null> {
		return contentRepository.get(contentId);
	};
}
import { Content } from '../domain/Content';
import { ContentRepository } from '../domain/ContentRepository';

export function getContent<T extends Content>(contentRepository: ContentRepository<T>) {
  return async function(contentId: number): Promise<T | null> {
    return contentRepository.get(contentId);
  };
}

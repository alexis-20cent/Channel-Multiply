import { Actor } from '@/modules/actors/domain/Actor';
import { Content } from '../domain/Content';
import { ContentRepository } from '../domain/ContentRepository';

export function getContentActors<T extends Content>(contentRepository: ContentRepository<T>) {
  return async function(contentId: number): Promise<Actor[] | null> {
    return contentRepository.getActors(contentId);
  };
}

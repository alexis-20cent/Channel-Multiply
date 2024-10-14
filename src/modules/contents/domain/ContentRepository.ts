import { Actor } from '@/modules/actors/domain/Actor';
import { Content } from './Content';

export type ContentRepository<T extends Content> = {
  get: (id: number) => Promise<T | null>;
  search: (query: string) => Promise<T[]>;
  getActors: (id: number) => Promise<Actor[] | null>;
};

import { Actor } from '../../domain/Actor';
import { ActorTMDBDTO } from './actorTMDBDTO';

export const mapTMDBDTOToActor = (dto: ActorTMDBDTO): Actor => {
  return {
    id: dto.id,
    name: dto.name,
    image: dto.profile_path,
  };
};

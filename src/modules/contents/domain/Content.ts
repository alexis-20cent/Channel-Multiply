import { Actor, ensureActorIsValid } from '@/modules/actors/domain/Actor';

export type Content = {
  id: number,
  title: string,
  image?: string | null,
  description?: string | null,
  year?: string | null,
  countries?: string[] | null,
  actors?: Actor[] | null,
};

export function ensureContentIsValid<T extends Content>({ id, title, image, description, year, countries, actors }: T): void {
  if (!isContentIdValid(id)) {
    throw ContentIdNotValidError(id);
  }
  if (!isContentTitleValid(title)) {
    throw ContentTitleNotValidError(title);
  }
  if (!isContentImageValid(image)) {
    throw ContentImageNotValidError(image);
  }
  if (!isContentDescriptionValid(description)) {
    throw ContentDescriptionNotValidError(description);
  }
  if (!isContentYearValid(year)) {
    throw ContentYearNotValidError(year);
  }
  if (!isContentCountriesValid(countries)) {
    throw ContentCountriesNotValidError(countries);
  }
  if (!isContentActorsValid(actors)) {
    throw ContentActorsNotValidError(actors);
  }
}

export function isContentIdValid(id: number): boolean {
  return typeof id === 'number';
}

export function isContentTitleValid(title: string): boolean {
  return typeof title === 'string';
}

export function isContentImageValid(image?: string | null): boolean {
  return !image || typeof image === 'string';
}

export function isContentDescriptionValid(description?: string | null): boolean {
  return !description || typeof description === 'string';
}

export function isContentYearValid(year?: string | null): boolean {
  return !year || typeof year === 'string';
}

export function isContentCountriesValid(countries?: string[] | null): boolean {
  return !countries || (Array.isArray(countries) && countries.every(country => typeof country === 'string'));
}

export function isContentActorsValid(actors?: Actor[] | null): boolean {
  return !actors || (Array.isArray(actors) && actors.every(ensureActorIsValid));
}

export function ContentIdNotValidError(id: unknown): Error {
  return new Error(`Id ${id} is not valid`);
}

export function ContentTitleNotValidError(title: unknown): Error {
  return new Error(`Title ${title} is not valid`);
}

export function ContentImageNotValidError(image?: unknown): Error {
  return new Error(`Image ${image} is not valid`);
}

export function ContentDescriptionNotValidError(description?: unknown): Error {
  return new Error(`Description ${description} is not valid`);
}

export function ContentYearNotValidError(year?: unknown): Error {
  return new Error(`Year ${year} is not valid`);
}

export function ContentCountriesNotValidError(countries?: unknown): Error {
  return new Error(`Countries ${countries} is not valid`);
}

export function ContentActorsNotValidError(actors?: unknown): Error {
  return new Error(`Actors ${actors} is not valid`);
}

export type Actor = {
  id: number
  name: string,
  image?: string,
};

export function ensureActorIsValid<T extends Actor>({ id, name, image }: T): void {
  if (!isActorIdValid(id)) {
    throw ActorIdNotValidError(id);
  }
  if (!isActorNameValid(name)) {
    throw ActorNameNotValidError(name);
  }
  if (!isActorImageValid(image)) {
    throw ActorImageNotValidError(image);
  }
}

export function isActorIdValid(id: number): boolean {
  return typeof id === 'number';
}

export function isActorNameValid(name: string): boolean {
  return typeof name === 'string';
}

export function isActorImageValid(image?: string | null): boolean {
  return !image || typeof image === 'string';
}

export function ActorIdNotValidError(id: unknown): Error {
  return new Error(`Id ${id} is not valid`);
}

export function ActorNameNotValidError(name: unknown): Error {
  return new Error(`Name ${name} is not valid`);
}

export function ActorImageNotValidError(image?: unknown): Error {
  return new Error(`Image ${image} is not valid`);
}

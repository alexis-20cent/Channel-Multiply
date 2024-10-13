export type Content = {
  id: number,
  title: string,
  image?: string | null,
  description?: string | null,
};

export function ensureContentIsValid<T extends Content>({ id, title, image, description }: T): void {
  if (!isContentIdValid(id)) {
    throw ContentIdNotValidError(id);
  }
  if (!isContentTitleValid(title)) {
    throw ContentTitleNotValidError(title);
  }
  if (!isContentImageValid(image)) {
    throw ContentImageNotValidError(image);
  }
  if (!isDescriptionValid(description)) {
    throw ContentDescriptionNotValidError(description);
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

export function isDescriptionValid(description?: string | null): boolean {
  return !description || typeof description === 'string';
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

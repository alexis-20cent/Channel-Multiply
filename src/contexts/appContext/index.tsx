import { MovieRepository } from '@/modules/movies/domain/MovieRepository';
import { SerieRepository } from '@/modules/series/domain/SerieRepository';
import React, { Dispatch, SetStateAction, useState } from 'react';

export type ContextValue = {
  movieRepository: MovieRepository;
  serieRepository: SerieRepository;
  search: [string, Dispatch<SetStateAction<string>>];
};

export const ApplicationContext = React.createContext<ContextValue>({} as ContextValue);

export interface ApplicationProviderProps {
  children: React.ReactNode;
  dependencies: {
    movieRepository: MovieRepository;
    serieRepository: SerieRepository;
  };
}

export const ApplicationProvider = ({ children, dependencies }: ApplicationProviderProps) => {
  const url = new URL(window.location.toString());
  const searchParams = new URLSearchParams(url.search);
  const search = useState<string>(searchParams.get('search') || '');

  return (
    <ApplicationContext.Provider
      value={{
        ...dependencies,
        search,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

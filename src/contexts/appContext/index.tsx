import { MovieRepository } from '@/modules/movies/domain/MovieRepository';
import { SerieRepository } from '@/modules/series/domain/SerieRepository';
import React from 'react';

export type ContextValue = {
  movieRepository: MovieRepository;
  serieRepository: SerieRepository;
};

export const ApplicationContext = React.createContext<ContextValue>({} as ContextValue);

interface Props {
  children: React.ReactNode;
  dependencies: {
    movieRepository: MovieRepository;
    serieRepository: SerieRepository;
  };
}
export const ApplicationProvider = ({ children, dependencies }: Props) => {
  return (
    <ApplicationContext.Provider
      value={{
        ...dependencies
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

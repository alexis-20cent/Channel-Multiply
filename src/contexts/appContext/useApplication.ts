import { useContext } from 'react';
import { ApplicationContext, ContextValue } from '.';

export const useApplication = (): ContextValue => {
  return useContext(ApplicationContext);
};

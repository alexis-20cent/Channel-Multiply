import {
  createBrowserRouter,
} from 'react-router-dom';
import { Result } from './components/sections/Result';
import { Serie } from './modules/series/infrastructure/components/Serie';
import { Movie } from './modules/movies/infrastructure/components/Movie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Result />,
  },
  {
    path: '/serie/:id',
    element: <Serie />,
  },
  {
    path: '/movie/:id',
    element: <Movie />,
  },
]);

export { router };

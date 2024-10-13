import {
  createBrowserRouter,
} from 'react-router-dom';
import { App } from './components/sections/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

export { router };

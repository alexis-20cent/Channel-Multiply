import { Movies } from '@/modules/movies/infrastructure/components/Movies';
import { render } from '@testing-library/react';
import { movies } from '../../../../__data__/movies';

describe('Movies', () => {
  test('render with a title', () => {
    const component = render(<Movies movies={[]} />);
    expect(component.getByRole('heading')).toHaveTextContent('Movies');
  });

  test('render with a list of movies', () => {
    const component = render(<Movies movies={movies} />);
    expect(component.getAllByRole('heading', { level: 3 })).toHaveLength(3);
  });
});

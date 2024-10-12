import { Series } from '@/modules/series/infrastructure/components/Series';
import { render } from '@testing-library/react';
import { series } from '../../../../__data__/series';

describe('Series', () => {
  test('render with a title', () => {
    const component = render(<Series series={[]} />);
    expect(component.getByRole('heading')).toHaveTextContent('Series');
  });

  test('render with a list of series', () => {
    const component = render(<Series series={series} />);
    expect(component.getAllByRole('heading', { level: 3 })).toHaveLength(3);
  });
});

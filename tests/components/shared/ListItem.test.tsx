import { ListItem } from '@/components/shared/ListItem';
import { render } from '@testing-library/react';

describe('ListItem', () => {
  test('render a title with an image', () => {
    const component = render(<ListItem title="hello" img="world" />);
    expect(component.getByRole('heading')).toHaveTextContent('hello');
    expect(component.getByAltText('')).toHaveAttribute('src', 'world');
  });

  test('can be rendered as another element', () => {
    const { container } = render(<ListItem title="hello" img="world" as="section" />);
    expect(container).toContainHTML('section');
  });

  test('can have common props', () => {
    const { container } = render(<ListItem title="hello" img="world" id="hello" />);
    expect(container.firstChild).toHaveAttribute('id', 'hello');
  });
});

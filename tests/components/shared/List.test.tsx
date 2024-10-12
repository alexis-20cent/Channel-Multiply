import { List } from '@/components/shared/List';
import { render } from '@testing-library/react';

describe('List', () => {
  test('render a list container with its children', () => {
    const { container } = render(<List>Hello</List>);
    expect(container).toHaveTextContent('Hello');
    expect(container.firstChild).toHaveClass('list');
  });

  test('can have custom classes', () => {
    const { container } = render(<List className="hello">Hello</List>);
    expect(container.firstChild).toHaveClass('list');
    expect(container.firstChild).toHaveClass('hello');
  });

  test('can be rendered as another element', () => {
    const { container } = render(<List as="section">Hello</List>);
    expect(container).toContainHTML('section');
  });

  test('can have common props', () => {
    const { container } = render(<List id="hello">Hello</List>);
    expect(container.firstChild).toHaveAttribute('id', 'hello');
  });
});

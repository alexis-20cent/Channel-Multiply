import { SearchInput } from '@/components/shared/SearchInput';
import { render } from '@testing-library/react';

describe('SearchInput', () => {
  test('render an input with a value', () => {
    const { container } =  render(<SearchInput value="hello" onChange={() => {}} />);
    expect(container.firstChild).toHaveValue('hello');
  });

  test('can have common props', () => {
    const { container } = render(<SearchInput value="hello" onChange={() => {}} id="hello" />);
    expect(container.firstChild).toHaveAttribute('id', 'hello');
  });
});

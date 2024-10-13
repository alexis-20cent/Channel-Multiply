import { App } from '@/components/sections/App';
import { render } from '@testing-library/react';

describe('App', () => {
  test('render with an input', () => {
    const component =  render(<App />);
    expect(component.getByPlaceholderText('Movie or serie title...')).toBeEnabled();
  });
});

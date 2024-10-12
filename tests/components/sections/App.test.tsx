import { App } from '@/components/sections/App';
import { render } from '@testing-library/react';

describe('App', () => {
  test('render with a title', () => {
    const component =  render(<App />);
    expect(component.getByRole('heading', { level: 1 })).toHaveTextContent('Channel*');
  });

  test('render with an input', () => {
    const component =  render(<App />);
    expect(component.getByPlaceholderText('Movie or serie title...')).toBeEnabled();
  });

  test('render with two titles Movies and Series', () => {
    const component =  render(<App />);
    expect(component.getAllByRole('heading', { level: 2 })[0]).toHaveTextContent('Movies');
    expect(component.getAllByRole('heading', { level: 2 })[1]).toHaveTextContent('Series');
  });
});

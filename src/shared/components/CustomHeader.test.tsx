import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
  const title = 'Test Title';
  const description = 'Test Description';

  test('should render the title correctly', () => {
    render(<CustomHeader title={title} description={description} />);
    expect(screen.getAllByText(title));
  });

  test('should render the description when provided', () => {
    render(<CustomHeader title={title} description={description} />);
    //screen.debug();
    expect(screen.getAllByText(description)).toBeDefined();
    expect(screen.getByRole('paragraph')).toBeDefined();
    expect(screen.getByRole('paragraph').innerHTML).toBe(description);
  });

  test('should not render description when empty', () => {
    const { container } = render(<CustomHeader title={title} description="" />);

    const divElement = container.querySelector('.content-center');

    const h1 = divElement?.querySelector('h1');
    expect(h1?.innerHTML).toBe(title);

    const p = divElement?.querySelector('p');
    expect(p).toBeNull();
  });
});

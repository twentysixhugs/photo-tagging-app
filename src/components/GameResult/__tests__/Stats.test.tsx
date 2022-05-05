import { render, screen } from '@testing-library/react';
import Stats from '../Stats';

const mockTime = '00:01:07';
const mockPlace = '56';

describe('Rendering stats data', () => {
  it('renders time data', () => {
    render(<Stats time={mockTime} place={mockPlace} />);

    expect(screen.getByText(/..:..:../i)).toHaveTextContent(mockTime);
  });

  it('renders user place data', () => {
    render(<Stats time={mockTime} place={mockPlace} />);

    expect(screen.getByText(/your place/i).textContent).toContain(
      mockPlace,
    );
  });
});

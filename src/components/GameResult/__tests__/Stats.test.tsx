import { render, screen } from '@testing-library/react';
import Stats from '../Stats';

const mockTimeData = {
  hours: 0,
  minutes: 1,
  seconds: 7,
};

const expectedTime = '00:01:07';

const mockPlace = '56';

describe('Rendering stats data', () => {
  it('renders time data', () => {
    render(<Stats time={mockTimeData} place={mockPlace} />);

    expect(screen.getByText(/..:..:../i)).toHaveTextContent(expectedTime);
  });

  it('renders user place data', () => {
    render(<Stats time={mockTimeData} place={mockPlace} />);

    expect(screen.getByText(/your place/i).textContent).toContain(
      mockPlace,
    );
  });
});

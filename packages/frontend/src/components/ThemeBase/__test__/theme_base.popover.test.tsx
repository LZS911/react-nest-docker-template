import { fireEvent, render, screen } from '@testing-library/react';
import Popover from '../Popover';

describe('test Popover', () => {
  test('should match snapshot', () => {
    const { baseElement } = render(
      <Popover trigger={['click']} content={<>content</>}>
        <div>children</div>
      </Popover>
    );

    fireEvent.click(screen.getByText('children'));

    expect(baseElement).toMatchSnapshot();
  });
});

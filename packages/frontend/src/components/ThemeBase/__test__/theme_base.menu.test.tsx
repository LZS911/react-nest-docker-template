import { render } from '@testing-library/react';
import { MenuProps } from 'antd';
import Menu from '../Menu';

const items: MenuProps['items'] = [
  {
    label: 'label',
    title: 'test',
    key: 'key',
  },
];

const originalConsoleError = console.error;

describe('test Menu', () => {
  beforeEach(() => {
    console.error = jest.fn((str: string) => {
      if (
        str.includes('An update to %s inside a test was not wrapped in act')
      ) {
        return null;
      }
      originalConsoleError(str);
    });
  });

  afterEach(() => {
    console.error = originalConsoleError;
  });

  test('should match snapshot', () => {
    const { container } = render(<Menu items={items} />);
    expect(container).toMatchSnapshot();
  });
});

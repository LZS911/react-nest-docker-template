import { render, renderHook } from '@testing-library/react';
import { IButtonProps } from '..';
import Button from '../Button/Button';
import useRenderButton from '../Button/useRenderButton';

type Props = Pick<IButtonProps, 'type' | 'className' | 'danger'>;
const initProps: Props = {};

describe('test useRenderButton', () => {
  test('should match snapshot', () => {
    const { result, rerender } = renderHook((v: Props = initProps) =>
      useRenderButton({ ...v })
    );
    expect(result.current).toMatchSnapshot();

    rerender({ type: 'primary' });
    expect(result.current).toMatchSnapshot();

    rerender({ type: 'secondary' });
    expect(result.current).toMatchSnapshot();

    rerender({ type: 'link' });
    expect(result.current).toMatchSnapshot();

    rerender({ type: 'primary', danger: true });
    expect(result.current).toMatchSnapshot();

    rerender({ type: 'secondary', danger: true });
    expect(result.current).toMatchSnapshot();

    rerender({ type: 'link', danger: true });
    expect(result.current).toMatchSnapshot();

    rerender({ type: 'default' });
    expect(result.current).toMatchSnapshot();

    rerender({ className: 'cls' });
    expect(result.current).toMatchSnapshot();

    rerender({ danger: true });
    expect(result.current).toMatchSnapshot();

    rerender({ danger: false });
    expect(result.current).toMatchSnapshot();
  });
});

describe('test Button', () => {
  test('should match snapshot', () => {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot();
  });
});

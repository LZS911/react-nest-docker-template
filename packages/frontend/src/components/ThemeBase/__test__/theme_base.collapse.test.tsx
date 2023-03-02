import { render } from '@testing-library/react';
import { Collapse, CollapsePanel } from '../Collapse';

describe('test Collapse', () => {
  test('should match snapshot', () => {
    const { container: collapseContainer } = render(<Collapse />);
    expect(collapseContainer).toMatchSnapshot();

    const { container: collapsePanelContainer } = render(
      <CollapsePanel key="key" header={<>header</>} />
    );
    expect(collapsePanelContainer).toMatchSnapshot();
  });
});

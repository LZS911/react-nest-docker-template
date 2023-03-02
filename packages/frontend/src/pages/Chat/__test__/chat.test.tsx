import Chat from '..';
import { renderWithRedux } from '../../../testUtils/customRender';
describe('test Chat', () => {
  it('should render Chat to match snapshot', () => {
    const { container } = renderWithRedux(<Chat />);
    expect(container).toMatchSnapshot();
  });
});

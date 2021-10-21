import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRouterQuery } from '.';
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

jest.mock('next/dist/client/router', () => ({
  __esModule: true,
  useRouter: () => ({
    query: {},
    pathname: '/',
    asPath: '/',
    events: {
      emit: jest.fn(),
      on: jest.fn(),
      off: jest.fn(),
    },
    push: jest.fn(() => Promise.resolve(true)),
    prefetch: jest.fn(() => Promise.resolve(true)),
    replace: jest.fn(() => Promise.resolve(true)),
  }),
}));
test('renders without crashing', () => {
  const div = document.createElement('div');
  let res: any;
  function App() {
    const query = useRouterQuery();
    res = query;
    return null;
  }
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

  expect(res).toMatchInlineSnapshot(`Object {}`);
});

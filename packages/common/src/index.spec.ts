import { helloWorld } from './index';
test('new module created', () => {
  const result = helloWorld('helloWorld');

  expect(result).toEqual('helloWorld');
});
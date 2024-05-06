import { helloWorld } from './index';



describe('Error scenarios', () => {
  beforeEach(() => {
    console.log('before each test')
   })
  it('returns empty string when null is given', () => {
    const result = helloWorld(null);
  
    expect(result).toEqual('');
  })
  test('new module created', () => {
    const result = helloWorld('helloWorld');
  
    expect(result).toEqual('helloWorld');
  });
})

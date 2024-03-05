import { describe, expect, it } from 'vitest';
import App from '../src/App';

describe('App', () => {
  it('should return a JSX element', () => {
    const result = App();
    expect(result).toBeDefined();
  });
  it('should render the correct JSX', () => {
    const result = App();
    const expected = (
      <div className='w-screen h-screen flex justify-center items-center'>
        <p className='text-3xl font-bold underline'>PSE-AVANZA</p>
      </div>
    );
    expect(result).toEqual(expected);
  });
});

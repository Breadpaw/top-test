import {capitalize} from './functions'

test('Capitalizes word passed in function', () => {
    expect(capitalize('laurens')).toMatch('Laurens');
});
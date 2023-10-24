import {capitalize, reverseString} from './functions'

test('Capitalizes word passed in function', () => {
    expect(capitalize('laurens')).toMatch('Laurens');
});

test('Reverse string passed in function', () => {
    expect(reverseString('laurens')).toMatch('snerual');
});
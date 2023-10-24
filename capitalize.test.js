const capitalize = require('./capitalize')

test('Capitalizes word passed in function', () => {
    expect(capitalize('laurens')).toMatch('Laurens');
});
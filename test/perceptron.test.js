const mod = require('../perceptron');

test('1 AND 1 to equal 1', () => {
    expect(mod.perceptron(1, 1)).toBe(1);
});

test('1 AND 0 to equal 0', () => {
    expect(mod.perceptron(1, 0)).toBe(0);
});

test('0 AND 0 to equal 0', () => {
    expect(mod.perceptron(0, 0)).toBe(0);
});

test('0 AND 1 to equal 0', () => {
    expect(mod.perceptron(0, 1)).toBe(0);
});
import toMeasureHealth from '../app';

test('state of health', () => {
  const result = toMeasureHealth({ name: name, health: 70 });

  expect(result).toBe('healthy');
});

test('state of health', () => {
  const result = toMeasureHealth({ name: name, health: 50 });

  expect(result).toBe('healthy');
});

test('state of health', () => {
  const result = toMeasureHealth({ name: name, health: 30 });

  expect(result).toBe('wounded');
});

test('state of health', () => {
  const result = toMeasureHealth({ name: name, health: 15 });

  expect(result).toBe('wounded');
});

test('state of health', () => {
  const result = toMeasureHealth({ name: name, health: 10 });

  expect(result).toBe('critical');
});

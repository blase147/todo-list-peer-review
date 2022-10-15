/**
 * @jest-environment jsdom
 */

const { addList, removeList } = require('./addRemove.js');

describe('addList function testing', () => {
  test('description swimming index 1', () => {
    expect(addList('', [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }]);
  });

  test('description swimming index 1', () => {
    expect(addList(undefined, [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }]);
  });

  test('description swimming index 1 description watch movies index 2', () => {
    expect(addList('watch movies', [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }, { description: 'watch movies', completed: false, index: 2 }]);
  });

  test('description swimming index 1, description cooking index 2', () => {
    expect(addList('cooking', [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }, { description: 'cooking', completed: false, index: 2 }]);
  });
});

describe('removeList function testing', () => {
  test('description cooking index 1', () => {
    expect(removeList(1, [{ description: 'swimming', completed: false, index: 1 }, { description: 'cooking', completed: false, index: 2 }])).toEqual([{ description: 'cooking', completed: false, index: 1 }]);
  });

  test('[]', () => {
    expect(removeList(1, [{ description: 'swimming', completed: false, index: 1 }])).toEqual([]);
  });

  test('description swimming index 1', () => {
    expect(removeList(0, [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }]);
  });

  test('description swimming index 1', () => {
    expect(removeList(-1, [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }]);
  });

  test('description swimming index 1', () => {
    expect(removeList(3, [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }]);
  });
});

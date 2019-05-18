const functions = require('../functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

const nameCheck = () => console.log('Checking Name...');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User if Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User if Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});

// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
test('User should be Brad Traversy object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy'
  });
});

// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

// Arrays
test('Admin should be in usernames', () => {
  const usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// Promises.  Fetch doesn't work.  Axios was used in the YouTube tutorial.
// test('User fetched name should be Leanne Graham', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual('Leanne Graham');
//   });
// });

// Async Await
// test('User fetched name should be Leanne Graham', async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Leanne Graham');
// });

test('reverseString function exists', () => {
  expect(functions.reverseString).toBeDefined();
});

test('String reverses', () => {
  expect(functions.reverseString('hello')).toEqual('olleh');
});

test('chunkArray function exists', () => {
  expect(functions.chunkArray).toBeDefined();
});

test('Chunk an array of 10 values with length of 2', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArr = functions.chunkArray(numbers, len);
  expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('Chunk an array of 3 values with length of 1', () => {
  const numbers = [1, 2, 3];
  const len = 1;
  const chunkedArr = functions.chunkArray(numbers, len);
  expect(chunkedArr).toEqual([[1], [2], [3]]);
});

test('isAnagram function exists', () => {
  expect(typeof functions.isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(functions.isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(functions.isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(functions.isAnagram('Hello', 'Aloha')).toBeFalsy();
});

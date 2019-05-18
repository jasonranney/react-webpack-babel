const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Brad' };
    user['lastName'] = 'Traversy';
    return user;
  },
  fetchUser: () =>
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => 'error'),
  reverseString: str =>
    str
      .split('')
      .reverse()
      .join(''),
  chunkArray: (arr, len) => {
    const chunkedArr = [];
    arr.forEach(val => {
      const last = chunkedArr[chunkedArr.length - 1];
      if (!last || last.length === len) {
        chunkedArr.push([val]);
      } else {
        last.push(val);
      }
    });
    return chunkedArr;
  },
  formatStr: str =>
    str
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join(''),
  isAnagram: (str1, str2) =>
    functions.formatStr(str1) === functions.formatStr(str2)
};

module.exports = functions;

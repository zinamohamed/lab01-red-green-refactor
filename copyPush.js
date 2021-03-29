const copyAndPush = (array, item) => {
  const newArr = array.slice();
  newArr.push(item);

  return newArr;
};

module.exports = copyAndPush;

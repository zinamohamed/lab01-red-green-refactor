const capitalizeAndFilter = (array) => {
  const newArray = [];

  for(let i = 0; i < array.length; i++) {
    const updated = array[i].charAt(0).toUpperCase() + array[i].slice(1);

    if(updated.charAt(0) !== 'F')
      newArray.push(updated);
  }
  return newArray;
};

module.exports = capitalizeAndFilter;

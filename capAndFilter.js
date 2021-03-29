const capitalizeAndFilter = (array) => {
  const capitalize = array.map(a => a.toUpperCase());

  const filtered = capitalize.filter(a => a.charAt(0) !== 'F');

  return filtered;
};

module.exports = capitalizeAndFilter;

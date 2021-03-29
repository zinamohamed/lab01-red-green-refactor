const capitalizeAndFilter = (array) => {
  const capitalize = array.map(a => a.toUpperCase());

  const filtered = capitalize.filter(a => a.chart(0) !== 'F');

  return filtered;
};

module.exports = capitalizeAndFilter;

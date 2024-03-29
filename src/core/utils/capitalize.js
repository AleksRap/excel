const capitalize = (str) => {
  if (typeof str !== 'string') return '';

  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export default capitalize;

const onKeySelect = (func) => (e) => {
  if (e.key === 'Enter' || e.keyCode === 32) {
    func(e);
  }
};

const filterChildProps = (props, excludeKeys) => {
  return Object.keys(props)
    .filter((key) => {
      if (Array.isArray(excludeKeys)) {
        return !excludeKeys.includes(key);
      }

      return excludeKeys !== key;
    })
    .reduce((obj, key) => {
      obj[key] = props[key];
      return obj;
    }, {});
};

export { onKeySelect, filterChildProps };

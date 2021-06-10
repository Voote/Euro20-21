const colorSwitch = (param) => {
  switch (param) {
    case 1:
      return 'warning';
    case 2:
      return 'dark';
    case 3:
      return 'light';
    default:
      return 'info';
  }
};

export default colorSwitch;

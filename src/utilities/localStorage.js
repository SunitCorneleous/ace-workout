const setItemToLS = item => {
  localStorage.setItem("break-time", item);
};

const getItemFromLS = () => {
  const item = localStorage.getItem("break-time");

  return item;
};

export { setItemToLS, getItemFromLS };

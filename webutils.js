const g = (id) => {
  return document.getElementById(id);
};

const setObj = (oldObj, newObj) => {
  for(let key of Object.keys(oldObj)) {
    oldObj[key] = undefined;
  }
  for(let key of Object.keys(newObj)) {
    oldObj[key] = newObj[key];
  }
};

const cloneObj = (obj) => {
  const r = {};
  setObj(r, obj);
  return r;
};

const createFrame = (id, src) => {
  const frame = g(id);
  frame.style.display = "none";
  frame.style.borderWidth = "0px";
  frame.src = src;

  frame.style.display = "";
};

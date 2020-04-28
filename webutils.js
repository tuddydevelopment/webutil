const g = (id) => {
  return document.getElementById(id);
};

const setObj = (oldObj, newObj) => {
  for(let key of Objects.keys(oldObj)) {
    oldObj[key] = undefined;
  }
  for(let key of Objects.keys(newObj)) {
    oldObj[key] = newObj[key];
  }
};

const cloneObj = (obj) => {
  const r = {};
  setObj(r, obj);
  return r;
};

const createFrame => (id) {
  const frame = g(id);
  const oFrame = cloneObj(frame);
  setObj(frame, g("twu.iframe"));
  frame.src = oFrame.src;
  frame.style.display = "none";
  frame.style.border = "0 solid #ffffff"
};

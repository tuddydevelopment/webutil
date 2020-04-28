const g = (id) => {
  return document.getElementByID(id);
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

const createFrame => (id) {
  const frame = g(id);
  const oFrame = cloneObj(frame);
  setObj(frame, g("twu.iframe"));
  frame.src = oFrame.src;
  frame.style = oFrame.style;
  frame.style.display = "none";
  frame.style.border = "0 solid #ffffff"

  frame.style.display = oFrame.style.display;
};

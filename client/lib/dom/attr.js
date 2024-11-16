function getAttr(elementNode, property) {
  if (isString(elementNode)) {
    elementNode = getNode(elementNode);
  }
  if (!isString(property)) {
    throw typeError("getAttr's second prop needs to be string type");
  }
  return elementNode.getAttribute(property);
}

function setAttr(node, prop, value) {
  if (isString(node)) {
    node = getNode(node);
  }

  if (isString(prop)) {
    throw typeError("setAttr's second prop needs to be string type");
  }

  // value가 없거나 비어있을 경우
  if (!value || value === '') {
    node.removeAttribute(prop);
    return;
  }

  // prop이 data로 시작할 경우
  if (prop.startsWith('data')) {
    prop = prop.slice(5);
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
}

function attr(node, prop, value) {
  if (value) return setAttr(node, prop, value);
  else return getAttr(node, prop);
}

// const attr = (node, prop, value) => !value ? getAttr(node,prop) : setAttr(node, prop, value)

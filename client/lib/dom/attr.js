function getAttr(elementNode, property) {
  if (isString(elementNode)) {
    elementNode = getNode(elementNode);
  }
  if (!isString(property)) {
    throw typeError("getAttr's second prop needs to be string type");
  }
  return elementNode.getAttribute(property);
}

function setAttr() {
  if (isString(elementNode)) {
    elementNode = getNode(elementNode);
  }
  if (!isString(property)) {
    throw typeError("getAttr's second prop needs to be string type");
  }
  return elementNode.setAttribute(property);
}

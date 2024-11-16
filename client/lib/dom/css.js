function getCss(node, prop) {
  if (isString(node)) node = getNode(node);
  if (!(prop in document.body.style))
    throw syntaxError(
      'getCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.'
    );
  return getComputedStyle(node)[prop];
}

function setCss(node, prop, value) {
  if (isString(node)) node = getNode(node);
  if (!(prop in document.body.style))
    throw syntaxError(
      'setCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.'
    );
  if (!value)
    throw syntaxError('setCss 함수의 세 번째 인수는 필수 입력값 입니다.');
  node.style[prop] = value;
}

const css = (node, prop, value) =>
  !value ? getCss(node, prop) : setCss(node, prop, value);

/**
 * @function addClass DOM Element에 클래스를 추가하는 함수
 * @param {HTMLElement | string} node
 * @param  {string | array | object} className
 * @return {void}
 */
function addClass(node, ...className) {
  if (isString(node)) node = getNode(node);

  className.forEach((c) => {
    if (isObject(c)) {
      c = Object.values(c);
    }
    if (c.includes(',')) {
      // 빈문자 제거하고 ,를 기준으로 나누기
      c = c.replace(/\s*/g, '').split(',');
    }

    if (isArray(c)) {
      c.forEach((c) => {
        node.classList.add(c);
      });
    } else {
      node.classList.add(className);
    }
  });
}

function removeClass(node, className) {
  if (isString(node)) node = getNode(node);
  if (!className) node.className = '';
  if (!(className in classList)) throw new Error('error');
  node.classList.remove(className);
}

function toggleClass(node, className) {
  if (isString(node)) node = getNode(node);
  return node.classList.toggle(className);
}

addClass();

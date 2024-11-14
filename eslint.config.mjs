import globals from 'globals';
import pluginJs from '@eslint/js';

const types = {
  isObject: true,
  isArray: true,
  isString: true,
  isNumber: true,
  isNull: true,
  isUndefined: true,
  isFunction: true,
};

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        isObject: true,
        getNode: true,
      },
    },
    rules: {
      'no-unused-vars': 'off',
    },
  },
];

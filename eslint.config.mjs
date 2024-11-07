import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        isObject: true,
      },
    },
    rules: {
      'no-unused-vars': 'off',
    },
  },
];

module.exports = {
  extends: ['@unumid/eslint-config', 'standard-jsx', 'standard-react'],
  rules: {
    // don't require React to be imported in files that use JSX
    'react/react-in-jsx-scope': 'off',
    // prop-types are unnecessary when using TypeScript
    'react/prop-types': 'off',
    // don't enforce specific handler names
    'react/jsx-handler-names': 'off',
  },
  env: {
    browser: true,
  },
};
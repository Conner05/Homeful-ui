module.exports = {
  env: {
    es6: true
  },
  "extends": [
    ".target.eslintrc.js",
    ".extended.eslintrc.js"
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
  },
  "plugins": [
    "react"
  ]
};

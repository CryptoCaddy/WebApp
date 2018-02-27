module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/strongly-recommended",
    "eslint:recommended",
    "@vue/airbnb",
    "@vue/typescript"
  ],
  "rules": {
    "arrow-parens": [ 2, "always" ],
    "func-names": [ 2, "as-needed" ],
    "function-paren-newline": [ 2, "consistent" ],
    "no-param-reassign": [ "error", {
      "props": true,
      "ignorePropertyModificationsFor": [
        "state", // vuex state
      ]
    }],
    "no-use-before-define": [ "error",
      { "variables": false }
    ],
    "quotes": [ 2, "single" ],
    "space-infix-ops": 0,
    "strict": 0,

    "import/extensions": [ 2, "never", { "vue": "always" } ],
    "import/first": [ 2, { "absolute-first": false } ],
    "import/order": [ 2, {
      "groups": [
        [ "builtin", "external", "internal" ],
        [ "parent", "sibling", "index" ]
      ],
      // "newlines-between": "always",
      "no-multiple-empty-line": true
    } ],
    "import/prefer-default-export": 0
  }
}

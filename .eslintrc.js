module.exports = {
  root: true,
  extends: "@react-native-community",
  rules: {
    "func-call-spacing": ["error", "never"],
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: false }
    ],
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never", asyncArrow: "always" }
    ],
    semi: ["error", "always"],
    "react/prop-types": [0, {}],
    // delete trailing coma
    "comma-dangle": ["error", "never"]
  }
};

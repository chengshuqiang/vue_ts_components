module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/recommended", "@vue/prettier", "@vue/typescript"],

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "prettier/prettier": [
      "warn",
      {
        printWidth: 210,
        tabWidth: 4,
        useTabs: true,
        trailingComma: "all",
        jsxBracketSameLine: true,
        htmlWhitespaceSensitivity: "ignore",
        endOfLine: "lf"
      }
    ]
  },

  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};

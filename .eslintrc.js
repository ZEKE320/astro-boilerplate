const stylistic = require("@stylistic/eslint-plugin");
const stylisticConfigs = stylistic.configs["recommended-extends"];

module.export = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:astro/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      processor: "astro/client-side-ts",
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "@stylistic", "react"],
  rules: {
    ...stylisticConfigs.rules,
    "@stylistic/indent": ["error", 2],
    "@stylistic/linebreak-style": ["error", "unix"],
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/semi": ["warn", "always"],
    "@stylistic/strict-boolean-expressions": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["dist", "node_modules"],
};

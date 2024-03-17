import { stylistic } from "@stylistic/eslint-plugin"
const stylisticConfigs = stylistic.configs["recommended-extends"]

export default {
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
        "plugin:astro/jsx-a11y-recommended",
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
    plugins: ["@typescript-eslint", "@stylistic", "react", "prettier"],
    rules: {
        ...stylisticConfigs.rules,
        "@stylistic/indent": ["error", 4],
        "@stylistic/linebreak-style": ["error", "unix"],
        "@stylistic/quotes": ["error", "double"],
        "@stylistic/semi": ["warn"],
        "@stylistic/strict-boolean-expressions": "warn",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    ignorePatterns: ["dist", "node_modules"],
}

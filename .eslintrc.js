const js = require("@eslint/js");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const tseslint = require("@typescript-eslint/eslint-plugin");
const importPlugin = require("eslint-plugin-import");
const jsxA11y = require("eslint-plugin-jsx-a11y");
const prettier = require("eslint-plugin-prettier");

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ["*.json", "node_modules/", "dist/", ".eslintrc.js"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        paths: ["src", "public"], // public 폴더를 Node 경로로 설정
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg'],
      },
    },
  },
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "@next/next/no-html-link-for-pages": "off",
    "prettier/prettier": ["error"],
    "react/react-in-jsx-scope": "off",
    "spaced-comment": "warn",
    quotes: ["error", "double"],
    "no-console": "warn",
    "no-redeclare": "warn",
    "react/display-name": "off",
    "react/jsx-key": "warn",
    "arrow-body-style": "off",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_|^e$",
        ignoreRestSiblings: true,
        destructuredArrayIgnorePattern: "^_|^e$",
      },
    ],
    "brace-style": "off",
    "import/no-unresolved": ["error", { ignore: ["\\@.*$", "^/"] }],
  },
};

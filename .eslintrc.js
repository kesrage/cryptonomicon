

// module.exports = {
//   root: true,
//   env: {
//     node: true,
//   },
//   extends: [
//     "plugin:vue/vue3-essential",
//     "eslint:recommended",
//     "plugin:prettier/recommended",
//   ],
//   parserOptions: {
//     parser: "@babel/eslint-parser",
//   },
//   rules: {
//     "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
//     "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
//     "prettier/prettier": [
//       "error",
//       {
//         printWidth: 80,
//         tabWidth: 2,
//         singleQuote: false,
//         trailingComma: "none",
//         bracketSpacing: true,
//         jsxBracketSameLine: true,
//         semi: true,
//       },
//     ],
//   },
// };
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "none",
        bracketSpacing: true,
        jsxBracketSameLine: true,
        semi: true,
      },
    ],
  },
  overrides: [
    {
      files: [".eslintrc.js"],
      rules: {
        "prettier/prettier": "off", // Отключает правило Prettier для самого файла конфигурации ESLint
      },
    },
  ],
};


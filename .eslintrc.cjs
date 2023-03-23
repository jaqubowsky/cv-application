module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:vitest/recommended",
    "airbnb",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "vitest"],
  rules: {
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelComponents: ["FormLabel"],
        labelAttributes: ["label"],
        controlComponents: ["input"],
        depth: 1,
      },
    ],
  },
};

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    files: ["**/*.ts", "**/*.js", "**/*.vue"],
    rules: {
      // allows for one-line early returns
      "@stylistic/max-statements-per-line": ["error", { max: 2 }],
      "consistent-return": "off",
    },
  },
);

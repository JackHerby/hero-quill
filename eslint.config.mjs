// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    files: ["**/*.ts", "**/*.js", "**/*.vue"],
    rules: {
      "@stylistic/max-statements-per-line": ["error", { max: 2 }],
      "@stylistic/max-len": ["error", { code: 120 }],
    },
  },
);

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: ["error", "double"], // Enforce double quotes
    semi: "off", // Ensure semicolons are used (optional)
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};

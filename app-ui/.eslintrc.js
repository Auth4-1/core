module.exports = {
  extends: [
    "react-app",
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
  ],
  plugins: ["jsx-a11y", "prettier"],
  rules: {
    semi: 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": "off",
    "no-console": "off",
    "no-plusplus": "off",
    "react/require-default-props": "off",
    "react/forbid-prop-types": "off",
    "react-hooks/exhaustive-deps": "off",
  },
};

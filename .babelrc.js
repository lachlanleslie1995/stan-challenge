module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  env: {
    production: {
      plugins: [
        "babel-plugin-jsx-remove-data-test-id",
        "transform-runtime",
        "transform-regenerator"
      ]
    }
  }
};

const htmlmin = require("html-minifier");
const { renderToString } = require("stencil-web-components/hydrate");
module.exports = function(config) {
  config.addPassthroughCopy("static");

  config.addTransform("ssr", async (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      try {
        const { html } = await renderToString(content);
        return htmlmin.minify(html, {
          useShortDoctype: true,
          removeComments: false,
          collapseWhitespace: true
        });
      } catch (error) {
        return error;
      }
    }
  });
};

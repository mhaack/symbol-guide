const htmlmin = require("html-minifier-terser");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/favicon.svg");
    
    // Add year shortcode
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
      if (process.env.NODE_ENV === "production" && outputPath && outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
          removeComments: true,
          collapseWhitespace: true,
          minifyJS: true,
          minifyCSS: true, 
          useShortDoctype: true,
        });
        return minified;
      }
      return content;
    });
  
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    };
  };
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    
    // Add year shortcode
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    };
  };
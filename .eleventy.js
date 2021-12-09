const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
        name: "mushroom",
        functionsDir: "./netlify/functions",
    });
    eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
        name: "saved",
        functionsDir: "./netlify/functions",
    });

}
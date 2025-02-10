import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import mdx from "@mdx-js/rollup";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    tempFolderName: ".11ty-vite",
    viteOptions: {
      plugins: [
        mdx({
          jsxImportSource: "react",
          providerImportSource: false,
        }),
      ],
      clearScreen: false,
      server: {
        mode: "development",
        port: 3000,
      },
      build: {
        mode: "production",
      },
    },
  });

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addWatchTarget("src/assets");
  eleventyConfig.setTemplateFormats(["mdx", "njk", "html", "liquid"]);
  eleventyConfig.addTemplateFormats("mdx");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}

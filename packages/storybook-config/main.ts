import type { StorybookConfig } from "@storybook/react-vite";
// import { resolve } from "path";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  addons: ["@storybook/addon-docs"],
  docs: {
    defaultName: "Documentation",
  },
  stories: [
    "../../apps/web/src/**/*.stories.@(ts|tsx)",
    "../../../packages/ui/**/*.stories.@(ts|tsx)", // ui 패키지 스토리 포함
  ],
  viteFinal: async (config) => {
    const { default: tailwindcss } = await import("@tailwindcss/vite");
    return mergeConfig(config, {
      plugins: [tailwindcss()],
      assetsInclude: ["/sb-preview/runtime.js"],
    });
  },
};

export default config;

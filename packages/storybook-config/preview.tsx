import type { Preview } from "@storybook/react-vite";
import "../../apps/web/src/style.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        className="flex items-center justify-center min-h-screen bg-gray-50 p-10"
        style={{ textAlign: "center" }}
      >
        <div className="w-full max-w-screen-md">
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
};

export default preview;

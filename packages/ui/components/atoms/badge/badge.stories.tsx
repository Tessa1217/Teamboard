import type { Meta, StoryObj } from "@storybook/react-vite";
import Badge from "./badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  argTypes: {
    color: {
      control: { type: "select" },
      options: [
        "red",
        "orange",
        "yellow",
        "amber",
        "green",
        "blue",
        "purple",
        "gray",
      ],
      description: "뱃지 색상",
      defaultValue: "blue",
    },
    shape: {
      control: { type: "radio" },
      options: ["flat", "pill"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    color: "blue",
    shape: "pill",
    children: "Badge",
  },
};

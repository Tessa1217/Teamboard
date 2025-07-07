import type { Meta, StoryObj } from "@storybook/react-vite";
import Avatar from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  argTypes: {
    altText: {
      control: "text",
      defaultValue: "홍길동",
      description: "아바타 이름",
    },
    profileUrl: {
      control: "text",
      defaultValue: "",
      description: "프로필 사진 URL",
    },
    shape: {
      control: { type: "select" },
      options: ["circle", "rounded", "square"],
      description: "아바타 형태",
    },
    fallback: {
      description: "fallback UI",
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      defaultValue: "md",
      description: "아바타 사이즈",
    },
  },
  tags: ["autodocs"], // Docs 탭 자동 생성
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    altText: "홍길동",
    size: "md",
    shape: "circle",
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import AvatarWithName from "./avatar-with-name";

const meta: Meta<typeof AvatarWithName> = {
  title: "UI/AvatarWithName",
  component: AvatarWithName,
  argTypes: {
    altText: {
      control: "text",
      defaultValue: "Hong Kil Dong",
      description: "아바타 대체텍스트",
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
    name: {
      control: "text",
      defaultValue: "홍길동",
      description: "아바타 이름",
    },
    direction: {
      control: { type: "radio" },
      options: ["col", "row"],
      defaultValue: "col",
      description: "아바타 배치 방향",
    },
  },
  tags: ["autodocs"], // Docs 탭 자동 생성
};

export default meta;

type Story = StoryObj<typeof AvatarWithName>;

export const Default: Story = {
  args: {
    altText: "Hong Kil Dong",
    size: "md",
    shape: "circle",
    name: "홍길동",
  },
};

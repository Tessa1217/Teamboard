import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "./input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  argTypes: {
    value: {
      control: "text",
      defaultValue: "",
      description: "인풋 텍스트",
    },
    defaultValue: {
      control: "text",
      defaultValue: "",
      description: "인풋 텍스트 기본값",
    },
    onChange: {
      control: { type: "object" },
      description: "인풋 change 이벤트 핸들러",
    },
  },
  tags: ["autodocs"], // Docs 탭 자동 생성
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "input 내용을 입력하세요.",
    id: "form-input",
    name: "form-input",
  },
};

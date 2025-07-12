import type { Meta, StoryObj } from "@storybook/react-vite";
import Radio from "./radio";

const meta: Meta<typeof Radio> = {
  title: "UI/Radio",
  component: Radio,
  argTypes: {
    id: {
      type: "string",
      defaultValue: "radio-1",
      description: "Radio 요소 아이디",
    },
    value: {
      type: "string",
      defaultValue: "1",
      description: "Radio 값",
    },
    checked: {
      type: "boolean",
      defaultValue: false,
      description: "Radio 체크 여부",
    },
    onChange: {
      type: "function",
    },
    label: {
      type: "string",
      defaultValue: "라디오",
      description: "Radio 레이블",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    id: "radio-1",
    name: "radio-1",
    checked: true,
    label: "라디오",
    onChange: () => {
      console.log("radio clicked");
    },
  },
};

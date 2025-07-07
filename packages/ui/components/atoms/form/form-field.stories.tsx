import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FormField from "./form-field";
import Input from "./input";

const meta: Meta<typeof FormField> = {
  title: "UI/FormField",
  component: FormField,
  argTypes: {
    label: {
      control: "text",
      defaultValue: "",
      description: "라벨",
    },
    labelVisible: {
      control: "boolean",
      defaultValue: false,
      description: "라벨 표출 유무",
    },
    children: {
      control: { type: "object" },
      defaultValue: Input,
      description: "form field로 래핑할 form element",
    },
    helpText: {
      control: "text",
      defaultValue: "",
      description: "form field에 대한 도움말",
    },
    required: {
      control: "boolean",
      defaultValue: false,
      description: `필수 여부 **(label을 표시해주셔야 require 속성 역시 표시됩니다.)**`,
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Basic: Story = {
  render: () => (
    <FormField label="Username">
      <Input placeholder="Enter username" />
    </FormField>
  ),
};

export const WithHelpText: Story = {
  render: () => (
    <FormField label="Email" helpText="We'll never share your email.">
      <Input type="email" placeholder="you@example.com" />
    </FormField>
  ),
};

export const RequiredField: Story = {
  render: () => (
    <FormField
      label="Full Name"
      labelVisible
      required
      helpText="required 표시는 label 표출을 해야 표시됩니다."
    >
      <Input placeholder="Your full name" />
    </FormField>
  ),
};

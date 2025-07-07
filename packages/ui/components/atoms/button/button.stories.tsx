import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
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
      description: "버튼 색상",
      defaultValue: "blue",
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: "버튼 크기",
      defaultValue: "md",
    },
    variant: {
      control: { type: "select" },
      options: ["solid", "outline", "ghost"],
      description: "버튼 변형",
    },
    children: {
      control: "text",
      defaultValue: "버튼",
    },
  },
  tags: ["autodocs"], // Docs 탭 자동 생성
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    color: "blue",
    size: "md",
    children: "버튼",
    variant: "solid",
  },
};

export const Colors: Story = {
  render: () => {
    const colors = [
      "red",
      "orange",
      "yellow",
      "amber",
      "green",
      "blue",
      "purple",
      "gray",
    ] as const;
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {colors.map((color) => (
          <Button key={color} color={color} variant="solid">
            {color}
          </Button>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const sizes = ["sm", "md", "lg"] as const;
    return (
      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {sizes.map((size) => (
          <Button key={size} color="blue" size={size}>
            {size}
          </Button>
        ))}
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const variants = ["solid", "outline", "ghost"] as const;
    return (
      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {variants.map((variant) => (
          <Button key={variant} color="blue" variant={variant}>
            {variant}
          </Button>
        ))}
      </div>
    );
  },
};

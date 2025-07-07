import type { Meta, StoryObj } from "@storybook/react-vite";
import Select from "./select";
import Option, { OptionProps } from "./option";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    const list = [
      {
        value: "1",
        label: "첫번째 옵션",
      },
      {
        value: "2",
        label: "두번째 옵션",
      },
      {
        value: "3",
        label: "세번째 옵션",
      },
      {
        value: "4",
        label: "네번째 옵션",
      },
    ];

    return (
      <Select>
        {list.map((element: OptionProps) => (
          <Option {...element} />
        ))}
      </Select>
    );
  },
};

export default meta;

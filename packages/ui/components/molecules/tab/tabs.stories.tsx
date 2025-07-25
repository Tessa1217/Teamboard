import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Tabs from "./tabs";
const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  argTypes: {
    tabs: {
      control: { type: "object" },
      description: "탭 목록",
    },
    activeValue: {
      control: false,
      description: "현재 선택 탭",
    },
    onTabChange: {
      control: false,
      description: "탭 변경 이벤트 핸들러",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const tabItems = [
      {
        title: "Home",
        value: "tab1",
      },
      {
        title: "Profile",
        value: "tab2",
        tabIcon: (
          <svg
            className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300 focus:border-blue-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
        ),
      },
      { title: "Settings", value: "tab3" },
    ];

    const [active, setActive] = useState("tab1");

    return (
      <Tabs
        tabs={tabItems}
        activeValue={active}
        onTabChange={(tabValue) => setActive(tabValue)}
      />
    );
  },
};

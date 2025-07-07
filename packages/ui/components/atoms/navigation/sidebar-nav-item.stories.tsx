import type { Meta, StoryObj } from "@storybook/react-vite";
import SidebarNavItem from "./sidebar-nav-item";

const meta: Meta<typeof SidebarNavItem> = {
  title: "UI/SidebarNavItem",
  component: SidebarNavItem,
};

export default meta;

type Story = StoryObj<typeof SidebarNavItem>;

export const Default: Story = {
  args: {
    label: "네비게이션 요소",
    active: true,
    onClick: () => alert("네비게이션 이동"),
  },
};

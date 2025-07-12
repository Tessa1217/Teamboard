import { useState } from "react";
import { Tabs, TabsItemProps } from "@repo/ui";

const ManageTabs = () => {
  const tabs: TabsItemProps[] = [
    {
      title: "General",
      value: "General",
    },
    {
      title: "Column",
      value: "Column",
    },
    {
      title: "Member",
      value: "Member",
    },
  ];

  const [activeTab, setActiveTab] = useState("General");

  return (
    <Tabs
      tabs={tabs}
      activeValue={activeTab}
      onTabChange={(tabValue: string) => setActiveTab(tabValue)}
    />
  );
};

export default ManageTabs;

import TabItem, { TabItemProps } from "../../atoms/tab/tab-item";

export type TabsItemProps = Omit<TabItemProps, "active" | "onTabChange">;

export type TabsProps = {
  tabs: TabsItemProps[];
  activeValue: string;
  onTabChange: (value: string) => void;
};

const Tabs = ({ tabs, activeValue, onTabChange }: TabsProps) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        {tabs.map((tab) => (
          <li className="me-2" key={tab.value}>
            <TabItem
              active={activeValue === tab.value}
              onTabChange={onTabChange}
              {...tab}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;

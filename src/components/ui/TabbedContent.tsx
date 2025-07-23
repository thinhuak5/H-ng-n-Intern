import React, { useState } from "react";

type TabItem = {
  label: string;
  key: string;
};

type TabbedContentProps = {
  tabs: TabItem[];
  emptyImage: string; // path to empty state image
  emptyText: string;
};

const TabbedContent: React.FC<TabbedContentProps> = ({
  tabs,
  emptyImage,
  emptyText,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key || "");

  return (
    <div className="bg-white min-h-[300px] p-4">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === tab.key
                ? "text-red-500 border-b-2 border-red-500"
                : "text-black"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center py-16 text-gray-400 text-sm">
        <img src={emptyImage} alt="empty" className="w-20 h-20 mb-4 opacity-60" />
        <p>{emptyText}</p>
      </div>
    </div>
  );
};

export default TabbedContent;

import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";

import BestProducts from "./BestProducts";
import { Categories } from "./Categories";
import Product from "./Product";

export default function AdminProduct() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="admin-alignment">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="tab-list">
          <Tab className={`tab-name ${tabIndex === 0 && "active"}`}>
            Categories
          </Tab>
          <Tab className={`tab-name ${tabIndex === 1 && "active"}`}>
            Products
          </Tab>
          <Tab className={`tab-name ${tabIndex === 2 && "active"}`}>Best 7</Tab>
        </TabList>
        <TabPanel>
          <Categories />
        </TabPanel>
        <TabPanel>
          <Product />
        </TabPanel>
        <TabPanel>
          <BestProducts />
        </TabPanel>
      </Tabs>
    </div>
  );
}

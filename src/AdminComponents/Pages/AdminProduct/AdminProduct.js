import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";

import { getCategories } from "../../../Redux/Thunks/AdminHome";
import { Categories } from "./Categories";
import Product from "./Product";

export default function AdminProduct() {
  const [tabIndex, setTabIndex] = useState(0);

  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.AdminCategories.categories);
  useEffect(() => {
    if (!categoryData) {
      dispatch(getCategories());
    }
    // eslint-disable-next-line
  }, [categoryData, dispatch]);

  const categoriesUi = useMemo(() => {
    return <Categories categoryData={categoryData || []} />;
  }, [categoryData]);

  return (
    <div className="admin-alignment">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="tab-list">
          <Tab key="1" className={`tab-name ${tabIndex === 0 && "active"}`}>
            Categories
          </Tab>
          <Tab key="2" className={`tab-name ${tabIndex === 1 && "active"}`}>
            Products
          </Tab>
          {/* <Tab key="3" className={`tab-name ${tabIndex === 2 && "active"}`}>
            Best 7
          </Tab> */}
        </TabList>
        <TabPanel>{categoriesUi}</TabPanel>
        <TabPanel>
          <Product categoryData={categoryData || []} />
        </TabPanel>
        <TabPanel>{/* <BestProducts /> */}</TabPanel>
      </Tabs>
    </div>
  );
}

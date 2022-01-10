import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Owner from "./Owner";
import Employee from "./Employee";
import OrganisationInfromation from "./OrganisationInfromation";

export default function AdminInfo() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="admin-alignment">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="tab-list">
          <Tab className={`tab-name ${tabIndex === 0 && "active"}`}>Owner</Tab>
          <Tab className={`tab-name ${tabIndex === 1 && "active"}`}>
            Employee
          </Tab>
          <Tab className={`tab-name ${tabIndex === 2 && "active"}`}>
            Organisation Info
          </Tab>
        </TabList>
        <TabPanel>
          <Owner />
        </TabPanel>
        <TabPanel>
          <Employee />
        </TabPanel>
        <TabPanel>
          <OrganisationInfromation />
        </TabPanel>
      </Tabs>
    </div>
  );
}

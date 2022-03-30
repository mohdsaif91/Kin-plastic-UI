import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";

import ProductDevelopment from "./ProductDevelopment";
import QualityCheck from "./QualityCheck";

import "react-tabs/style/react-tabs.scss";

export default function Services() {
  const [tabIndex, setTabIndex] = useState(0);
  const [mobile, setMobile] = useState(false);

  const getTabDisplayed = () => {
    return tabIndex === 0 ? <ProductDevelopment /> : <QualityCheck />;
  };

  useEffect(() => {
    setMobile(window.innerWidth <= 450);
  }, []);

  return (
    <div className="service">
      <div className="service-image" />
      <Box sx={{ width: "100%" }}>
        {mobile ? (
          <section className="we-offer-area text-center bg-gray">
            <div className="container">
              <div className="row service-container-client our-offer-items less-carousel">
                <div
                  className={`service-card ${tabIndex === 0 && "active"}`}
                  onClick={() => setTabIndex(0)}
                >
                  <div className="item">
                    <i className="fas fa-pen-fancy"></i>
                  </div>
                </div>

                <div
                  className={`service-card ${tabIndex === 1 && "active"}`}
                  onClick={() => setTabIndex(1)}
                >
                  <div className="item">
                    <i className="fas fa-dharmachakra"></i>
                  </div>
                </div>

                <div
                  className={`service-card ${tabIndex === 2 && "active"}`}
                  onClick={() => setTabIndex(2)}
                >
                  <div className="item">
                    <i className="fas fa-tasks"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="Heading-service">
              <div className="col-md-12">
                <div className="site-heading text-center">
                  <h1>
                    Services <span>Offered</span>
                  </h1>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="we-offer-area text-center bg-gray">
            <div className="container">
              <div className="row service-container-client our-offer-items less-carousel">
                <div
                  className={`service-card ${tabIndex === 0 && "active"}`}
                  onClick={() => setTabIndex(0)}
                >
                  <div className="item">
                    <i className="fas fa-pen-fancy"></i>
                    <h4>Product Development</h4>
                    <p>Meeting the requirement of customer</p>
                  </div>
                </div>

                <div
                  className={`service-card ${tabIndex === 1 && "active"}`}
                  onClick={() => setTabIndex(1)}
                >
                  <div className="item">
                    <i className="fas fa-dharmachakra"></i>
                    <h4>Technical Service</h4>
                    <p>Inventing product with inovative process</p>
                  </div>
                </div>

                <div
                  className={`service-card ${tabIndex === 2 && "active"}`}
                  onClick={() => setTabIndex(2)}
                >
                  <div className="item">
                    <i className="fas fa-tasks"></i>
                    <h4>Quality Product</h4>
                    <p>Providing the Mandatory Quality </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Heading-service">
              <div className="col-md-12">
                <div className="site-heading text-center">
                  <h1>
                    Services <span>Offered</span>
                  </h1>
                </div>
              </div>
            </div>
          </section>
        )}
        <div className="service-tab-display">{getTabDisplayed()}</div>
      </Box>
    </div>
  );
}

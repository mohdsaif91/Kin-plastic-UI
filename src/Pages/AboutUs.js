import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOrganisationOwner } from "../Redux/Thunks/AdminAboutUs";

export default function AboutUs() {
  const [aboutUs, setAboutUs] = useState();

  const aboutUsRedux = useSelector((state) => state.AdminAboutUs);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (!aboutUsRedux.OrganisationOwner) {
      dispatch(getOrganisationOwner());
    }
    if (aboutUsRedux) {
      setAboutUs(aboutUsRedux.OrganisationOwner);
    }
    // eslint-disable-next-line
  }, [aboutUsRedux]);

  return (
    <div className="about-us-container">
      <div className="about-us-text">
        <div className="about-us-vision">
          <div className="card-heading-title">OUR VISION</div>
          <div className="card-heading-text">
            Our Vision is to be one of the most trusted and respected growth
            partners for our valued customers using advanced technology,
            nurturing human capital, and using environmentally friendly
            processes and practises for humanity at large. We also want to
            become the most economical, innovative, preferred packaging solution
            service provider company in the world; one that enhances the brand
            value of our customers while also protecting their products with the
            best quality closures.
          </div>
        </div>
        <div className="about-us-vision">
          <div className="card-heading-title">OUR MISSON</div>
          <div className="card-heading-text">
            To consistently develop products in the closures and caps segment
            adhering to global quality standards for global markets with
            “in-time” deliveries and cost-effective outcomes. And to achieve
            this, we ensure that we work together as a team, while paving a
            clear path towards our final goal. We firmly believe that the most
            important assets of the company are our people. And so, HPPL relies
            heavily on entrepreneurial, professional and loyal team members.
          </div>
        </div>
        <div className="about-us-chairman">
          <div className="card-heading-title">
            <div className="img-container">
              <div className="emp-detials">
                <img
                  src={`https://kinindustries.s3.ap-south-1.amazonaws.com/aboutus/${aboutUs?.owner?.ownerImageName}`}
                  alt="Paul_Richards"
                  loading="lazy"
                  className="main-img"
                />
              </div>
              <div className="main-img-text blue-link form-heading">
                {aboutUs?.owner?.ownerName}
              </div>
            </div>
          </div>
          <div className="card-heading-text">
            <div className="main-img-text form-heading">
              {aboutUs?.owner?.ownerText}
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="our-employee">
          <div className="emp-heading">Employee Spotlight</div>
          <div className="emp-list">
            {aboutUs?.employee.map((m) => (
              <div key={m._id} className="emp-detials">
                <img
                  src={`https://kinindustries.s3.ap-south-1.amazonaws.com/aboutus/${m.employeeImage}`}
                  alt={m.employeeName}
                  loading="lazy"
                />
                <div className="img-info">
                  <div className="img-heading">Meet {m.employeeName}!</div>
                  <div className="img-sub-heading">“{m.employeeText}”</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

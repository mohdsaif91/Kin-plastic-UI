import React from "react";

import CHS from "../../images/aestheticimg3.jpg";
import LAB from "../../images/lab.jpg";
import HYGIENE from "../../images/hygiene.png";

export default function QualityCheck() {
  return (
    <div className="quality-container">
      <div className="service-selectHeading">
        Quality<span> Process</span>
      </div>
      <div className="quality-heading">
        Quality begins in the mindset of the top managers, and goes right down
        to the shop floor and the execution team. SOPs are thoroughly observed
        in selection of vendors, raw material, cleanroom systems, manufacturing
        processes, packing material, and there are systems in place governing
        all of these. Continuous orientation & training programs are designed to
        achieve these. Each member of the Kin industries team is sensitive to
        the quality expectations of our esteemed customers and are committed to
        deliver “Zero Defect” products using state-of-the-art high precision
        equipment.
      </div>
      <div className="quality-heading">
        We practice the best production and quality control methods and roll
        them out to our plants. Corrective actions are centrally coordinated and
        followed-up in order to ensure that we do the best for our product
        quality. Good is not good enough – we continuously target further
        improvements in quality.
      </div>
      <div className="quality-text-image">
        <div className="service-selectHeading mt-3">
          <span> Our Quality Process – The CHS Machine</span>
        </div>
        <div className="cont">
          <img alt="" className="quality-image" src={CHS} />
          <div className="text-container">
            All closures are made in certified hygienic facilities like the
            Class 1,00,000, under stringent GMP norms which ensure zero product
            contamination to their customer sensitive products. Over and above
            the normal checking, they also have a CHS machine (costing more than
            Rs. 10 million) with a 7-camera set-up, which is an additional
            inspection system for double checking the quality of the closures.
            This ensures that the customers get zero defect closures machine.
          </div>
        </div>
      </div>
      <div className="quality-text-image">
        <div className="service-selectHeading mt-3">
          <span> Quality Laboratory – Lab, Demeet Machine & Others</span>
        </div>
        <div className="cont">
          <img alt="" className="quality-image" src={LAB} />
          <div className="text-container">
            Our quality control plans are identical for every product type,
            irrespective of where it is manufactured. Our quality control
            laboratories are equipped with fully automated measuring machines,
            and also run tests for tamper evidence performance, tightness,
            sealing quality and further product properties.
          </div>
        </div>
      </div>
      <div className="quality-text-image">
        <div className="service-selectHeading mt-3">
          <span>Focus On Hygiene and Quality</span>
        </div>
        <div className="cont">
          <img alt="" className="quality-image" src={HYGIENE} />
          <div className="text-container">
            Our hygiene and quality control ensure every worker in the
            production unit wears Mask, Head Cap and Shoe Closures. The closure
            produced for the dairy industry go through a UV Chamber before they
            are dispatched.
          </div>
        </div>
      </div>
    </div>
  );
}

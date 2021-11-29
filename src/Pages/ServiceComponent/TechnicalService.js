import React from "react";

import Amazon from "../../images/amazon.png";

export default function TechnicalService() {
  return (
    <div className="technical-service">
      <div className="service-selectHeading">
        Technical<span> Service</span>
      </div>
      <div className="techniacl-heading">
        At Kin Industries, we guarantee a competent technical customer service.
        We support our clients the effective application of our closures based
        on our vast know-how. Not just that, we also help with the safe
        application, increased line efficiency, and smooth integration of our
        products. For further convenience, we provide neck gauges and chucks
        suitable to our closures as well as our own capping heads.
      </div>
      <div className="technical-info-container">
        <img alt="" className="image" src={Amazon} />
        <div className="text">
          Prior to the first delivery of Kin Industries closures, our technical
          service experts evaluate the production site. They conduct detailed
          measurements of the bottle neck in order to check if the neck fulfills
          the requirements and if the HPPL closure is going to fit the neck. We
          also check the capper, the chuck, especially the grippers as well as
          sorter and chutes and, if necessary, consult the machine supplier.
          What follows is a test with one box of closures. Only if this is
          successful, longer test phases (one to two hours, at first, then on
          the whole shift) will follow.
        </div>
      </div>
      <div className="technical-info-container">
        <img alt="" className="image" src={Amazon} />
        <div className="text">
          Thanks to our vast know-how from successful projects around the world,
          we are able to give insights and best practice cases. In order to be
          as close to our customers as possible, our technical service staff
          develops a close relationship to the key players at the plants and is
          ready for emergency visits at any point of time. We also provide our
          know-how to the technical marketing team during their project
          management, by undertaking line evaluations as well as trials and
          product testing in our own labs.
        </div>
      </div>
      <div className="technical-info-container">
        <img alt="" className="image" src={Amazon} />
        <div className="text">
          We also give advice within the line evaluation and, if necessary, the
          adaption or setting of cappers, and provide proper chucks that fit
          perfectly to HPPL closures. We even directly contact the capper and/or
          capping head manufacturer to safeguard that there will not be any loss
          of information within the communication process.
        </div>
      </div>
      <div className="technical-info-container">
        <img alt="" className="image" src={Amazon} />
        <div className="text">
          We offer numerous solutions so that your package stands out at the
          point of sale. Our solutions include top printing, embossing,
          debossing.
        </div>
      </div>
      <div className="technical-info-container">
        <img alt="" className="image" src={Amazon} />
        <div className="text">
          One of the most significant insights in marketing is that product
          customization influences consumer behaviour. In recent years, our
          customers have regularly sent us queries on personalized and
          customized products, and we have tried to fulfil them all to the best
          of our abilities and will continue doing so for the foreseeable
          future.
        </div>
      </div>
    </div>
  );
}

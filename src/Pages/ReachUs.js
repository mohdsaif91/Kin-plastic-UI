import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOrganisation, sendInquery } from "../Redux/Thunks/AdminAboutUs";
import officeLocation from "../images/map.png";
import {
  emailValidation,
  mobileValidation,
} from "../AdminComponents/Pages/utils";

const initialValidation = {
  senderName: "",
  email: "",
  phone: "",
  message: "",
  emailErrorFlag: false,
  phoneErrorFlag: false,
  nameErrorFlag: false,
  messageErrorFlag: false,
  emailError: "",
  phoneError: "",
  nameError: "",
  messageError: "",
};

const initialOrganizationData = { emailIds: [], locationContact: [] };

export default function ReachUs() {
  const [locationData, setLocationData] = useState({
    ...initialOrganizationData,
  });
  const [validation, setValidation] = useState({ ...initialValidation });

  const dispatch = useDispatch();
  const location = useSelector((state) => state.AdminAboutUs);

  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);

  console.log(location);
  useEffect(() => {
    if (!location?.organisationData?.locationContact) {
      dispatch(getOrganisation());
    }
    if (location?.organisationData?.locationContact) {
      setLocationData(location.organisationData);
    }
  }, [location, dispatch]);

  const fillForm = (e) => {
    const valueData = e.target.value;
    const inputName = e.target.name;
    switch (true) {
      case inputName === "email":
        const validEmail = emailValidation(valueData);
        setValidation({
          ...validation,
          email: valueData,
          emailErrorFlag: !validEmail,
          emailError: !validEmail && "Invalid Email id !",
        });
        break;
      case inputName === "phone":
        const validMobile = mobileValidation(valueData);
        setValidation({
          ...validation,
          phone: valueData,
          phoneErrorFlag: !validMobile,
          phoneError: !validMobile && "Invalid Phone number !",
        });
        break;
      case inputName === "name":
        const validName = valueData.trim() === "";
        setValidation({
          ...validation,
          senderName: valueData,
          nameErrorFlag: validName,
          nameError: validName && "Name is required !",
        });
        break;
      case inputName === "message":
        const validMessage = valueData.trim() === "";
        setValidation({
          ...validation,
          message: valueData,
          messageErrorFlag: validMessage,
          messageError: validMessage && "Message is required !",
        });
        break;
      default:
        return "";
    }
  };

  const sendInqueryFunc = () => {
    // eslint-disable-next-line
    const { senderName, email, phone, message, ...restProps } = validation;
    const data = {
      senderName,
      email,
      phone,
      message,
    };
    dispatch(sendInquery(data));
  };

  return (
    <div className="reach-us-container">
      <div className="reach-us-hero">
        <div className="main-hero-text"> We'd love to here from you</div>
        <div className="sub-hero-text">
          Whether you have a question about the Product, process, or anything
          our team is ready to anwes all your questions
        </div>
        {/* <button className="btn reach-us-btn">GET IN TOUCH</button> */}
      </div>
      <div className="location-form">
        <div className="location-container">
          <div className="location-card">
            <div className="reach-us-heading">
              <div className="icon-text">
                <img
                  className="enquiries-icon"
                  alt=""
                  src="https://website-assets-fw.freshworks.com/attachments/cjpv3wcq0003llpfzzxodiien-enquiry.svg"
                />
                <div className="sales-heading">Sales Enquiries</div>
              </div>
              <div className="heading-main">
                Interested in any of our products? Talk to our experts today
              </div>
              <div className="phone-list">
                {locationData.locationContact &&
                  locationData.locationContact.map((m) => (
                    <div className="location-title">
                      <div className="location-name">{m.location}:</div>
                      <a className="phone" href={`tel:+91${m.contact}`}>
                        +91{m.contact}
                      </a>
                    </div>
                  ))}
              </div>
            </div>
            <div className="line" />
            <div className="reach-us-heading">
              <div className="icon-text">
                <img className="office-icon" alt="" src={officeLocation} />
                <div className="sales-heading">Office locations</div>
              </div>
              <div className="phone-list">
                {locationData.locationContact &&
                  locationData.locationContact.map((m) => (
                    <div className="address-title">
                      <div className=" ">{m.location}</div>
                      <div className="location-name p-l-8">{m.address}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-heading">Make An Inquery!</div>
          <div className="main-form">
            <p type="Name:">
              <input
                name="name"
                value={validation.name}
                onChange={(e) => fillForm(e)}
                className="input-type"
                placeholder="Write your name here.."
              ></input>
            </p>
            <div>
              {validation.nameErrorFlag !== "" && (
                <p className="error-message">{validation.nameError}</p>
              )}
            </div>
            <p type="Email:">
              <input
                name="email"
                value={validation.email}
                onChange={(e) => fillForm(e)}
                className="input-type"
                placeholder="Let us know how to contact you back.."
              ></input>
            </p>
            <div>
              {validation.emailErrorFlag && (
                <p className="error-message">{validation.emailError}</p>
              )}
            </div>
            <p type="Phone:">
              <input
                name="phone"
                value={validation.phone}
                onChange={(e) => fillForm(e)}
                className="input-type"
                placeholder="Let us know how to contact you back.."
              ></input>
            </p>
            <div>
              {validation.phoneErrorFlag && (
                <p className="error-message">{validation.phoneError}</p>
              )}
            </div>
            <p type="Message:">
              <textarea
                name="message"
                value={validation.message}
                onChange={(e) => fillForm(e)}
                rows={4}
                className="input-type"
                placeholder="What would you like to tell us.."
              ></textarea>
            </p>
            <div>
              {validation.messageErrorFlag && (
                <p className="error-message">{validation.messageError}</p>
              )}
            </div>
            <div className="btn-container">
              <button
                className={
                  validation.name === "" || validation.message === ""
                    ? "disabled-btn"
                    : "form-btn"
                }
                onClick={() => sendInqueryFunc()}
              >
                Send Inquery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  emailValidation,
  mobileValidation,
} from "../AdminComponents/Pages/utils";
import {
  getOrganisationOwner,
  sendInquery,
} from "../Redux/Thunks/AdminAboutUs";

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

export default function AboutUs() {
  const [aboutUs, setAboutUs] = useState();
  const [validation, setValidation] = useState({ ...initialValidation });

  const aboutUsRedux = useSelector((state) => state.AdminAboutUs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!aboutUsRedux.OrganisationOwner) {
      dispatch(getOrganisationOwner());
    }
    if (aboutUsRedux) {
      setAboutUs(aboutUsRedux.OrganisationOwner);
    }
    // eslint-disable-next-line
  }, [aboutUsRedux]);

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
        console.log(validName);
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

  console.log(aboutUs, "<>?");

  return (
    <div className="about-us-container">
      <section className="about-us-detials">
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
          <div className="main-img-text form-heading">
            {aboutUs?.owner?.ownerText}
          </div>
        </div>
        <div className="about-us-story">
          <div className="short-story">
            <div className="mb-2 blue-link main">Short Story</div>
            {aboutUs?.aboutUsPage?.shortStory}
            {/* Especially one that starts with “I was born in good ol’ Madison,
            Wisconsin. The son of a Librarian and a Researcher.” It also goes on
            to tell you how he and his family survived Hurricane Andrew and how
            his sister was born that night. Who is this guy? Blake Suárez is an
            illustrator and designer with a fantastic sense of humor. */}
          </div>
          <div>
            <div className="mt-3 mb-1 blue-link main">Long Story</div>
            {aboutUs?.aboutUsPage?.longStory}
            {/* If you’re going for a traditional look and feel in your designs,
            you’re definitely going to want to go the serif route. “Serif fonts
            have been widely used in books, newspapers, and magazines, which is
            why they remind us of more classical, formal and sophisticated
            themes—think of Old English and Roman scripture,” says Robyn Young,
            founder of branding agency robyn young & co. Serif fonts are a great
            choice for brands that want to be seen as trustworthy, established,
            and reliable. “Because serif typefaces date back to the 18th
            century, companies that utilize serif fonts are often seen as more
            established, serious, and traditional,” says Downey. “Consumers are
            drawn to the traditional look because of the implied heritage and
            loyalty of the brand.” */}
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
      </section>
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

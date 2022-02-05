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
    window.scroll(0, 0);
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
    <div className="about-us-container">
      <div className="about-us-text">
        <div className="text">
          <p>
            In the early eighties a new horizon began taking shape. Precision,
            perfection and excellence were the architects of this horizon in the
            packaging industry. And from there rose the sun…
          </p>
          <p>
            With the humble beginning of Kin Industries in 1989 as a
            co-manufacturer of PET Preforms, the company soon realized the need
            of our valued customers for equally good closures and caps in line
            with the production schedules. Our founder Chairman, Mr. K. L.
            Mundhra not only saw this as a business opportunity but also offered
            his customers extended solutions to their packaging fulfilment by
            offering them the values of Trust, Quality, Timely Deliveries and
            Competitive Pricing.
          </p>
          <p>
            This vision of Mr. K. L. Mundhra was realized by the commissioning
            of Kin Industries’s first closures and caps manufacturing unit in
            2008 in Baddi, North India, a town that was already being realized
            as an industrial hub for the FMCG &amp; Healthcare industry in
            India. Since then, Kin Industries has focused its attention on
            closures and caps segment on a full-time basis.
          </p>
          <p>
            With India being a large consumer-based economy, Kin Industries soon
            felt that there was a need to offer timely deliveries to the rest of
            the geographical territories for the company’s esteemed customers.
            In 2009, another unit (J 1) was commissioned in Jalgaon,
            Maharashtra. The location was strategic in terms of catering to the
            plants in Central &amp; Western India, and also reached fast enough
            to the port town of Nhava Sheva, JNPT for exports. The capacity
            expansion was done with the commissioning of another unit (J 2) in
            Jalgaon itself.
          </p>
          <p>
            The company entered the closure manufacturing business using two
            compression moulding presses from Sacmi, Italy. Today, the company
            manufactures more than 10 billion of CSD, Hot-Fill, Warm-Fill and
            water closures by processing more than 12000 tons of PP and PE
            annually. With its qualitative and cost-effective solutions, the
            company today is a leading supplier to renowned brands like
            Coca-Cola, Pepsico, Parle, Tata-Himalayan, ITC, Amul, etc., apart
            from being a government recognized Star-Export House. The company is
            at the pinnacle of success, with a strong financial background,
            headquartered in the commercial capital of India- Mumbai. Kin
            Industries is particularly committed to developing innovative
            plastic closures to support its customers’ success. The roots of
            this success are still grounded in its Vision, Mission and
            Philosophy.
          </p>
        </div>
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
      </div>

      {/* ------------- */}
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

import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Glide from "@glidejs/glide";

import Rocket from "../images/rocket.svg";
import BarChart from "../images/barChart.svg";
import PieChart from "../images/pie-chart.svg";
import Amazon from "../images/amazon.png";
import Apple from "../images/apple.png";
import Cocacola from "../images/cocacola.png";
import Facebook from "../images/facebook.png";
import Google from "../images/google.png";
import Macdonald from "../images/mcdonalds.png";
import Samsung from "../images/samsung.png";

import { getSettingHome } from "../Redux/Thunks/AdminHome";
import Loading from "../Component/Loading";
import { Link } from "react-router-dom";

const sliderConfiguration = {
  animationDuration: 500,
  autoplay: 3000,
  dragDistance: false,
  gap: 15,
  hoverMouse: false,
  perView: window.innerWidth <= 700 ? 1 : window.innerWidth <= 769 ? 3 : 4,
  paddings: window.innerWidth <= 700 ? "10%" : "25%",
  reqwind: true,
  startAt: 0,
  type: "carousel",
};

const homeIntialData = {
  setting: {
    homeHeroColor: "",
    paralexData: [],
    card1: {
      heading: "",
      subHeading: "",
    },
    card2: {
      heading: "",
      subHeading: "",
    },
    card3: {
      heading: "",
      subHeading: "",
    },
    videoCode: "",
    quotes: "",
    name: "",
  },
  bestProductData: [],
};

const initialHero = {
  application: "",
  categoryName: "",
  design: "",
  nominalDiameter: "",
  process: "",
  productDescription: "",
  productImage: "",
  productName: "",
  shellMatrial: "",
  shellWeight: "",
  _id: "",
};

export default function Home() {
  const [hero, setHero] = useState({ ...initialHero });
  const [homeData, setHomeData] = useState({ ...homeIntialData });
  const [slider] = useState(new Glide(".glide", sliderConfiguration));
  const [countNum, setcount] = useState(0);

  const dispatch = useDispatch();
  const pageHomeData = useSelector((state) => state.AdminHomeSetting.setting);

  const changeHero = () => {
    setcount((count) => count + 1);
  };

  const clients = useMemo(() => {
    const cardClient = [
      { id: 1, name: "Amazon", img: Amazon },
      { id: 2, name: "Apple", img: Apple },
      { id: 3, name: "Macdonald", img: Macdonald },
      { id: 4, name: "Cocacola", img: Cocacola },
      { id: 5, name: "Google", img: Google },
      { id: 6, name: "Facebook", img: Facebook },
      { id: 7, name: "Samsung", img: Samsung },
    ];
    return (
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="client-cards">
            {cardClient.map((m) => (
              <li className="glide__slide slider">
                <div className="card-container">
                  <div className="image">
                    <img alt="" className="img" src={m.img} />
                  </div>
                  <div className="company-name">{m.name}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }, []);

  useEffect(() => {
    Aos.init();
    const heroTimeid = setInterval(() => changeHero(), 5000);
    return () => {
      clearInterval(heroTimeid);
    };
  }, []);

  useEffect(() => {
    if (hero._id !== "") {
      if (countNum >= homeData.bestProductData.length - 1) {
        setcount(0);
      } else if (hero._id !== homeData.bestProductData[countNum]._id) {
        setHero(homeData.bestProductData[countNum]);
      }
    }
  }, [countNum, hero._id, homeData.bestProductData]);

  useEffect(() => {
    if (!pageHomeData) {
      dispatch(getSettingHome());
    }
    if (pageHomeData) {
      setHomeData({
        ...homeData,
        setting: pageHomeData.setting,
        bestProductData: pageHomeData.bestProductData,
      });
      if (hero._id === "") {
        setHero(pageHomeData.bestProductData[0]);
      }
      slider.mount();
    }
    // eslint-disable-next-line
  }, [dispatch, pageHomeData, slider]);
  return (
    <div className="home-container">
      {!pageHomeData ? (
        <Loading />
      ) : (
        <>
          <div
            className="hero-container"
            style={{
              background: `${homeData.setting.homeHeroColor || "#22bda6"}`,
            }}
          >
            <div className="home-content">
              <div
                className="text-box"
                data-aos="fade-right"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine"
              >
                <h2>
                  {hero?.productName}
                  <br />
                  <span>I like</span>
                </h2>
                <p>{hero?.productDescription}</p>
                <Link to="/product">View Products</Link>
              </div>
              <div className="img-box">
                <img
                  alt=""
                  src={`https://kinindustries.s3.ap-south-1.amazonaws.com/product/${hero?.productImage}`}
                  className="pepsi"
                />
              </div>
              <ul className="thumb">
                {homeData.bestProductData.map((m, index) => (
                  <li
                    className={`${m.id === hero?.id && "active-img"}`}
                    onClick={() => setHero(homeData.bestProductData[index])}
                  >
                    <img
                      alt=""
                      src={`https://kinindustries.s3.ap-south-1.amazonaws.com/product/${m.productImage}`}
                    />
                  </li>
                ))}
              </ul>
              <ul className="sci">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa fa-facebook-official"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>;
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="home-cards">
            <div
              className="home-card selected"
              data-aos-delay="450"
              data-aos="fade-up"
            >
              <div className="img-container">
                <img alt="" src={BarChart} />
              </div>
              <div className="card-header">
                {homeData.setting.card1.heading}
                <div className="highlight"></div>
              </div>

              <p>{homeData.setting.card1.subHeading}</p>
            </div>
            <div className="home-card" data-aos-delay="550" data-aos="fade-up">
              <div className="img-container">
                <img alt="" src={Rocket} />
              </div>
              <div className="card-header">
                {homeData.setting.card2.heading}
                <div className="highlight"></div>
              </div>
              <p>{homeData.setting.card2.subHeading}</p>
            </div>
            <div className="home-card" data-aos-delay="650" data-aos="fade-up">
              <div className="img-container">
                <img alt="" src={PieChart} />
              </div>
              <div className="card-header">
                {homeData.setting.card3.heading}
                <div className="highlight"></div>
              </div>
              <p>{homeData.setting.card3.subHeading}</p>
            </div>
          </div>
          <div></div>
          <div
            className="parallax-container"
            data-aos-delay="350"
            data-aos="fade-up"
          >
            <div className="image-text-overlay text-middle-left">
              {homeData.setting.paralexData.map((m) => {
                return (
                  <p>
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <div className="overlay-title">
                          {isVisible ? (
                            <div className="count-text">
                              <CountUp end={m.count} duration={4} />
                              <div className="overlay-subtext">{m.text}</div>
                            </div>
                          ) : (
                            <CountUp end={0} />
                          )}
                        </div>
                      )}
                    </VisibilitySensor>
                  </p>
                );
              })}
              <div className="overlay-white"></div>
            </div>
          </div>
          <div
            className="our-client-container"
            data-aos-delay="350"
            data-aos="fade-up"
          >
            <div className="client-heading">
              <div>
                Our Clients<div className="highlight"></div>
              </div>
            </div>
            {clients}
            <div
              className="video-responsive"
              data-aos-delay="350"
              data-aos="fade-up"
            >
              <iframe
                width="853"
                height="380"
                src={`https://www.youtube.com/embed/${homeData.setting.videoCode}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </div>
          <div className="envirnoment-container">
            <div className="text-container">
              “{homeData.setting.quotes}.”
              <br />
              <div className="ceo">
                -{homeData.setting.name}, Pesident and CEO{" "}
              </div>
            </div>
            <a className="make-inquery" href="/#">
              Making a POSITIVE IMPACT !
            </a>
          </div>
        </>
      )}
    </div>
  );
}

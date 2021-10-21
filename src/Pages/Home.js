import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Glide from "@glidejs/glide";

// import './style.scss';

import pepsi1 from "../images/pepsi001.png";
import pepsi2 from "../images/pepsi002.png";
import pepsi3 from "../images/pepsi003.png";
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


const heroData = [
  {
    id: 1,
    heading: "refreshing blue",
    sub: "This is the best in class and most sold pepsi in the market,between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network, or may also	be sent via an Internet connection",
    img: pepsi1,
  },
  {
    id: 2,
    heading: "feel light",
    sub: "If you are Health concises than this product can reduce your weight,between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network, or may also	be sent via an Internet connection ",
    img: pepsi2,
  },
  {
    id: 3,
    heading: "Less Sweet",
    sub: "Zero sugar means no added any sweetness which means this product is Raw in Sweetness, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network, or may also	be sent via an Internet connection ",
    img: pepsi3,
  },
];

let count = 0;

const cardClient = [
  { id: 1, name: "Amazon", img: Amazon },
  { id: 2, name: "Apple", img: Apple },
  { id: 3, name: "Macdonald", img: Macdonald },
  { id: 4, name: "Cocacola", img: Cocacola },
  { id: 5, name: "Google", img: Google },
  { id: 6, name: "Facebook", img: Facebook },
  { id: 7, name: "Samsung", img: Samsung },
];

const slidNumber = {
  min: 0,
  max: 4,
};

const homeIntialData = {
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
};

export default function Home() {
  const [hero, setHero] = useState(heroData[0]);
  const [minMax, setMinMax] = useState({ ...slidNumber });
  const [slider] = useState(new Glide(".glide", sliderConfiguration));
  const [homeData, setHomeData] = useState({ ...homeIntialData });

  const dispatch = useDispatch();

  const pageHomeData = useSelector((state) => state.AdminHomeSetting.setting);

  const changeHero = () => {
    if (count >= heroData.length) {
      count = 0;
    }
    setHero(heroData[count]);
    count = count + 1;
  };

  const clients = useMemo(() => {
    return (
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="client-cards">
            {cardClient.map((m) => (
              <li className="glide__slide slider">
                <div className="card-container">
                  <div className="image">
                    <img className="img" src={m.img} />
                  </div>
                  <div className="company-name">{m.name}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }, [cardClient.length]);

  const changeCards = () => {
    cardClient.length <= minMax.max
      ? setMinMax({ ...slidNumber })
      : setMinMax({ min: minMax.min + 1, max: minMax.max + 1 });
  };

  useEffect(() => {
    Aos.init();
    const heroTimeid = setInterval(changeHero, 5000);

    return () => {
      clearInterval(heroTimeid);
    };
  }, []);

  useEffect(() => {
    if (!pageHomeData) {
      dispatch(getSettingHome());
    } else {
      setHomeData(pageHomeData);
      slider.mount();
    }
  }, [pageHomeData, dispatch, slider]);


  return (
    <div className="home-container">
      {!pageHomeData ? (
        <Loading />
      ) : (
        <>
          <div
            className="hero-container"
            style={{ background: `${homeData.homeHeroColor || "#22bda6"}` }}
          >
            <div className="home-content">
              <div
                className="text-box"
                data-aos="fade-right"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine"
              >
                <h2>
                  {hero.heading}
                  <br />
                  <span>I like</span>
                </h2>
                <p>{hero.sub}</p>
                <a href="/product">View Products</a>
              </div>
              <div className="img-box">
                <img alt="" src={hero.img} className="pepsi" />
              </div>
              <ul className="thumb">
                {heroData.map((m, index) => (
                  <li
                    className={`${m.id === hero.id && "active-img"}`}
                    onClick={() => setHero(heroData[index])}
                  >
                    <img alt="" src={m.img} />
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
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-instagram" aria-hidden="true"></i>;
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
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
                {homeData.card1.heading}
                <div className="highlight"></div>
              </div>

              <p>{homeData.card1.subHeading}</p>
            </div>
            <div className="home-card" data-aos-delay="550" data-aos="fade-up">
              <div className="img-container">
                <img alt="" src={Rocket} />
              </div>
              <div className="card-header">
                {homeData.card2.heading}
                <div className="highlight"></div>
              </div>
              <p>{homeData.card2.subHeading}</p>
            </div>
            <div className="home-card" data-aos-delay="650" data-aos="fade-up">
              <div className="img-container">
                <img alt="" src={PieChart} />
              </div>
              <div className="card-header">
                {homeData.card3.heading}
                <div className="highlight"></div>
              </div>
              <p>{homeData.card3.subHeading}</p>
            </div>
          </div>
          <div></div>
          <div
            className="parallax-container"
            data-aos-delay="350"
            data-aos="fade-up"
          >
            <div className="image-text-overlay text-middle-left">
              {homeData.paralexData.map((m) => {
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
                src={`https://www.youtube.com/embed/${homeData.videoCode}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </div>
          <div className="envirnoment-container">
            <div className="text-container">
              “{homeData.quotes}.”
              <br />
              <div className="ceo">-{homeData.name}, Pesident and CEO </div>
            </div>
            <a className="make-inquery" href="#">
              Making a POSITIVE IMPACT !
            </a>
          </div>
        </>
      )}
    </div>
  );
}

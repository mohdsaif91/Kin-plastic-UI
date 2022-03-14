import React, { useEffect, useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, ListItemText, TextField } from "@material-ui/core";

import {
  getSettingHome,
  updateSettingHome,
} from "../../Redux/Thunks/AdminHome";

import deleteImg from "../../images/deleteIcon.svg";
import Rocket from "../../images/rocket.svg";
import BarChart from "../../images/barChart.svg";
import PieChart from "../../images/pie-chart.svg";

const initialState = {
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

const paralexText = {
  count: 0,
  text: null,
};

export default function AdminHome() {
  const [data, setData] = useState({ ...initialState });
  const [text, setText] = useState({ ...paralexText });

  const dispatch = useDispatch();

  const pageSetting = useSelector((state) => state.AdminHomeSetting.setting);

  useEffect(() => {
    if (!pageSetting) {
      console.log("MAtter In HOME !!!!!!!!!!!!!!");
      dispatch(getSettingHome());
    }
    if (pageSetting) {
      setData(pageSetting.setting);
    }
  }, [dispatch, pageSetting]);

  const saveSetting = () => {
    dispatch(updateSettingHome(data));
  };

  const deleteCard = (i) => {
    const deletedItems = data.paralexData.filter((m, index) => i !== index);

    setData({
      ...data,
      paralexData: deletedItems,
    });
  };

  const addTextCount = () => {
    setData({
      ...data,
      paralexData: [
        ...data.paralexData,
        {
          count: text.count,
          text: text.text,
        },
      ],
    });

    setText({ ...paralexText });
  };

  return (
    <div className="admin-home">
      <div className="page-heading">Home Page Setting</div>
      <div className="button-container">
        <button
          size="large"
          className="updateButton"
          onClick={() => saveSetting()}
        >
          Save Setting
        </button>
      </div>
      <div className="home-hero-setting">
        <div className="page-sub-heading">Home Page hero setting</div>
        <div className="color-container">
          <div className="react-colorfull">
            <HexColorPicker
              color={data?.homeHeroColor}
              onChange={(color) => setData({ ...data, homeHeroColor: color })}
            />
            <HexColorInput
              className="HexColorInput"
              color={data?.homeHeroColor}
              onChange={(color) => setData({ ...data, homeHeroColor: color })}
              placeholder="Type a color"
              prefixed
              alpha
            />
          </div>
          <div
            className="color-display"
            style={{ backgroundColor: data?.homeHeroColor }}
          ></div>
        </div>
        <div className="Card-container">
          <div className="home-card">
            <div className="img-container">
              <img alt="" src={BarChart} />
            </div>
            <div className="card-header">
              <TextField
                className="input-fields"
                value={data?.card1?.heading}
                required
                onChange={(e) =>
                  setData({
                    ...data,
                    card1: {
                      heading: e.target.value,
                      subHeading: data?.card1?.subHeading,
                    },
                  })
                }
                id="outlined-required"
                label="Heading"
              />
              <div className="highlight"></div>
            </div>
            <TextField
              placeholder=""
              multiline
              rows={5}
              rowsMax={10}
              value={data?.card1?.subHeading}
              onChange={(e) =>
                setData({
                  ...data,
                  card1: {
                    heading: data?.card1?.heading,
                    subHeading: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="home-card">
            <div className="img-container">
              <img alt="" src={Rocket} />
            </div>
            <div className="card-header">
              <TextField
                className="input-fields"
                value={data?.card2?.heading}
                required
                onChange={(e) =>
                  setData({
                    ...data,
                    card2: {
                      heading: e.target.value,
                      subHeading: data?.card2?.subHeading,
                    },
                  })
                }
                id="outlined-required"
                label="Heading"
              />
              <div className="highlight"></div>
            </div>
            <TextField
              value={data?.card2?.subHeading}
              onChange={(e) =>
                setData({
                  ...data,
                  card2: {
                    heading: data?.card2?.heading,
                    subHeading: e.target.value,
                  },
                })
              }
              multiline
              rows={5}
              rowsMax={8}
            />
          </div>
          <div className="home-card">
            <div className="img-container">
              <img alt="" src={PieChart} />
            </div>
            <div className="card-header">
              <TextField
                className="input-fields"
                value={data?.card3?.heading}
                required
                onChange={(e) =>
                  setData({
                    ...data,
                    card3: {
                      heading: e.target.value,
                      subHeading: data?.card3?.subHeading,
                    },
                  })
                }
                id="outlined-required"
                label="Heading"
              />
              <div className="highlight"></div>
            </div>
            <TextField
              value={data?.card3?.subHeading}
              onChange={(e) =>
                setData({
                  ...data,
                  card3: {
                    heading: data?.card3?.heading,
                    subHeading: e.target.value,
                  },
                })
              }
              multiline
              rows={5}
              rowsMax={8}
            />
          </div>
        </div>
        <div className="paralex-container">
          <div className="left">
            <div className="input-container">
              <TextField
                value={text.text}
                required
                onChange={(e) => setText({ ...text, text: e.target.value })}
                id="outlined-required"
                label="Text"
              />
            </div>
            <div className="input-container">
              <TextField
                className="input-fields"
                value={text.count}
                required
                onChange={(e) => setText({ ...text, count: e.target.value })}
                id="outlined-required"
                label="Count"
              />
            </div>
            <div className="btn-container right">
              <button
                disabled={data?.paralexData?.length >= 3}
                className={`${
                  data?.paralexData?.length >= 3 ? "disabled-btn" : "normal-btn"
                }`}
                onClick={() => addTextCount()}
              >
                Save
              </button>
            </div>
          </div>
          <div className="text-count-List">
            <List>
              {data.paralexData.map((m, index) => {
                return (
                  <ListItem className="p-c-list">
                    <ListItemText className="card-text" primary={`${m.text}`} />
                    <ListItemText primary={`${m.count}`} />
                    <img
                      alt="delete"
                      onClick={() => deleteCard(index)}
                      className="del-img"
                      src={deleteImg}
                    />
                  </ListItem>
                );
              })}
            </List>
          </div>
        </div>
        <div className="video-quotes">
          <div className="video-link">
            <div className="url">https://www.youtube.com/embed/</div>
            <TextField
              className="input-fields"
              value={data.videoCode}
              required
              onChange={(e) => setData({ ...data, videoCode: e.target.value })}
              id="outlined-required"
              label="Video code"
            />
          </div>
          <div className="bottom-banner-container">
            <TextField
              className="bottom-input-fields big-input"
              value={data.quotes}
              required
              onChange={(e) => setData({ ...data, quotes: e.target.value })}
              id="outlined-required"
              label="Quotes"
            />
            <TextField
              className="bottom-input-fields"
              value={data.name}
              required
              onChange={(e) => setData({ ...data, name: e.target.value })}
              id="outlined-required"
              label="Name"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

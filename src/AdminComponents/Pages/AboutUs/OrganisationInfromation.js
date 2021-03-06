import React, { useEffect, useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import deleteImg from "../../../images/deleteIcon.svg";
import {
  getOrganisation,
  saveContactLocation,
  saveSocialMedia,
} from "../../../Redux/Thunks/AdminAboutUs";
import { emailValidation, mobileValidation } from "../utils";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: 26,
}));

const socialDropDown = {
  media: ["Facebook", "Instagram", "Youtube", "LinkedIn", "Twitter"],
  url: "",
  platform: "",
};
const intialData = {
  longStory: "",
  shortStory: "",
  locationContact: [],
  emailIds: [],
};

const initialLocationContact = {
  contact: "",
  location: "",
  address: "",
  contactError: false,
};
const initialEmail = {
  emailId: "",
  emailError: false,
};
export default function OrganisationInfromation() {
  const [aboutUs, setAboutUs] = useState({ ...intialData });
  const [locationContact, setLocationContact] = useState({
    ...initialLocationContact,
  });
  const [email, setEmail] = useState({ ...initialEmail });
  const [socialMedia, setSocialMedia] = useState({ ...socialDropDown });

  const dispatch = useDispatch();
  const aboutUsData = useSelector((state) => state.AdminAboutUs);

  useEffect(() => {}, [socialMedia.count]);

  useEffect(() => {
    if (!aboutUsData.organisationData) {
      dispatch(getOrganisation());
    }
    if (aboutUsData.organisationData) {
      setAboutUs(aboutUsData.organisationData);
    }
    // eslint-disable-next-line
  }, [aboutUsData.organisationData]);

  const handleOnChange = (e) => {
    setAboutUs({ ...aboutUs, [e.target.name]: e.target.value });
  };

  const changeSocial = (e) => {
    setSocialMedia({
      ...socialMedia,
      [e.target.name]: e.target.value,
    });
  };

  const saveContactLocationMethod = () => {
    const { contactError, ...restProps } = locationContact;
    if (aboutUs.locationContact.length === 0) {
      aboutUs.locationContact = [{ ...restProps }];
    } else {
      aboutUs.locationContact = [...aboutUs.locationContact, { ...restProps }];
    }
    dispatch(saveContactLocation(aboutUs));
    setLocationContact({ ...initialLocationContact });
  };

  const updateEmail = (e) => {
    setEmail({
      ...email,
      emailId: e.target.value,
      emailError: !emailValidation(e.target.value),
    });
  };

  const addEmailId = () => {
    if (aboutUs.emailIds.length === 0) {
      aboutUs.emailIds = [email.emailId];
    } else {
      aboutUs.emailIds = [...aboutUs.emailIds, email.emailId];
    }
    dispatch(saveContactLocation(aboutUs));
  };

  const mobileChange = (e) => {
    setLocationContact({
      ...locationContact,
      contact: e.target.value,
      contactError: !mobileValidation(e.target.value),
    });
  };

  const addTextCount = () => {
    dispatch(saveContactLocation(aboutUs));
  };

  const deleteLocationEmail = (flag, locationEmailIndex) => {
    if (flag) {
      aboutUs.locationContact = aboutUs.locationContact.filter(
        (f, index) => index !== locationEmailIndex
      );
    } else {
      aboutUs.emailIds = aboutUs.emailIds.filter(
        (f, index) => index !== locationEmailIndex
      );
    }
    dispatch(saveContactLocation(aboutUs));
  };

  const addSocial = () => {
    const data = { url: socialMedia.url, platForm: socialMedia.platform };
    if (aboutUs?.social.length === 0) {
      aboutUs.social = [data];
    } else {
      aboutUs.social = [...aboutUs.social, data];
    }
    dispatch(saveSocialMedia(aboutUs));
  };

  const deleteSocialMedia = (indexS) => {
    aboutUs.social = aboutUs.social.filter((f, index) => index !== indexS);
    dispatch(saveSocialMedia(aboutUs));
  };

  return (
    <div className="admin-alignment">
      <div className="story-container">
        <div>
          <div>
            <TextField
              className="long-short"
              label="Long story"
              value={aboutUs.longStory}
              name="longStory"
              onChange={(e) => handleOnChange(e)}
              multiline
              minRows={12}
              maxRows={12}
            />
            <TextField
              label="Short story"
              className="short-story"
              value={aboutUs.shortStory}
              onChange={(e) => handleOnChange(e)}
              name="shortStory"
              multiline
              minRows={8}
              maxRows={8}
            />
          </div>
          <div className="btn-container right">
            <button
              className={`${
                aboutUs.longStory === "" || aboutUs.shortStory === ""
                  ? "disabled-btn"
                  : "normal-btn"
              }`}
              onClick={() => addTextCount()}
            >
              Save stroy
            </button>
          </div>
          <div className="social-media-container">
            <div className="social-media">
              <div>
                <TextField
                  className="url-text-box"
                  label="URL"
                  value={socialMedia.url}
                  name="url"
                  onChange={(e) => changeSocial(e)}
                />

                <FormControl className="platform-text">
                  <InputLabel id="demo-simple-select-label">
                    Platform
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={socialMedia.platform}
                    name="platform"
                    label="Platform"
                    onChange={(e) => changeSocial(e)}
                  >
                    {socialMedia.media.map((m) => (
                      <MenuItem value={m}>{m}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div className="social-media-add-btn">
                <button
                  className={` ${
                    aboutUs?.social?.length >= 5 ? "disabled-btn" : "normal-btn"
                  }`}
                  onClick={() => addSocial()}
                >
                  Add
                </button>
              </div>
              <div className="list-container-aboutus">
                <Grid container spacing={4}>
                  <Grid item xs={12} md={12}>
                    <Demo>
                      <List>
                        {aboutUs?.social &&
                          aboutUs?.social.map((m, index) => (
                            <ListItem key={index} className="p-c-list">
                              <ListItemText
                                className="card-text"
                                primary={m.url}
                              />
                              <ListItemText primary={m.platForm} />
                              <img
                                alt="delete"
                                onClick={() => deleteSocialMedia(index)}
                                className="del-img"
                                src={deleteImg}
                              />
                            </ListItem>
                          ))}
                      </List>
                    </Demo>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us-container">
          <div className="contact-info-aboutus">
            Location and contact list
            <div>
              <TextField
                label="Contact number"
                className="office-text"
                value={locationContact.contact}
                onChange={(e) => mobileChange(e)}
              />
              <p className="error">
                {locationContact.contactError && "Invalid mobile number"}
              </p>
            </div>
            <div>
              <TextField
                label="location name"
                value={locationContact.location}
                onChange={(e) =>
                  setLocationContact({
                    ...locationContact,
                    location: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <TextField
                label="Address..."
                className="short-story"
                value={locationContact.address}
                onChange={(e) =>
                  setLocationContact({
                    ...locationContact,
                    address: e.target.value,
                  })
                }
                name="address"
                multiline
                minRows={6}
                maxRows={6}
              />
            </div>
            <div>
              <button
                className={`${
                  locationContact.location === "" ||
                  locationContact.contact === "" ||
                  locationContact.address === "" ||
                  aboutUs.locationContact.length >= 3
                    ? "disabled-btn"
                    : "normal-btn"
                }`}
                onClick={() => saveContactLocationMethod()}
              >
                Add Contact
              </button>
            </div>
          </div>
          <div className="list-container-aboutus">
            <Grid container spacing={4}>
              <Grid item xs={12} md={12}>
                <Demo>
                  <List>
                    {aboutUs.locationContact.map((m, index) => (
                      <ListItem key={index} className="p-c-list">
                        <ListItemText
                          className="card-text"
                          primary={m.contact}
                        />
                        <ListItemText primary={m.location} />
                        <img
                          alt="delete"
                          onClick={() => deleteLocationEmail(true, index)}
                          className="del-img"
                          src={deleteImg}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Demo>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="contact-us-container">
          <div className="contact-info-aboutus">
            Professional Email list
            <TextField
              label="email"
              value={email.emailId}
              name="email"
              onChange={(e) => updateEmail(e)}
            />
            <p className="error">{email.emailError && "Invalid email id"}</p>
            <div>
              <button
                className={`${
                  email.emailError || email.emailId === ""
                    ? "disabled-btn"
                    : "normal-btn"
                }`}
                onClick={() => addEmailId()}
              >
                Add email
              </button>
            </div>
          </div>
          <div className="list-container-aboutus">
            <Grid container spacing={4}>
              <Grid item xs={12} md={12}>
                <Demo>
                  <List>
                    {aboutUs.emailIds.map((m, index) => (
                      <ListItem key={index} className="p-c-list">
                        <ListItemText className="card-text" primary={m} />
                        <img
                          alt="delete"
                          onClick={() => deleteLocationEmail(false, index)}
                          className="del-img"
                          src={deleteImg}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Demo>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-header"></div>
      <article className="postcard">
        <div
          className="postcard__image"
          role="img"
          aria-label="postcard image man looking to left"
          title="image"
        ></div>

        <div className="postcard__body">
          <div className="postcard__text">
            <h2 className="postcard__title">
              <a className="postcard__title--link" href="#" target="_blank">
                Use the bluetooth SMS bandwidth, then you can
              </a>
            </h2>
            <p className="postcard__description">
              Compressing the monitor won't do anything, we need to synthesize
              the cross-platform HTTP feed.
            </p>
          </div>

          <div className="postcard__footer">
            <div className="postcard__author">
              <a className="author__avatar-wrap" href="#">
                <img
                  className="author__avatar"
                  src="https://raw.githubusercontent.com/alawe45/Html-Css-postcard/master/images/author__image.png"
                  alt="Profile image for Darlene Robertson"
                />
              </a>
              <div className="author__info">
                <address className="author__name-wrap">
                  <a className="author__name" href="#">
                    Darlene Robertson
                  </a>
                </address>
                <time className="author__time">March 12, 2021</time>
              </div>
            </div>

            <a
              className="postcard__read-more"
              href="#"
              aria-label="Continue reading"
            >
              <i
                className="bx bx-right-arrow-alt read-more__icon"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </article>
      <article className="postcard">
        <div
          className="postcard__image"
          role="img"
          aria-label="postcard image man looking to left"
          title="image"
        ></div>

        <div className="postcard__body">
          <div className="postcard__text">
            <h2 className="postcard__title">
              <a className="postcard__title--link" href="#" target="_blank">
                Use the bluetooth SMS bandwidth, then you can
              </a>
            </h2>
            <p className="postcard__description">
              Compressing the monitor won't do anything, we need to synthesize
              the cross-platform HTTP feed.
            </p>
          </div>

          <div className="postcard__footer">
            <div className="postcard__author">
              <a className="author__avatar-wrap" href="#">
                <img
                  className="author__avatar"
                  src="https://raw.githubusercontent.com/alawe45/Html-Css-postcard/master/images/author__image.png"
                  alt="Profile image for Darlene Robertson"
                />
              </a>
              <div className="author__info">
                <address className="author__name-wrap">
                  <a className="author__name" href="#">
                    Darlene Robertson
                  </a>
                </address>
                <time className="author__time">March 12, 2021</time>
              </div>
            </div>

            <a
              className="postcard__read-more"
              href="#"
              aria-label="Continue reading"
            >
              <i
                className="bx bx-right-arrow-alt read-more__icon"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </article>
      <article className="postcard">
        <div
          className="postcard__image"
          role="img"
          aria-label="postcard image man looking to left"
          title="image"
        ></div>

        <div className="postcard__body">
          <div className="postcard__text">
            <h2 className="postcard__title">
              <a className="postcard__title--link" href="#" target="_blank">
                Use the bluetooth SMS bandwidth, then you can
              </a>
            </h2>
            <p className="postcard__description">
              Compressing the monitor won't do anything, we need to synthesize
              the cross-platform HTTP feed.
            </p>
          </div>

          <div className="postcard__footer">
            <div className="postcard__author">
              <a className="author__avatar-wrap" href="#">
                <img
                  className="author__avatar"
                  src="https://raw.githubusercontent.com/alawe45/Html-Css-postcard/master/images/author__image.png"
                  alt="Profile image for Darlene Robertson"
                />
              </a>
              <div className="author__info">
                <address className="author__name-wrap">
                  <a className="author__name" href="#">
                    Darlene Robertson
                  </a>
                </address>
                <time className="author__time">March 12, 2021</time>
              </div>
            </div>

            <a
              className="postcard__read-more"
              href="#"
              aria-label="Continue reading"
            >
              <i
                className="bx bx-right-arrow-alt read-more__icon"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </article>
      <div className="our-employee">
        <div className="emp-heading">Employee Spotlight</div>
        <div className="emp-list">
          <div className="emp-detials">
            <img
              src="https://www.machinemetrics.com/hubfs/Jeff%20Rodriguez%20(1).jpg"
              alt="Jeff Rodriguez (1)"
              loading="lazy"
            />
            <div className="img-info">
              <div className="img-heading">Meet Jeff!</div>
              <div className="img-sub-heading">
                “Fan of the Oxford Comma and advocate for adding ‘Nungus’ to the
                dictionary”
              </div>
            </div>
          </div>
          <div className="emp-detials">
            <img
              src="https://www.machinemetrics.com/hubfs/Sahar.jfif"
              alt="Sahar"
              loading="lazy"
            />
            <div className="img-info">
              <div className="img-heading">Meet Sahar!</div>
              <div className="img-sub-heading">
                “Professional roadtripper and creator of family wherever she
                goes”
              </div>
            </div>
          </div>
          <div className="emp-detials">
            <img
              src="https://www.machinemetrics.com/hubfs/Paul_Richards.png"
              alt="Paul_Richards"
              loading="lazy"
            />
            <div className="img-info">
              <div className="img-heading">Meet Paul!</div>
              <div className="img-sub-heading">
                “Real-life Transformer and Do-er of-all-the-things”
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="hero-image-container">
				<div className="window-background"></div>
				<div className="moon"></div>
				<img
					className="hero-image"
					src="//cssanimation.rocks/images/courses/animation_101/animation_101.svg"
					alt="Daily emails animation"
				/>
				<div className="screen-container"></div>
				<div className="notification"></div>
			</div> */}
    </div>
  );
}

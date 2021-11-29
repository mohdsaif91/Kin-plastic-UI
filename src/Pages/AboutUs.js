import React from "react";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <section className="about-us-detials">
        <div className="img-container">
          <div className="emp-detials">
            <img
              src="https://www.machinemetrics.com/hubfs/Paul_Richards.png"
              alt="Paul_Richards"
              loading="lazy"
              className="main-img"
            />
          </div>
          <div className="main-img-text blue-link form-heading">
            J.K Rowlling
          </div>
          <div className="main-img-text form-heading">Company's CEO</div>
        </div>
        <div className="about-us-story">
          <div className="short-story">
            <div className="mb-2 blue-link main">Short Story</div>
            Especially one that starts with “I was born in good ol’ Madison,
            Wisconsin. The son of a Librarian and a Researcher.” It also goes on
            to tell you how he and his family survived Hurricane Andrew and how
            his sister was born that night. Who is this guy? Blake Suárez is an
            illustrator and designer with a fantastic sense of humor.
          </div>
          <div>
            <div className="mt-3 mb-1 blue-link main">Long Story</div>If you’re
            going for a traditional look and feel in your designs, you’re
            definitely going to want to go the serif route. “Serif fonts have
            been widely used in books, newspapers, and magazines, which is why
            they remind us of more classical, formal and sophisticated
            themes—think of Old English and Roman scripture,” says Robyn Young,
            founder of branding agency robyn young & co. Serif fonts are a great
            choice for brands that want to be seen as trustworthy, established,
            and reliable. “Because serif typefaces date back to the 18th
            century, companies that utilize serif fonts are often seen as more
            established, serious, and traditional,” says Downey. “Consumers are
            drawn to the traditional look because of the implied heritage and
            loyalty of the brand.”
          </div>
        </div>
        <div className="form-container">
          <div className="form-heading">Make An Inquery!</div>
          <form class="main-form">
            <p type="Name:">
              <input
                className="input-type"
                placeholder="Write your name here.."
              ></input>
            </p>
            <p type="Email:">
              <input
                className="input-type"
                placeholder="Let us know how to contact you back.."
              ></input>
            </p>
            <p type="Phone:">
              <input
                className="input-type"
                placeholder="Let us know how to contact you back.."
              ></input>
            </p>
            <p type="Message:">
              <textarea
                rows={4}
                className="input-type"
                placeholder="What would you like to tell us.."
              ></textarea>
            </p>
            <div className="btn-container">
              <button className="form-btn">Send Message</button>
            </div>
            {/* <div className="footer">
              <span class="fa fa-phone"></span>001 1023 567
              <span class="fa fa-envelope-o"></span> contact@company.com
            </div> */}
          </form>
        </div>
      </section>
      <section>
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
                  “Fan of the Oxford Comma and advocate for adding ‘Nungus’ in
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
      </section>

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

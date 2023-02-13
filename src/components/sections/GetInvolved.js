import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const GetInvolved = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Get Involved",
    paragraph: "",
  };

  return (
    <section id="involved" {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12">Want to stay informed?</h3>
                <p className="m-0">
                  {" "}
                  Subscribe to the{" "}
                  <a href="http://lists.openresearch.institute/listinfo.cgi/Ribbit-Announcements-openresearch.institute">
                    Ribbit-Announcements
                  </a>{" "}
                  mailing list where we announce major feature releases and app
                  updates.
                </p>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12"> Want to test the technology?</h3>
                <p className="m-0">
                  Download Tech Demo 'Rattlegram'
                  <li className="list-reset">
                    <ul>
                      Google Play Store
                      <a href="https://play.google.com/store/apps/details?id=com.aicodix.rattlegram&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                        <img
                          alt="Get it on Google Play"
                          height={"auto"}
                          width={"153px"}
                          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        />
                      </a>
                    </ul>
                    <ul>
                      TestFlight for iOS
                      <a href="https://testflight.apple.com/join/VQKNeMkC">
                        <img
                          alt="TestFlight iOS"
                          height={"64px"}
                          width={"64px"}
                          src="testflight-64x64_2x.png"
                        />
                      </a>
                    </ul>
                  </li>
                  <h4>
                    Note: Tech demo is called rattlegram - Ribbit name will be
                    used when we reach Alpha release{" "}
                  </h4>
                  <div className="mb-12">
                    {" "}
                    Test your reception with the{" "}
                    <a href="https://youtube.com/shorts/PbRfXTfnlf8">
                      Test Signal
                    </a>{" "}
                    on YouTube.
                  </div>
                  <div>
                    Subscribe to the{" "}
                    <a href="http://lists.openresearch.institute/listinfo.cgi/Ribbit-Users-openresearch.institute">
                      Ribbit-Users
                    </a>{" "}
                    discussion mailing list where users can discuss the use of
                    the app, report success and help each other.
                  </div>
                </p>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12">Are you a developer?</h3>
                <p className="m-0">
                  <div className="mb-12">
                    Download and view the source on{" "}
                    <a href="https://github.com/aicodix/rattlegram">GitHub</a>.
                  </div>
                  <p>
                    Subscribe to the{" "}
                    <a href="http://lists.openresearch.institute/listinfo.cgi/Ribbit-Developers-openresearch.institute">
                      Ribbit-Developers
                    </a>{" "}
                    mailing list where we discuss the code.
                  </p>
                </p>
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12">Join the user community</h3>
                <p className="m-0">
                  Subscribe to the{" "}
                  <a href="http://lists.openresearch.institute/listinfo.cgi/Ribbit-Users-openresearch.institute">
                    Ribbit-Users
                  </a>{" "}
                  discussion mailing list where users can discuss the use of the
                  app, report success and help each other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GetInvolved.propTypes = propTypes;
GetInvolved.defaultProps = defaultProps;

export default GetInvolved;

import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsPhoneVibrate } from "react-icons/bs";
import { FaConnectdevelop, FaUsers } from "react-icons/fa";
import { GoBeaker } from "react-icons/go";
const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const About = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const noticeClasses = classNames(
    "innerClasses center-content",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );
  const sectionHeader = {
    title: "About",
    paragraph: "  ",
  };

  return (
    <section id="about" {...props} className={outerClasses}>
      <div className="container">
        <div className={noticeClasses}>
          <br />
          <b style={{ fontSize: 30 }}>We need Mobile App developers</b>
          <div style={{ fontSize: 20 }}>
            <br />
            If you are interested in helping, join the{" "}
            <a href="http://lists.openresearch.institute/listinfo.cgi/Ribbit-Developers-openresearch.institute">
              Developers
            </a>{" "}
            mailing list
          </div>
          <br />
        </div>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "50px",
                    }}
                  >
                    <BiMessageAltDetail />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Digital Messaging</h4>
                  <p className="m-0 text-sm">
                    Ribbit is a novel digital text messaging mode for VHF/UHF
                    communications for recreational and emergency use which
                    radically increases the density of information transmitted
                    by spectrum used.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "50px",
                    }}
                  >
                    <BsPhoneVibrate />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">No Hardware</h4>
                  <p className="m-0 text-sm">
                    It leverages the computing power of the modern smartphone to
                    increase the capabilities of any Handy Talkie without
                    requiring any additional hardware or cable.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "50px",
                    }}
                  >
                    <FaConnectdevelop />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Distributed Design</h4>
                  <p className="m-0 text-sm">
                    Its redundant distributed nature allows it to function even
                    when internet connectivity is lost during emergencies.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "50px",
                    }}
                  >
                    <GoBeaker />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Open Source</h4>
                  <p className="m-0 text-sm">
                    Ribbit is open source and currently in its early stages of
                    development.
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "50px",
                    }}
                  >
                    <FaUsers />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">ORI</h4>
                  <p className="m-0 text-sm">
                    Ribbit is a project of the Open Research Institute
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;

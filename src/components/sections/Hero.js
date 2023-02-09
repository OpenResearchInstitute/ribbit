import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Image from "../elements/Image";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section id="home" {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div
            className="reveal-from-top"
            data-reveal-value="20px"
            data-reveal-delay="600"
          >
            <Image
              src={require("./../../assets/images/ribbit-logo.png")}
              alt="Mascot"
              width={650}
              height={350}
            />
          </div>
          <div className="container-xs">
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              A new digital text messaging mode for VHF/UHF emergency
              communications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;

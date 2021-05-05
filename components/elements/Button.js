import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./../../styles/Button.module.scss";

const propTypes = {
  tag: PropTypes.elementType,
  menu: PropTypes.bool,
  long: PropTypes.bool,
  blue: PropTypes.bool,
  black: PropTypes.bool,
};

const defaultProps = {
  tag: "button",
  blue: true,
  black: false,
  long: false,
  menu: false,
};

const Button = ({ className, tag, blue, black, long, menu, ...props }) => {
  const classes = classNames(
    `${styles["button"]}`,
    blue && `${styles["btn-blue"]}`,
    black && `${styles["btn-black"]}`,
    long && `${styles["btn-primary-long"]}`,
    menu && `${styles["btn-primary-menu"]}`,
    className
  );

  const Component = tag;
  return <Component {...props} className={classes} />;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;

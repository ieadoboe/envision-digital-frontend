import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./../../styles/Button.module.scss";

const propTypes = {
  tag: PropTypes.elementType,
  black: PropTypes.bool,
  blue: PropTypes.bool,
  long: PropTypes.bool,
  menu: PropTypes.bool,
};

const defaultProps = {
  tag: "button",
  black: true,
  blue: false,
  long: false,
  menu: false,
};

const Button = ({ className, tag, blue, black, long, menu, ...props }) => {
  const classes = classNames(
    `${styles["button"]}`,
    black && `${styles["btn-black"]}`,
    blue && `${styles["btn-blue"]}`,
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

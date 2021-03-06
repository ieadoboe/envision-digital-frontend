import styles from "./../../styles/Header.module.scss";
import PropTypes from "prop-types";

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string, //typechecking to make sure what is returned is a string with prop types
  }).isRequired,
};

const Header = ({ data }) => {
  return (
    <>
      <div className={`container-3 center ${styles["page-header-inner"]}`}>
        {data.title && <h1>{data.title}</h1>}
      </div>
      <div className={`container-3 center ${styles["page-header-inner"]}`}>
        {data.paragraph && <h3>{data.paragraph}</h3>}
      </div>
    </>
  );
};

Header.propTypes = propTypes;

export default Header;

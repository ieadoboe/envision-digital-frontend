import styles from "./../styles/Header.module.scss";
import PropTypes from "prop-types";

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,//typechecking to make sure what is returned is a string with proptypes 
  }).isRequired
};

const Header = ({ data }) => {

  return (
    <div className={`container ${styles["header-section-inner"]}`}>
      {data.title && <h1>{data.title}</h1>}
    </div>
  );
};

Header.propTypes = propTypes;

export default Header;

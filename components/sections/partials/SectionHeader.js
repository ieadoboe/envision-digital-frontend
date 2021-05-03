import styles from "./../../../styles/SectionHeader.module.scss";
import PropTypes from "prop-types";

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4"]),
};

const defaultProps = {
  children: null,
  tag: "h3",
};

const SectionHeader = ({ className, data, children, tag, ...props }) => {

  const Component = tag;

  return (
    <>
      {(data.title || data.paragraph) && (
        <div className={`${[styles.center]}`}>
          <div>
            {children}
            {data.title && (
              <Component className={`${[styles.title]}`}>
                {data.title}
              </Component>
            )}
            {data.paragraph && <p>{data.paragraph}</p>}
          </div>
        </div>
      )}
    </>
  );
};

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;

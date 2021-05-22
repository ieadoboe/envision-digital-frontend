import styles from "./../../../styles/SectionHeader.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  data: PropTypes.shape({
    tag: PropTypes.string,
    title: PropTypes.string,
    paragraph: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(["h4"]),
  title: PropTypes.oneOf(["h2", "h3"]),
  paragraph: PropTypes.oneOf(["h3", "h4", "p"]),
  position: PropTypes.oneOf(["test", " "]),
};

const defaultProps = {
  children: null,
  tag: "h4",
  title: "h2",
  paragraph: "h3",
  position: " ",
};

const SectionHeader = ({
  className,
  data,
  children,
  tag,
  title,
  paragraph,
  position,
  ...props
}) => {

  const Component = tag;
  const Ping = title;
  const Paragraph = paragraph;

  return (
    <>
      {(data.tag || data.title || data.paragraph || position) && (
        <div className={`${position}`}>
          <div>
            {children}
            {data.tag && (
              <Component className={`${[styles.tag]}`}>{data.tag}</Component>
            )}
            {data.title && (
              <Ping className={`${styles["title"]}`}>{data.title}</Ping>
            )}
            {data.paragraph && (
              <Paragraph className={`${[styles.paragraph]}`}>
                {data.paragraph}
              </Paragraph>
            )}
          </div>
        </div>
      )}
    </>
  );
};

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;

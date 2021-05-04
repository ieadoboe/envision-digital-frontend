import styles from "./../../../styles/SectionHeader.module.scss";
import PropTypes from "prop-types";
import classNames from 'classnames';

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4"]),
  ping: PropTypes.oneOf(["h1", "h2", "h3", "h4, p"]),
  position: PropTypes.oneOf(["center", " ", "left"]),
};

const defaultProps = {
  children: null,
  tag: "h4",
  ping: "p",
  position: '',
};

const SectionHeader = ({
  className,
  data,
  children,
  tag,
  ping,
  position,
  ...props
}) => {
  const Component = tag;
  const Paragraph = ping;

  const classes = classNames(
    position && `${position}`,
    className
  );

  return (
    <>
      {(data.title || data.paragraph) && (
        <div className={classes}>
          <div>
            {children}
            {data.title && (
              <Component className={`${[styles.title]}`}>
                {data.title}
              </Component>
            )}
            {data.paragraph && <Paragraph>{data.paragraph}</Paragraph>}
          </div>
        </div>
      )}
    </>
  );
};

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;

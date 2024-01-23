import PropTypes from "prop-types";

export default function CurrentProject({ children }) {
  return <div>{children}</div>;
}

CurrentProject.propTypes = {
  children: PropTypes.node,
};

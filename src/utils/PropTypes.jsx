//PropTypes is a way to check the types of props passed to a component in React. It helps you catch bugs and unexpected errors by warning you if a prop is of the wrong type.

import PropTypes from "prop-types";

// the propType of info is required and must be a object.
export const PledgeCardPropTypes = {
  info: PropTypes.object.isRequired,
};

// the prop of openProductModal is required and that it has a boolean value.
export const ProductModalPropTypes = {
  openProductModal: PropTypes.bool.isRequired,
};

export const ShowProductModalPropTypes = {
  handleShowProductModal: PropTypes.func.isRequired,
};

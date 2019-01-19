import React from "react";
export default Component => ({ input, meta: { valid }, ...rest }) => (
  <Component {...input} {...rest} valid={valid} />
);
